import React from 'react';

const TerminalHeader = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-terminal-text bg-opacity-20">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="text-terminal-white text-sm">vishnu@portfolio:~</div>
      <div className="w-16" />
    </div>
  );
};

export default TerminalHeader;