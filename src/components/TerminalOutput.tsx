import React from "react";

interface TerminalOutputProps {
  content: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ content }) => {
  const isCommand = content.startsWith("$");
  
  return (
    <div
      className={`mb-2 ${
        isCommand ? "text-terminal-text" : "text-terminal-white"
      } animate-fade-up`}
    >
      {content}
    </div>
  );
};

export default TerminalOutput;