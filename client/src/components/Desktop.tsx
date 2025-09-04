import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowManager } from "../hooks/useWindowManager";
import { useIsMobile } from "../hooks/use-mobile";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import MenuBar from "./MenuBar";
import BootAnimation from "./BootAnimation";
import Terminal from "./Terminal";
import {
  DesktopIcon as DesktopIconType,
  ContextMenuState,
} from "../types/desktop";
import ContextMenu from "./ContextMenu";

const Desktop: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBoot, setShowBoot] = useState(true);

  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    isVisible: false,
    position: { x: 0, y: 0 },
    targetIcon: null,
  });

  const {
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
  } = useWindowManager();

  const [desktopIcons, setDesktopIcons] = useState<DesktopIconType[]>([
    {
      id: "about",
      name: "About.txt",
      file: "about.txt",
      type: "text",
      icon: "📄",
      position: { x: 50, y: 60 },
    },
    {
      id: "projects",
      name: "Projects",
      file: "projects",
      type: "folder",
      icon: "📁",
      position: { x: 150, y: 60 },
    },
    {
      id: "skills",
      name: "Skills.sh",
      file: "skills.sh",
      type: "script",
      icon: "⚡",
      position: { x: 250, y: 60 },
    },
    {
      id: "experience",
      name: "Experience.pdf",
      file: "experience.pdf",
      type: "pdf",
      icon: "📋",
      position: { x: 50, y: 160 },
    },
    {
      id: "contact",
      name: "Contact.url",
      file: "contact.url",
      type: "url",
      icon: "📧",
      position: { x: 150, y: 160 },
    },
    {
      id: "terminal",
      name: "Terminal",
      file: "terminal",
      type: "terminal",
      icon: "💻",
      position: { x: 250, y: 160 },
    },
    {
      id: "games",
      name: "Games",
      file: "games",
      type: "game",
      icon: "🎮",
      position: { x: 50, y: 260 },
    },
  ]);

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.filter = "invert(1) hue-rotate(180deg)";
    } else {
      document.body.style.filter = "none";
    }
  }, [isDarkMode]);

  const handleIconDoubleClick = (icon: DesktopIconType) => {
    if (icon.type === "terminal") {
      createWindow("Terminal", "terminal", "terminal", "💻");
    } else if (icon.type === "game") {
      createWindow("Games", "game", "games", "🎮");
    } else {
      const title = icon.name;
      createWindow(title, "normal", icon.file, icon.icon);
    }
  };

  const handleIconRightClick = (
    event: React.MouseEvent,
    icon: DesktopIconType
  ) => {
    event.preventDefault();
    setContextMenu({
      isVisible: true,
      position: { x: event.clientX, y: event.clientY },
      targetIcon: icon.id,
    });
  };

  const handleContextMenuClose = () => {
    setContextMenu((prev) => ({ ...prev, isVisible: false }));
  };

  const handleContextMenuOpen = () => {
    const targetIcon = desktopIcons.find(
      (icon) => icon.id === contextMenu.targetIcon
    );
    if (targetIcon) {
      handleIconDoubleClick(targetIcon);
    }
  };

  const handleWindowClick = (windowId: string) => {
    const window = windows.find((w) => w.id === windowId);
    if (window?.isMinimized) {
      restoreWindow(windowId);
    } else {
      focusWindow(windowId);
    }
  };

  const handleOpenFileFromTerminal = (file: string) => {
    const icon = desktopIcons.find((i) => i.file === file);
    if (icon) {
      handleIconDoubleClick(icon);
    }
  };

  const handleCreateTerminal = () => {
    createWindow("Terminal", "terminal", "terminal", "💻");
  };

  const handleIconPositionChange = (
    iconId: string,
    position: { x: number; y: number }
  ) => {
    setDesktopIcons((prev) =>
      prev.map((icon) => (icon.id === iconId ? { ...icon, position } : icon))
    );
  };

  const handleMenuOpen = (fileType: string) => {
    const icon = desktopIcons.find(
      (i) => i.file === fileType || i.type === fileType
    );
    if (icon) {
      handleIconDoubleClick(icon);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Alt + T: Open terminal
      if (e.ctrlKey && e.altKey && e.key === "t") {
        e.preventDefault();
        createWindow("Terminal", "terminal", "terminal", "💻");
      }

      // Escape: Close focused window
      if (e.key === "Escape" && activeWindowId) {
        closeWindow(activeWindowId);
      }

      // Window snapping shortcuts
      if (e.ctrlKey && activeWindowId) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            snapWindow(activeWindowId, "left");
            break;
          case "ArrowRight":
            e.preventDefault();
            snapWindow(activeWindowId, "right");
            break;
          case "ArrowUp":
            e.preventDefault();
            snapWindow(activeWindowId, "top");
            break;
          case "ArrowDown":
            e.preventDefault();
            snapWindow(activeWindowId, "bottom");
            break;
          case "c":
            e.preventDefault();
            snapWindow(activeWindowId, "center");
            break;
        }
      }

      // Theme toggle
      if (e.ctrlKey && e.key === "t") {
        e.preventDefault();
        setIsDarkMode(!isDarkMode);
      }

      // Number keys for quick file opening
      if (e.key >= "1" && e.key <= "6" && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (desktopIcons[index]) {
          handleIconDoubleClick(desktopIcons[index]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    activeWindowId,
    createWindow,
    closeWindow,
    snapWindow,
    isDarkMode,
    desktopIcons,
    handleIconDoubleClick,
  ]);

  if (showBoot) {
    return (
      <BootAnimation
        onComplete={() => {
          setShowBoot(false);
        }}
      />
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden select-none bg-slate-900">
      {/* Menu Bar */}
      <MenuBar
        onCreateTerminal={handleCreateTerminal}
        onOpenAbout={() => handleMenuOpen("about.txt")}
        onOpenProjects={() => handleMenuOpen("projects")}
        onOpenSkills={() => handleMenuOpen("skills.sh")}
        onOpenExperience={() => handleMenuOpen("experience.pdf")}
        onOpenContact={() => handleMenuOpen("contact.url")}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        windows={windows}
        activeWindowId={activeWindowId}
        onWindowClick={handleWindowClick}
      />

      {/* Desktop Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: isDarkMode
            ? "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            : "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          paddingTop: "32px",
        }}
      >
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            isDarkMode
              ? "bg-indigo-900 bg-opacity-30"
              : "bg-black bg-opacity-40"
          }`}
        ></div>

        {/* Enhanced Floating particles effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              isDarkMode ? "bg-blue-300" : "bg-white"
            } rounded-full opacity-60 cursor-pointer hover:opacity-100 hover:scale-150 transition-all duration-300`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            onClick={() => {
              // Create sparkle effect on click
              const sparkle = document.createElement("div");
              sparkle.className =
                "absolute w-4 h-4 bg-yellow-300 rounded-full opacity-80 animate-ping pointer-events-none";
              sparkle.style.left = `${Math.random() * 100}%`;
              sparkle.style.top = `${Math.random() * 100}%`;
              document.body.appendChild(sparkle);
              setTimeout(() => sparkle.remove(), 1000);
            }}
          />
        ))}

        {/* Matrix-style rain effect (subtle) */}
        {isDarkMode &&
          [...Array(8)].map((_, i) => (
            <div
              key={`matrix-${i}`}
              className="absolute w-px h-20 bg-green-400 opacity-20"
              style={{
                left: `${i * 12.5 + Math.random() * 10}%`,
                animation: `matrix-rain ${
                  3 + Math.random() * 2
                }s linear infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

        {/* Interactive cursor trail */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="cursor-trail"></div>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="relative z-10 pt-8">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            onDoubleClick={handleIconDoubleClick}
            onRightClick={handleIconRightClick}
            onPositionChange={handleIconPositionChange}
          />
        ))}
      </div>

      {/* Context Menu */}
      <ContextMenu
        contextMenu={contextMenu}
        onClose={handleContextMenuClose}
        onOpen={handleContextMenuOpen}
        onSnapWindow={(snapType) => {
          if (activeWindowId) {
            snapWindow(activeWindowId, snapType);
          }
        }}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />

      {/* Windows */}
      <div className="relative z-20">
        <AnimatePresence>
          {windows.map((window) => (
            <Window
              key={window.id}
              window={window}
              isActive={activeWindowId === window.id}
              onClose={() => closeWindow(window.id)}
              onMinimize={() => minimizeWindow(window.id)}
              onMaximize={() => maximizeWindow(window.id)}
              onFocus={() => focusWindow(window.id)}
              onUpdatePosition={(position) =>
                updateWindowPosition(window.id, position)
              }
              onUpdateSize={(size) => updateWindowSize(window.id, size)}
              onOpenFile={handleOpenFileFromTerminal}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Desktop;
