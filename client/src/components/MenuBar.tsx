import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowState } from "../types/desktop";

interface MenuBarProps {
  onCreateTerminal: () => void;
  onOpenAbout: () => void;
  onOpenProjects: () => void;
  onOpenSkills: () => void;
  onOpenExperience: () => void;
  onOpenContact: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  windows: WindowState[];
  activeWindowId: string | null;
  onWindowClick: (windowId: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({
  onCreateTerminal,
  onOpenAbout,
  onOpenProjects,
  onOpenSkills,
  onOpenExperience,
  onOpenContact,
  isDarkMode,
  onToggleTheme,
  windows,
  activeWindowId,
  onWindowClick,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    {
      label: "Portfolio",
      items: [
        { label: "About Me", action: onOpenAbout, icon: "📄" },
        { label: "Projects", action: onOpenProjects, icon: "📁" },
        { label: "Skills", action: onOpenSkills, icon: "⚡" },
        { label: "Experience", action: onOpenExperience, icon: "📋" },
        { label: "Contact", action: onOpenContact, icon: "📧" },
      ],
    },
    {
      label: "Tools",
      items: [
        { label: "Terminal", action: onCreateTerminal, icon: "💻" },
        {
          label: "Theme Toggle",
          action: onToggleTheme,
          icon: isDarkMode ? "☀️" : "🌙",
        },
      ],
    },
  ];

  const handleMenuClick = (menuLabel: string) => {
    setOpenMenu(openMenu === menuLabel ? null : menuLabel);
  };

  const handleItemClick = (action: () => void) => {
    action();
    setOpenMenu(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm border-b border-gray-600 h-8 flex items-center justify-between px-4 z-40 text-sm">
      {/* Menu Items */}
      <div className="flex items-center space-x-1 flex-shrink-0">
        {menuItems.map((menu) => (
          <div key={menu.label} className="relative">
            <motion.button
              className={`px-2 py-1 text-white hover:bg-gray-700 rounded transition-colors text-xs ${
                openMenu === menu.label ? "bg-gray-700" : ""
              }`}
              onClick={() => handleMenuClick(menu.label)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {menu.label}
            </motion.button>

            <AnimatePresence>
              {openMenu === menu.label && (
                <motion.div
                  className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg py-2 min-w-48 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {menu.items.map((item, index) => (
                    <motion.button
                      key={index}
                      className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 flex items-center space-x-3"
                      onClick={() => handleItemClick(item.action)}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Active Sessions */}
      {windows.length > 0 && (
        <div className="flex items-center space-x-2 flex-1 justify-center max-w-96">
          <div className="flex items-center space-x-1">
            <svg
              className="w-3 h-3 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-300">{windows.length}</span>
          </div>

          {/* Active Windows */}
          <div className="flex items-center space-x-1 overflow-hidden">
            {windows.map((window) => (
              <motion.button
                key={window.id}
                className={`px-1.5 py-0.5 rounded text-xs transition-all duration-200 flex-shrink-0 ${
                  activeWindowId === window.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => onWindowClick(window.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={window.title}
              >
                <span className="max-w-12 truncate block text-xs">
                  {window.title.length > 8
                    ? window.title.substring(0, 8) + "..."
                    : window.title}
                </span>
                {activeWindowId === window.id && (
                  <div className="w-0.5 h-0.5 bg-white rounded-full mx-auto mt-0.5 animate-pulse"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* System Info */}
      <div className="flex items-center space-x-3 text-gray-300 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs">Portfolio OS</span>
        </div>
        <div className="text-xs font-mono">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-xs">
          {currentTime.toLocaleDateString([], {
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
