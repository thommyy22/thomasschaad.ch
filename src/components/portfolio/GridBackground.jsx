import React from 'react';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-fine" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#44AA6D" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-fine)" />
      </svg>
    </div>
  );
}