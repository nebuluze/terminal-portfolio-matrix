import React, { useEffect, useState } from "react";

interface TerminalOutputProps {
  content: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ content }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCommand = content.startsWith("$");

  useEffect(() => {
    if (!isCommand) {
      const timer = setInterval(() => {
        if (currentIndex < content.length) {
          setDisplayedContent(content.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(timer);
        }
      }, 30); // Adjust speed of typing animation

      return () => clearInterval(timer);
    } else {
      setDisplayedContent(content);
    }
  }, [content, currentIndex, isCommand]);

  // Split content by newlines and render each line separately
  const contentLines = displayedContent.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="mb-2 animate-fade-up">
      {contentLines.map((line, index) => (
        <div
          key={index}
          className={`${isCommand ? "text-terminal-text" : "text-terminal-white"}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;