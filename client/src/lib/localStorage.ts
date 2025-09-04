// localStorage utilities for client-side data persistence

export interface StoredWindowState {
  id: string;
  title: string;
  type: "normal" | "terminal" | "game";
  content: string;
  icon: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface AppSettings {
  theme: "light" | "dark" | "system";
  desktopIcons: Array<{
    id: string;
    title: string;
    icon: string;
    position: { x: number; y: number };
  }>;
}

const STORAGE_KEYS = {
  WINDOWS: "pigeonpost_windows",
  SETTINGS: "pigeonpost_settings",
} as const;

export const localStorage = {
  // Window management
  getWindows: (): StoredWindowState[] => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEYS.WINDOWS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  saveWindows: (windows: StoredWindowState[]) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEYS.WINDOWS,
        JSON.stringify(windows)
      );
    } catch (error) {
      console.error("Failed to save windows to localStorage:", error);
    }
  },

  // App settings
  getSettings: (): AppSettings => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return stored
        ? JSON.parse(stored)
        : {
            theme: "system",
            desktopIcons: [],
          };
    } catch {
      return {
        theme: "system",
        desktopIcons: [],
      };
    }
  },

  saveSettings: (settings: AppSettings) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error("Failed to save settings to localStorage:", error);
    }
  },

  // Clear all data
  clearAll: () => {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.WINDOWS);
      window.localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  },
};
