// src/components/ui/GlossaryTooltip.tsx
"use client"

import { useState, useRef, useEffect } from 'react';
import { useGlossary } from '@/app/GlossaryContext';

type GlossaryTooltipProps = {
  term: string;
  children: React.ReactNode;
};

export default function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { terms, highlightedTerm, setHighlightedTerm } = useGlossary();
  const tooltipRef = useRef<HTMLSpanElement>(null);
  
  // Find the glossary term
  const glossaryTerm = terms.find(t => t.term.toLowerCase() === term.toLowerCase());
  
  // Always call hooks at the top level
  useEffect(() => {
    // Only add event listeners if we have a valid term
    if (!glossaryTerm) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
        if (highlightedTerm === term) {
          setHighlightedTerm(null);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [highlightedTerm, setHighlightedTerm, term, glossaryTerm]);
  
  // If no matching term is found, just render the children as is
  if (!glossaryTerm) {
    return <>{children}</>;
  }
  
  const handleClick = () => {
    setIsVisible(!isVisible);
    setHighlightedTerm(isVisible ? null : term);
  };
  
  return (
    <span className="relative inline" ref={tooltipRef}>
      <button
        type="button"
        onClick={handleClick}
        className="inline text-blue-600 border-b border-dotted border-blue-600 cursor-help font-medium"
        aria-expanded={isVisible}
      >
        {children}
      </button>
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200 text-sm text-gray-700">
          <div className="font-medium text-gray-900 mb-1">{glossaryTerm.term}</div>
          <div>{glossaryTerm.definition}</div>
        </div>
      )}
    </span>
  );
}