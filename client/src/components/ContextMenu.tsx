import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContextMenuState } from "../types/desktop";

interface ContextMenuProps {
  contextMenu: ContextMenuState;
  onClose: () => void;
  onOpen: () => void;
  onSnapWindow?: (
    snapType: "left" | "right" | "top" | "bottom" | "center"
  ) => void;
  onToggleTheme?: () => void;
  isDarkMode?: boolean;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  contextMenu,
  onClose,
  onOpen,
  onSnapWindow,
  onToggleTheme,
  isDarkMode = false,
}) => {
  const menuItems = [
    {
      label: "Open",
      icon: "📂",
      action: onOpen,
      shortcut: "Enter",
    },
    {
      label: "Snap Left",
      icon: "⬅️",
      action: () => onSnapWindow?.("left"),
      shortcut: "Ctrl+←",
    },
    {
      label: "Snap Right",
      icon: "➡️",
      action: () => onSnapWindow?.("right"),
      shortcut: "Ctrl+→",
    },
    {
      label: "Snap Top",
      icon: "⬆️",
      action: () => onSnapWindow?.("top"),
      shortcut: "Ctrl+↑",
    },
    {
      label: "Snap Bottom",
      icon: "⬇️",
      action: () => onSnapWindow?.("bottom"),
      shortcut: "Ctrl+↓",
    },
    {
      label: "Center Window",
      icon: "🎯",
      action: () => onSnapWindow?.("center"),
      shortcut: "Ctrl+C",
    },
    {
      label: "Toggle Theme",
      icon: isDarkMode ? "☀️" : "🌙",
      action: onToggleTheme,
      shortcut: "Ctrl+T",
    },
  ];

  if (!contextMenu.isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 bg-gray-800 border border-gray-600 rounded-lg shadow-xl py-2 min-w-48"
        style={{
          left: contextMenu.position.x,
          top: contextMenu.position.y,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={index}
            className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center justify-between group"
            onClick={() => {
              item.action?.();
              onClose();
            }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
            {item.shortcut && (
              <span className="text-xs text-gray-400 group-hover:text-gray-300">
                {item.shortcut}
              </span>
            )}
          </motion.button>
        ))}

        <div className="border-t border-gray-600 my-1"></div>

        <motion.button
          className="w-full px-4 py-2 text-left text-gray-400 hover:bg-gray-700 flex items-center space-x-3"
          onClick={onClose}
          whileHover={{ x: 4 }}
        >
          <span className="text-lg">❌</span>
          <span className="text-sm">Cancel</span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContextMenu;
