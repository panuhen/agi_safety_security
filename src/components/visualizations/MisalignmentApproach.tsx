// src/components/visualizations/MisalignmentApproach.tsx
"use client"

import { useState } from 'react';
import BaseVisualization from './BaseVisualization'; // Assuming BaseVisualization exists
import { 
  FiEye, FiUserCheck, 
  FiActivity, FiLayers, FiSearch, 
  FiAlertCircle, FiTool, FiCpu
} from 'react-icons/fi';

type ComponentType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  group: 'training' | 'inference' | 'enablers';
};

const components: ComponentType[] = [
  // Training components
  {
    id: 'amplified-oversight',
    title: 'Amplified Oversight',
    description: 'Use AI systems to help humans provide effective oversight',
    icon: <FiUserCheck className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-50',
    group: 'training',
  },
  {
    id: 'guiding-behavior',
    title: 'Guiding Model Behavior',
    description: 'Use oversight signals to train AI systems to behave well',
    icon: <FiActivity className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-50',
    group: 'training',
  },
  {
    id: 'robust-training',
    title: 'Robust Training',
    description: 'Expand training distribution to address potential failure modes',
    icon: <FiCpu className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-50',
    group: 'training',
  },
  
  // Inference components
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'Detect and respond to suspicious behaviors during deployment',
    icon: <FiEye className="h-6 w-6 text-green-600" />,
    color: 'bg-green-50',
    group: 'inference',
  },
    {
    id: 'access-controls',
    title: 'Access Controls', // Renamed from access-restrictions for consistency if needed elsewhere
    description: 'Limit what resources and tools AI systems can access',
    icon: <FiTool className="h-6 w-6 text-green-600" />, // Changed icon to FiTool
    color: 'bg-green-50',
    group: 'inference',
  },
  
  // Enablers
  {
    id: 'safer-design',
    title: 'Safer Design Patterns',
    description: 'Design choices that make AI systems inherently safer',
    icon: <FiLayers className="h-6 w-6 text-purple-600" />,
    color: 'bg-purple-50',
    group: 'enablers',
  },
  {
    id: 'interpretability',
    title: 'Interpretability',
    description: 'Techniques to understand how AI systems work internally',
    icon: <FiSearch className="h-6 w-6 text-purple-600" />,
    color: 'bg-purple-50',
    group: 'enablers',
  },
  {
    id: 'uncertainty',
    title: 'Uncertainty',
    description: 'Methods for AI systems to express their uncertainty',
    icon: <FiAlertCircle className="h-6 w-6 text-purple-600" />,
    color: 'bg-purple-50',
    group: 'enablers',
  },
];

export default function MisalignmentApproachVisualization() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const getGroupedComponents = (group: string) => 
    components.filter(c => c.group === group);
  
  return (
    <BaseVisualization
      title=" Overview of the described approach to mitigating misalignment"
      description="The described approach has two lines of defense: training an aligned model and preventing harm from misaligned models."
      figureNumber={3} // Assuming figure number is correct
    >
      <div className="flex flex-col space-y-8 not-prose"> {/* Added not-prose */}
        <div className="flex flex-col items-center py-4">
          <div className="w-full max-w-4xl"> {/* Adjusted max-width if needed */}
            {/* Training layer */}
            <div className="mb-8">
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Training an Aligned Model
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('training').map((component) => (
                  <ComponentCard 
                    key={component.id}
                    component={component}
                    isActive={activeComponent === component.id}
                    onMouseEnter={() => setActiveComponent(component.id)}
                    onMouseLeave={() => setActiveComponent(null)}
                  />
                ))}
              </div>
            </div>
            
            {/* Inference layer */}
            <div className="mb-8">
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Defending Against Misaligned Models
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('inference').map((component) => (
                  <ComponentCard 
                    key={component.id}
                    component={component}
                    isActive={activeComponent === component.id}
                    onMouseEnter={() => setActiveComponent(component.id)}
                    onMouseLeave={() => setActiveComponent(null)}
                  />
                ))}
              </div>
            </div>
            
            {/* Enablers */}
            <div>
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Enabling Techniques
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('enablers').map((component) => (
                  <ComponentCard 
                    key={component.id}
                    component={component}
                    isActive={activeComponent === component.id}
                    onMouseEnter={() => setActiveComponent(component.id)}
                    onMouseLeave={() => setActiveComponent(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseVisualization>
  );
}

// Using the same modified ComponentCard function from previous example
function ComponentCard({ 
  component, 
  isActive, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  component: ComponentType, 
  isActive: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}) {
  // Slightly darken the active background color
  const bgColor = isActive 
    ? component.color.replace('100', '200').replace('50', '100') // Handle -50 variants too
    : component.color;
    
  return (
    <div 
      // Adjusted min/max width for potentially 3 items per row if needed
      className={`flex-1 min-w-[180px] max-w-[calc(33.333%-0.75rem)] p-4 rounded-lg border border-gray-200 ${bgColor} transition-colors duration-200 cursor-pointer`} 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 text-gray-700">
          {component.icon}
        </div>
        <div>
          {/* --- MODIFIED H4 --- */}
          <div 
            className="text-sm font-medium text-gray-900" 
            role="heading" 
            aria-level={4} // Semantic heading level for accessibility
          >
            {component.title}
          </div>
          {/* --- END OF MODIFICATION --- */}
          {isActive && (
            // Added prose styling to description
            <p className="mt-1 text-xs text-gray-700 prose prose-xs max-w-none">{component.description}</p> 
          )}
        </div>
      </div>
    </div>
  );
}