// src/components/visualizations/RiskAreasVisualization.tsx
"use client";

import { JSX, useState } from "react";
import BaseVisualization from "./BaseVisualization"; // Assuming BaseVisualization exists
import { FiAlertCircle, FiCrosshair, FiHelpCircle, FiGlobe } from "react-icons/fi";

type RiskArea = {
  id: string;
  title: string;
  description: string;
  driver: string;
  icon: JSX.Element; 
  color: string;
  hoverColor: string;
};

const riskAreas: RiskArea[] = [
  {
    id: "misuse",
    title: "Misuse",
    description: "The user instructs the AI system to cause harm",
    driver: "The user is an adversary",
    icon: <FiAlertCircle className="h-8 w-8 text-red-600" />,
    color: "bg-red-50",
    hoverColor: "bg-red-100",
  },
  {
    id: "misalignment",
    title: "Misalignment",
    description:
      "The AI system takes actions that it knows the developer didn't intend",
    driver: "The AI is an adversary",
    icon: <FiCrosshair className="h-8 w-8 text-yellow-600" />,
    color: "bg-yellow-50",
    hoverColor: "bg-yellow-100",
  },
  {
    id: "mistakes",
    title: "Mistakes",
    description: "The AI system causes harm without realizing it",
    driver: "Real world is complex",
    icon: <FiHelpCircle className="h-8 w-8 text-blue-600" />,
    color: "bg-blue-50",
    hoverColor: "bg-blue-100",
  },
  {
    id: "structural",
    title: "Structural risks",
    description:
      "Harms from multi-agent dynamics, where no single agent is at fault",
    driver: "Incentives, culture, etc.",
    icon: <FiGlobe className="h-8 w-8 text-green-600" />,
    color: "bg-green-50",
    hoverColor: "bg-green-100",
  },
];

export default function RiskAreasVisualization() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    // Assuming BaseVisualization correctly renders its title/description/figureNumber
    <BaseVisualization
      title="Overview of risk areas" 
      description="Risks grouped based on factors that drive differences in mitigation approaches."
      figureNumber={1}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 not-prose"> {/* Added not-prose */}
        {riskAreas.map((area) => (
          <div
            key={area.id}
            className={`relative p-6 rounded-lg border border-gray-200 transition-colors duration-200 ${
              activeArea === area.id ? area.hoverColor : area.color
            } cursor-pointer`}
            onMouseEnter={() => setActiveArea(area.id)}
            onMouseLeave={() => setActiveArea(null)}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                {/* --- MODIFIED LINE BELOW --- */}
                <div 
                  className="text-xl font-bold text-gray-900" 
                  role="heading" 
                  aria-level={3} // Semantic heading level for accessibility
                >
                  {area.title}
                </div>
                {/* --- END OF MODIFICATION --- */}
                <span className="text-3xl" role="img" aria-label={area.title}>
                  {area.icon}
                </span>
              </div>
              {/* Apply prose classes individually if needed, or ensure parent has them */}
              <p className="text-gray-700 prose prose-sm max-w-none">{area.description}</p> 
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 prose prose-sm max-w-none">
                  <strong>Key driver of risk:</strong> {area.driver}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseVisualization>
  );
}