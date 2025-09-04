import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WindowState } from "../types/desktop";

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onWindowClick: (windowId: string) => void;
  onCreateTerminal: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  windows,
  activeWindowId,
  onWindowClick,
  onCreateTerminal,
  isDarkMode,
  onToggleTheme,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 h-12 flex items-center px-4 z-30">
      {/* App Launcher */}
      <motion.button
        className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-500 transition-colors"
        onClick={onCreateTerminal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </motion.button>

      {/* Window List */}
      <div className="flex-1 flex items-center ml-4 space-x-2">
        {windows.map((window) => (
          <motion.button
            key={window.id}
            className={`taskbar-item px-3 py-1 rounded text-white text-sm flex items-center space-x-2 transition-all duration-200 ${
              activeWindowId === window.id
                ? "bg-blue-600 shadow-lg shadow-blue-600/25 border border-blue-400"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => onWindowClick(window.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className={`max-w-32 truncate ${
                activeWindowId === window.id ? "font-semibold" : ""
              }`}
            >
              {window.title}
            </span>
            {activeWindowId === window.id && (
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            )}
          </motion.button>
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center space-x-3">
        {/* Active Sessions Counter */}
        {windows.length > 0 && (
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {windows.length} session{windows.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Theme Toggle */}
        <motion.button
          className="text-gray-300 hover:text-white transition-colors"
          onClick={onToggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.button>

        {/* Clock */}
        <div className="text-gray-300 text-sm font-mono">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
