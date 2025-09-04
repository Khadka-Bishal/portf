import { useState, useCallback, useEffect } from "react";
import { WindowState } from "../types/desktop";
import { fileContents } from "../data/portfolioContent";
import { localStorage, StoredWindowState } from "../lib/localStorage";

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextId, setNextId] = useState(1);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

  // Load windows from localStorage on mount
  useEffect(() => {
    const storedWindows = localStorage.getWindows();
    if (storedWindows.length > 0) {
      setWindows(storedWindows);
      const maxId = Math.max(
        ...storedWindows.map((w) => parseInt(w.id.split("-")[1]) || 0)
      );
      setNextId(maxId + 1);
    }
  }, []);

  // Save windows to localStorage whenever they change
  useEffect(() => {
    if (windows.length > 0) {
      localStorage.saveWindows(windows);
    }
  }, [windows]);

  const createWindow = useCallback(
    (
      title: string,
      type: "normal" | "terminal" | "game",
      file: string,
      icon: string
    ) => {
      const newWindow: WindowState = {
        id: `window-${nextId}`,
        title,
        type,
        content:
          type === "terminal"
            ? ""
            : type === "game"
            ? file
            : fileContents[file as keyof typeof fileContents] ||
              "<p>Content not found</p>",
        icon,
        position: {
          x: Math.max(50, window.innerWidth / 2 - 300 + windows.length * 40),
          y: Math.max(60, window.innerHeight / 2 - 200 + windows.length * 40),
        },
        size: { width: 600, height: 400 },
        isMinimized: false,
        isMaximized: false,
        zIndex: 100 + nextId,
      };

      setWindows((prev) => [...prev, newWindow]);
      setActiveWindowId(newWindow.id);
      setNextId((prev) => prev + 1);

      return newWindow;
    },
    [nextId, windows.length]
  );

  const closeWindow = useCallback((windowId: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId));
    setActiveWindowId((prev) => (prev === windowId ? null : prev));
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, isMinimized: true } : w))
    );
    setActiveWindowId((prev) => (prev === windowId ? null : prev));
  }, []);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? w.position : { x: 0, y: 0 },
              size: w.isMaximized
                ? w.size
                : { width: window.innerWidth, height: window.innerHeight - 48 },
            }
          : w
      )
    );
  }, []);

  const restoreWindow = useCallback((windowId: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === windowId ? { ...w, isMinimized: false } : w))
    );
    setActiveWindowId(windowId);
  }, []);

  const focusWindow = useCallback(
    (windowId: string) => {
      const maxZ = Math.max(...windows.map((w) => w.zIndex), 100);
      setWindows((prev) =>
        prev.map((w) => (w.id === windowId ? { ...w, zIndex: maxZ + 1 } : w))
      );
      setActiveWindowId(windowId);
    },
    [windows]
  );

  const updateWindowPosition = useCallback(
    (windowId: string, position: { x: number; y: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === windowId ? { ...w, position } : w))
      );
    },
    []
  );

  const snapWindow = useCallback(
    (
      windowId: string,
      snapType: "left" | "right" | "top" | "bottom" | "center"
    ) => {
      const windowState = windows.find((w) => w.id === windowId);
      if (!windowState) return;

      let newPosition = { x: 0, y: 0 };
      let newSize = { width: 600, height: 400 };

      switch (snapType) {
        case "left":
          newPosition = { x: 0, y: 32 };
          newSize = {
            width: window.innerWidth / 2,
            height: window.innerHeight - 32,
          };
          break;
        case "right":
          newPosition = { x: window.innerWidth / 2, y: 32 };
          newSize = {
            width: window.innerWidth / 2,
            height: window.innerHeight - 32,
          };
          break;
        case "top":
          newPosition = { x: 0, y: 32 };
          newSize = {
            width: window.innerWidth,
            height: (window.innerHeight - 32) / 2,
          };
          break;
        case "bottom":
          newPosition = { x: 0, y: (window.innerHeight - 32) / 2 + 32 };
          newSize = {
            width: window.innerWidth,
            height: (window.innerHeight - 32) / 2,
          };
          break;
        case "center":
          newPosition = {
            x: window.innerWidth / 2 - 300,
            y: window.innerHeight / 2 - 200,
          };
          newSize = { width: 600, height: 400 };
          break;
      }

      setWindows((prev) =>
        prev.map((w) =>
          w.id === windowId
            ? {
                ...w,
                position: newPosition,
                size: newSize,
                isMaximized: false,
              }
            : w
        )
      );
    },
    [windows]
  );

  const updateWindowSize = useCallback(
    (windowId: string, size: { width: number; height: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === windowId ? { ...w, size } : w))
      );
    },
    []
  );

  return {
    windows,
    activeWindowId,
    createWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
    snapWindow,
  };
};
