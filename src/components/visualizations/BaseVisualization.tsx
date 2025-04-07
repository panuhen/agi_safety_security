// src/components/visualizations/BaseVisualization.tsx
"use client"

import React, { useState } from 'react';

type BaseVisualizationProps = {
  title: string;
  description?: string;
  figureNumber?: number;
  children: React.ReactNode;
  className?: string;
};

export default function BaseVisualization({
  title,
  description,
  figureNumber,
  children,
  className = '',
}: BaseVisualizationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`my-8 ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4 overflow-auto' : ''} ${className}`}>
      <div className="relative w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 z-10 text-xs text-blue-500 hover:underline"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
        <div className="p-4">
          {children}
        </div>
      </div>
      {(title || figureNumber) && (
        <p className="mt-2 text-sm text-gray-500 text-center">
          {figureNumber && <span>Figure {figureNumber}: </span>}
          {title}
        </p>
      )}
      {description && (
        <p className="mt-1 text-xs text-gray-400 text-center max-w-prose mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
