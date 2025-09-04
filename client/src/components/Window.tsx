import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WindowState } from "../types/desktop";
import Terminal from "./Terminal";
import Games from "./Games/Games";

interface WindowProps {
  window: WindowState;
  isActive: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onUpdatePosition: (position: { x: number; y: number }) => void;
  onUpdateSize: (size: { width: number; height: number }) => void;
  onOpenFile?: (file: string) => void;
}

const Window: React.FC<WindowProps> = ({
  window,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onUpdatePosition,
  onUpdateSize,
  onOpenFile,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && windowRef.current) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        onUpdatePosition({ x: Math.max(0, newX), y: Math.max(0, newY) });
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        const newWidth = Math.max(400, resizeStart.width + deltaX);
        const newHeight = Math.max(300, resizeStart.height + deltaY);
        onUpdateSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [
    isDragging,
    isResizing,
    dragStart,
    resizeStart,
    onUpdatePosition,
    onUpdateSize,
  ]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (
      e.target === e.currentTarget ||
      (e.target as HTMLElement).classList.contains("window-header")
    ) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - window.position.x,
        y: e.clientY - window.position.y,
      });
      onFocus();
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.size.width,
      height: window.size.height,
    });
    onFocus();
  };

  const renderContent = () => {
    if (window.type === "terminal") {
      return (
        <Terminal
          content={window.content}
          onCommand={(command: string) => {
            // Handle terminal commands if needed
          }}
          isActive={isActive}
        />
      );
    } else if (window.type === "game") {
      return <Games onClose={onClose} />;
    }

    return <div dangerouslySetInnerHTML={{ __html: window.content }} />;
  };

  if (window.isMinimized) {
    return null;
  }

  const windowStyle = window.isMaximized
    ? {
        left: 0,
        top: 0,
        width: "100vw",
        height: "calc(100vh - 48px)",
        borderRadius: 0,
      }
    : {
        left: window.position.x,
        top: window.position.y,
        width: window.size.width,
        height: window.size.height,
        borderRadius: "12px",
      };

  return (
    <motion.div
      ref={windowRef}
      className={`window fixed ${
        window.type === "terminal"
          ? "bg-gray-900 border-gray-700"
          : window.type === "game"
          ? "bg-black border-gray-600"
          : "bg-white border-gray-300"
      } rounded-xl shadow-2xl border min-w-96 min-h-64 flex flex-col backdrop-blur-sm`}
      style={{
        ...windowStyle,
        zIndex: window.zIndex,
        cursor: isDragging ? "grabbing" : "default",
      }}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.2 }}
      onMouseDown={handleMouseDown}
    >
      {/* Window Header */}
      <div className="window-header flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200 rounded-t-xl cursor-move">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{window.icon}</span>
          <span className="font-medium text-gray-800 truncate">
            {window.title}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={onMinimize}
            className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors"
          />
          <button
            onClick={onMaximize}
            className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 transition-colors"
          />
          <button
            onClick={onClose}
            className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors"
          />
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto relative">
        {renderContent()}

        {/* Resize Handle */}
        {!window.isMaximized && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-100 transition-opacity"
            onMouseDown={handleResizeMouseDown}
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Window;
