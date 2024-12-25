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
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        className="flex-1 bg-transparent outline-none caret-terminal-text"
        autoFocus
      />
      <span className="animate-blink">▊</span>
    </div>
  );
};

export default TerminalPrompt;