// src/components/layout/Header.tsx
"use client" // Keep this directive

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiInfo } from 'react-icons/fi'; // FiInfo is already imported

const navigation = [
  { name: 'Overview', href: '/' },
  { name: 'Core Assumptions', href: '/core-assumptions' },
  { name: 'Risk Areas', href: '/risk-areas' },
  { name: 'Misuse Mitigation', href: '/misuse' },
  { name: 'Misalignment Mitigation', href: '/misalignment' },
  { name: 'Safety Cases', href: '/safety-cases' },
  { name: 'Benefits of AGI', href: '/benefits' },
  { name: 'About', href: '/about' }, // Keep the definition here
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50"> {/* Added sticky positioning */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              {/* Consider slightly smaller text on small screens if needed */}
              <Link href="/" className="text-md sm:text-lg font-bold text-gray-900 whitespace-nowrap"> 
                AGI Safety & Security
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          {/* Reduced spacing from sm:space-x-8 to sm:space-x-6 */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6"> 
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isAboutLink = item.name === 'About';

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  // Add aria-label specifically for the icon link
                  aria-label={isAboutLink ? item.name : undefined} 
                  className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-150 ease-in-out ${
                    isActive
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {isAboutLink ? (
                    // Render FiInfo icon for 'About' link
                    <FiInfo className="h-5 w-5" aria-hidden="true" /> 
                  ) : (
                    // Render text for other links
                    item.name
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" // Added focus styles
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen} // Dynamically set aria-expanded
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          {/* Kept original mobile menu structure - renders text for all items */}
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors duration-150 ease-in-out ${
                    isActive
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  // Close mobile menu on navigation
                  onClick={() => setMobileMenuOpen(false)} 
                >
                  {item.name} 
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}