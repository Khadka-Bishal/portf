import { useState, useCallback } from 'react';
import { TerminalCommand } from '../types/desktop';
import { terminalCommands } from '../data/portfolioContent';

export const useTerminal = (onOpenFile?: (file: string) => void) => {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    if (!trimmedCommand) return;

    // Add to command history
    setCommandHistory(prev => [trimmedCommand, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);

    let output = '';

    if (trimmedCommand === 'clear') {
      setHistory([]);
      return;
    }

    // Handle file opening commands
    if (trimmedCommand.startsWith('open ')) {
      const fileName = trimmedCommand.slice(5);
      const fileMap: Record<string, string> = {
        'about.txt': 'about.txt',
        'about': 'about.txt',
        'projects': 'projects',
        'skills.sh': 'skills.sh',
        'skills': 'skills.sh',
        'experience.pdf': 'experience.pdf',
        'experience': 'experience.pdf',
        'contact.url': 'contact.url',
        'contact': 'contact.url'
      };
      
      if (fileMap[fileName] && onOpenFile) {
        onOpenFile(fileMap[fileName]);
        output = `Opening ${fileName}...`;
      } else {
        output = `File not found: ${fileName}`;
      }
    } else if (terminalCommands[trimmedCommand as keyof typeof terminalCommands]) {
      const commandResult = terminalCommands[trimmedCommand as keyof typeof terminalCommands];
      output = typeof commandResult === 'function' ? commandResult() : commandResult;
    } else {
      output = `Command not found: ${trimmedCommand}. Type 'help' for available commands.`;
    }

    const newCommand: TerminalCommand = {
      command: trimmedCommand,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newCommand]);
  }, [onOpenFile]);

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    if (direction === 'up' && historyIndex < commandHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex]);
    } else if (direction === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  }, [historyIndex, commandHistory]);

  const clearTerminal = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory,
    clearTerminal
  };
};
