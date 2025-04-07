// src/components/layout/PageLayout.tsx
import Breadcrumb, { BreadcrumbItem } from '@/components/ui/Breadcrumb';
import TableOfContents from '@/components/ui/TableOfContents';
import BackToTop from '@/components/ui/BackToTop';

type PageLayoutProps = {
  title: string;
  breadcrumbItems?: BreadcrumbItem[];
  children: React.ReactNode;
  showTableOfContents?: boolean;
};

export default function PageLayout({
  title,
  breadcrumbItems = [],
  children,
  showTableOfContents = true,
}: PageLayoutProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {breadcrumbItems.length > 0 && <Breadcrumb items={breadcrumbItems} />}
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="page-title">
            {title}
          </h1>
          
          <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main content */}
            <div className={`${showTableOfContents ? 'lg:col-span-9' : 'lg:col-span-12'}`} id="content">
              {children}
            </div>
            
            {/* Table of contents sidebar */}
            {showTableOfContents && (
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <TableOfContents />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
}