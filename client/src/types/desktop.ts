export interface DesktopIcon {
  id: string;
  name: string;
  file: string;
  type: "text" | "folder" | "script" | "pdf" | "url" | "terminal" | "game";
  icon: string;
  position: { x: number; y: number };
}

export interface WindowState {
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

export interface ContextMenuState {
  isVisible: boolean;
  position: { x: number; y: number };
  targetIcon: string | null;
}

export interface TerminalCommand {
  command: string;
  output: string;
  timestamp: Date;
}
