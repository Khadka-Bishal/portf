import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { DesktopIcon as DesktopIconType } from "../types/desktop";

interface DesktopIconProps {
  icon: DesktopIconType;
  onDoubleClick: (icon: DesktopIconType) => void;
  onRightClick: (event: React.MouseEvent, icon: DesktopIconType) => void;
  onPositionChange: (
    iconId: string,
    position: { x: number; y: number }
  ) => void;
}

const iconMap = {
  "fa-file-alt": (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "fa-folder": (
    <svg
      className="w-8 h-8 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </svg>
  ),
  "fa-terminal": (
    <svg
      className="w-8 h-8 text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "fa-file-pdf": (
    <svg
      className="w-8 h-8 text-red-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "fa-link": (
    <svg
      className="w-8 h-8 text-blue-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon,
  onDoubleClick,
  onRightClick,
  onPositionChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);
  const [clickCount, setClickCount] = useState(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dragRef.current) {
        const newX = Math.max(
          24,
          Math.min(window.innerWidth - 80, e.clientX - dragStart.x)
        );
        const newY = Math.max(
          32,
          Math.min(window.innerHeight - 120, e.clientY - dragStart.y)
        );
        onPositionChange(icon.id, { x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart, icon.id, onPositionChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragStart({
      x: e.clientX - icon.position.x,
      y: e.clientY - icon.position.y,
    });
    setIsDragging(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Clear any existing timeout
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }

    // Increment click count
    setClickCount((prev) => prev + 1);

    // Set timeout for double click detection
    clickTimeout.current = setTimeout(() => {
      if (clickCount === 0) {
        // Single click - just select (visual feedback only)
        // No action needed for single click
      } else if (clickCount >= 1) {
        // Double click - open the file/window
        onDoubleClick(icon);
      }
      setClickCount(0);
    }, 250); // Reduced timeout for faster response
  };

  return (
    <motion.div
      ref={dragRef}
      className="desktop-icon group cursor-pointer select-none"
      style={{
        position: "absolute",
        left: icon.position.x,
        top: icon.position.y,
        zIndex: isDragging ? 1000 : 10,
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onContextMenu={(e) => onRightClick(e, icon)}
      whileHover={{ scale: isDragging ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag={false}
    >
      <motion.div
        className={`w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200 ${
          isDragging ? "bg-opacity-40 shadow-lg" : ""
        }`}
        whileHover={{ y: isDragging ? 0 : -4 }}
        animate={{
          rotate: isDragging ? [0, 2, -2, 0] : 0,
          scale: isDragging ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {iconMap[icon.icon as keyof typeof iconMap] || iconMap["fa-file-alt"]}
      </motion.div>
      <motion.span
        className={`block text-white text-sm mt-1 text-center group-hover:bg-blue-500 group-hover:bg-opacity-50 rounded px-1 max-w-20 truncate ${
          isDragging ? "bg-blue-500 bg-opacity-50" : ""
        }`}
        animate={{ scale: isDragging ? 0.9 : 1 }}
      >
        {icon.name}
      </motion.span>
    </motion.div>
  );
};

export default DesktopIcon;
