import React, { useState, useRef, useEffect } from "react";
import { commands } from "../lib/commands";
import TerminalPrompt from "./TerminalPrompt";
import TerminalOutput from "./TerminalOutput";

export const Terminal = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    console.log("Executing command:", trimmedCmd);
    
    if (trimmedCmd === "") return;

    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const output = commands[trimmedCmd]
      ? commands[trimmedCmd]()
      : `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;

    setHistory((prev) => [...prev, `$ ${cmd}`, output]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-terminal-bg">
      <div className="w-full max-w-4xl bg-terminal-bg border border-terminal-text rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-2 bg-terminal-text bg-opacity-20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-terminal-white text-sm">vishnu@portfolio:~</div>
          <div className="w-16" /> {/* Spacer for symmetry */}
        </div>
        
        <div
          ref={terminalRef}
          className="h-[600px] overflow-y-auto p-4 font-mono"
        >
          <div className="animate-fade-up">
            {commands.banner()}
            <p className="text-terminal-white mb-4">
              Type 'help' to see available commands.
            </p>
          </div>
          
          {history.map((line, i) => (
            <TerminalOutput key={i} content={line} />
          ))}
          
          <TerminalPrompt
            input={input}
            setInput={setInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;