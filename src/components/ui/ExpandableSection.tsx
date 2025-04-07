// src/components/ui/ExpandableSection.tsx
"use client"  // Add this line at the top of the file

import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

type ExpandableSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
};

export default function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
  className = '',
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`border border-gray-200 rounded-md overflow-hidden ${className}`}>
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-900 bg-gray-50 hover:bg-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-lg font-medium">{title}</span>
        {isExpanded ? (
          <FiChevronDown className="h-5 w-5 text-gray-500" />
        ) : (
          <FiChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}