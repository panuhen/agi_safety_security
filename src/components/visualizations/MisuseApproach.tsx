"use client"

import { useState } from 'react';
import BaseVisualization from './BaseVisualization'; // Assuming BaseVisualization exists
import { FiShield, FiLock, FiEye, FiUsers, FiAlertTriangle, FiCheck, FiZap } from 'react-icons/fi';

type ComponentType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  group: 'evaluation' | 'training' | 'deployment' | 'security';
};

const components: ComponentType[] = [
    {
    id: 'dangerous-capability',
    title: 'Dangerous Capability Evaluations',
    description: 'Assess whether the model has capabilities that could enable severe harm',
    icon: <FiAlertTriangle className="h-6 w-6 text-yellow-600" />,
    color: 'bg-yellow-50',
    group: 'evaluation',
  },
  {
    id: 'red-teaming', // Moved red-teaming here to match evaluation group in layout
    title: 'Red-Teaming',
    description: 'Evaluate the sufficiency of mitigations by attempting to bypass them using various testing methods',
    icon: <FiZap className="h-6 w-6 text-red-600" />,
    color: 'bg-red-50',
    group: 'evaluation',
  },
  {
    id: 'safety-training',
    title: 'Safety Training',
    description: 'Teach models to refuse harmful requests through post-training',
    icon: <FiCheck className="h-6 w-6" />,
    color: 'bg-green-50',
    group: 'training',
  },
  {
    id: 'capability-suppression',
    title: 'Capability Suppression',
    description: 'Remove or suppress dangerous capabilities from the model',
    icon: <FiShield className="h-6 w-6 text-green-600" />,
    color: 'bg-green-50',
    group: 'training',
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description: 'Detect and respond to attempts to access dangerous capabilities',
    icon: <FiEye className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-50',
    group: 'deployment',
  },
  {
    id: 'access-restrictions',
    title: 'Access Restrictions',
    description: 'Limit access to models with dangerous capabilities to vetted users and use cases',
    icon: <FiUsers className="h-6 w-6 text-blue-600" />,
    color: 'bg-blue-50',
    group: 'deployment',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Prevent theft of model weights through robust security measures',
    icon: <FiLock className="h-6 w-6 text-purple-600" />,
    color: 'bg-purple-50',
    group: 'security',
  },
];

export default function MisuseApproachVisualization() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const getGroupedComponents = (group: string) => 
    components.filter(c => c.group === group);
  
  return (
    <BaseVisualization
      title="Overview of the described approach to mitigating misuse"
      description="The approach aims to block bad actors' access to dangerous capabilities through various layers of protection."
      figureNumber={2}
    >
      <div className="flex flex-col space-y-8 not-prose"> {/* Added not-prose */}
        {/* Model diagram */}
        <div className="flex flex-col items-center py-4">
          <div className="w-full max-w-3xl flex flex-col">
            {/* Evaluation layer */}
            <div className="mb-6">
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Evaluation
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('evaluation').map((component) => (
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
            
            {/* Training layer */}
            <div className="mb-6">
               {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Training
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
            
            {/* Deployment layer */}
            <div className="mb-6">
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Deployment
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('deployment').map((component) => (
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
            
            {/* Security layer */}
            <div>
              {/* --- MODIFIED H3 --- */}
              <div className="text-lg font-semibold text-gray-700 mb-2" role="heading" aria-level={3}>
                Security
              </div>
              <div className="flex flex-wrap gap-4">
                {getGroupedComponents('security').map((component) => (
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

// Modified ComponentCard function
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
      className={`flex-1 min-w-[200px] max-w-[calc(50%-0.5rem)] p-4 rounded-lg border border-gray-200 ${bgColor} transition-colors duration-200 cursor-pointer`} // Added max-width for better wrapping on small screens if needed
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
            <p className="mt-1 text-xs text-gray-700 prose prose-xs max-w-none">{component.description}</p> // Added prose styling
          )}
        </div>
      </div>
    </div>
  );
}