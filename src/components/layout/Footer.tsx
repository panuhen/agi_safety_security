// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <p className="text-sm text-gray-500">
              Based on &quot;An Approach to Technical AGI Safety and Security&quot; by Google DeepMind, 2025.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Explore</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/core-assumptions" className="text-sm text-gray-500 hover:text-gray-900">
                    Core Assumptions
                  </Link>
                </li>
                <li>
                  <Link href="/risk-areas" className="text-sm text-gray-500 hover:text-gray-900">
                    Risk Areas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Mitigation</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/misuse" className="text-sm text-gray-500 hover:text-gray-900">
                    Misuse Mitigation
                  </Link>
                </li>
                <li>
                  <Link href="/misalignment" className="text-sm text-gray-500 hover:text-gray-900">
                    Misalignment Mitigation
                  </Link>
                </li>
                <li>
                  <Link href="/safety-cases" className="text-sm text-gray-500 hover:text-gray-900">
                    Safety Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700">About</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="/benefits" className="text-sm text-gray-500 hover:text-gray-900">
                    Benefits of AGI
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                    About the Report
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Interactive AGI Safety & Security Guide. This is an educational resource.
          </p>
        </div>
      </div>
    </footer>
  );
}