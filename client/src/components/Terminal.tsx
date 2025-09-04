import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { terminalCommands } from "../data/portfolioContent";

interface TerminalProps {
  content: string;
  onCommand: (command: string) => void;
  isActive: boolean;
}

const Terminal: React.FC<TerminalProps> = ({
  content,
  onCommand,
  isActive,
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    Array<{ command: string; output: string }>
  >([
    {
      command: "",
      output:
        "Welcome to Portfolio Terminal v1.0\nType 'help' for available commands.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let output = "";

    if (cmd === "clear") {
      setHistory([{ command: "", output: "Terminal cleared." }]);
      return;
    } else if (terminalCommands[cmd as keyof typeof terminalCommands]) {
      const result = terminalCommands[cmd as keyof typeof terminalCommands];
      output = typeof result === "function" ? result() : result;
    } else if (cmd.startsWith("cat ")) {
      const file = cmd.substring(4);
      const fileContent =
        terminalCommands[`cat ${file}` as keyof typeof terminalCommands];
      output =
        (typeof fileContent === "function" ? fileContent() : fileContent) ||
        "File not found.";
    } else if (cmd.startsWith("open ")) {
      const file = cmd.substring(5);
      const openResult =
        terminalCommands[`open ${file}` as keyof typeof terminalCommands];
      output =
        (typeof openResult === "function" ? openResult() : openResult) ||
        "File not found.";
    } else if (cmd) {
      output = `Command not found: ${command}\nType 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-black text-green-400 p-4 font-mono text-sm">
      <div ref={outputRef} className="flex-1 overflow-y-auto mb-4">
        <div>
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.command && (
                <div className="text-green-400">
                  <span className="text-blue-400">user@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  {entry.command}
                </div>
              )}
              {entry.output && (
                <div className="text-gray-300 whitespace-pre-line ml-0 mt-1">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <span className="text-green-400">
          <span className="text-blue-400">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$ </span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-green-400 outline-none ml-1"
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
};

export default Terminal;
