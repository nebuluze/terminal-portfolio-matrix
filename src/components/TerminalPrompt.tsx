import React from "react";

interface TerminalPromptProps {
  input: string;
  setInput: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  input,
  setInput,
  onKeyDown,
}) => {
  return (
    <div className="flex items-center text-terminal-text">
      <span className="mr-2">$</span>
      <div className="flex-1 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent outline-none caret-transparent"
          autoFocus
        />
        <span 
          className="animate-blink absolute top-0"
          style={{ left: `${input.length * 8}px` }}
        >
          ▊
        </span>
      </div>
    </div>
  );
};

export default TerminalPrompt;