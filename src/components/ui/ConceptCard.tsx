// src/components/ui/ConceptCard.tsx
"use client"  // Add this line at the top of the file

import Link from 'next/link';
import { ReactNode } from 'react';

type ConceptCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  linkHref?: string;
  linkText?: string;
  className?: string;
};

export default function ConceptCard({
  title,
  description,
  icon,
  linkHref,
  linkText = 'Learn more',
  className = '',
}: ConceptCardProps) {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg ${className}`}>
      <div className="px-4 py-5 sm:p-6">
        {icon && <div className="text-blue-500 mb-4">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        {linkHref && (
          <div className="mt-4">
            <Link 
              href={linkHref}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              {linkText} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}