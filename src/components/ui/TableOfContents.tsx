// src/components/ui/TableOfContents.tsx
"use client"

import { useState, useEffect } from 'react';
import { FiList } from 'react-icons/fi';

type Section = {
  id: string;
  title: string;
  level: number;
};

type TableOfContentsProps = {
  contentId?: string;  // ID of the content container to scan for headings
};

export default function TableOfContents({ contentId = 'content' }: TableOfContentsProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Extract sections from heading elements
  useEffect(() => {
    const contentElement = document.getElementById(contentId);
    if (!contentElement) return;
    
    const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const extractedSections: Section[] = [];
    
    headings.forEach((heading) => {
      // Skip headings that shouldn't be in TOC
      if (heading.classList.contains('no-toc')) return;
      
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      if (!heading.id) {
        heading.id = id;
      }
      
      const level = parseInt(heading.tagName[1]);
      
      extractedSections.push({
        id,
        title: heading.textContent || '',
        level
      });
    });
    
    setSections(extractedSections);
  }, [contentId]);
  
  // Update active section based on scroll position
  useEffect(() => {
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );
    
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for header height
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };
  
  if (sections.length <= 1) {
    return null;
  }
  
  return (
    <div className="relative">
      {/* Mobile toggle */}
      <div className="md:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <FiList className="mr-2 h-4 w-4" />
          {isOpen ? 'Hide' : 'Show'} table of contents
        </button>
      </div>
      
      {/* Table of contents */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-gray-50 p-4 rounded-lg sticky top-24`}>
        <h2 className="text-sm font-medium text-gray-900 mb-3">On this page</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-sm w-full text-left py-1 px-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              style={{ paddingLeft: `${section.level * 0.5}rem` }}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}