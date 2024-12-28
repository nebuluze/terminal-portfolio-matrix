import React, { useRef, useEffect } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Focus input when component mounts or updates
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // Play typing sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.log("Audio play failed:", err));
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center text-terminal-text" onClick={handleClick}>
      <audio ref={audioRef} src="/typing-sound.mp3" />
      <span className="mr-2">$</span>
      <div className="flex-1 relative">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
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