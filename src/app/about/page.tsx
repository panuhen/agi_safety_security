// src/app/about/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { FiDownload, FiExternalLink, FiCoffee, FiLinkedin } from 'react-icons/fi';

export default function ReportPage() {
  return (
    <PageLayout
      title="An Approach to Technical AGI Safety and Security"
      breadcrumbItems={[
        { name: 'Report', href: '/report', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          This site is based on the Google DeepMind report "An Approach to Technical AGI Safety and Security" published in April 2025. The report outlines a strategic framework for addressing severe risks from <GlossaryTooltip term="AGI">AGI</GlossaryTooltip> while enabling its potential benefits.
        </p>

        <div className="flex space-x-4 my-6">
          <a 
            href="https://arxiv.org/abs/2504.01849" 
            download 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FiDownload className="-ml-1 mr-2 h-5 w-5" />
            Download original PDF
          </a>
        </div>

        <div className="my-8 border-t border-gray-100"></div>
        
        <h2 id="authors" className="text-2xl font-bold mb-6">Original Authors</h2>
        <p className="text-gray-600">
          Rohin Shah, Alex Irpan, Alexander Matt Turner, Anna Wang, Arthur Conmy, David Lindner, 
          Jonah Brown-Cohen, Lewis Ho, Neel Nanda, Raluca Ada Popa, Rishub Jain, Rory Greig, Samuel 
          Albanie, Scott Emmons, Sebastian Farquhar, Sébastien Krier, Senthooran Rajamanoharan, 
          Sophie Bridgers, Tobi Ijitoye, Tom Everitt, Victoria Krakovna, Vikrant Varma, Vladimir Mikulik, 
          Zachary Kenton, Dave Orr, Shane Legg, Noah Goodman, Allan Dafoe, Four Flynn and Anca Dragan.
        </p>

        <div className="my-8 border-t border-gray-100"></div>
        
        <h2 id="executive-summary" className="text-2xl font-bold mb-6">Executive Summary</h2>
        <p className="text-gray-600">
          This comprehensive report presents a strategic framework for addressing severe risks from Artificial General Intelligence (AGI). The paper focuses on technical approaches to ensure safety and security as AI systems become increasingly powerful.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Key Highlights</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Focus on Severe Harm</strong>: The report targets risks that could cause significant harm to humanity, requiring proactive rather than reactive mitigation strategies.</li>
          <li><strong>Four Risk Areas</strong>: The authors identify four categories of risks: misuse (where users intentionally cause harm), misalignment (where the AI system knowingly acts against developer intent), mistakes (unintentional harmful outputs), and structural risks (harms from multi-agent dynamics).</li>
          <li><strong>Two Primary Concerns</strong>: The strategy concentrates on misuse and misalignment as the most pressing concerns requiring technical interventions.</li>
          <li><strong>Misuse Mitigation Strategy</strong>: Evaluate models for dangerous capabilities, implement security and deployment safeguards, and test mitigation effectiveness through red-teaming.</li>
          <li><strong>Misalignment Approach</strong>: Develop "amplified oversight" to help humans supervise increasingly capable AI, create robust training methods, and implement defense-in-depth with monitoring and security techniques.</li>
          <li><strong>Research Areas</strong>: The report highlights several enabling technologies including interpretability, uncertainty quantification, and safer design patterns.</li>
          <li><strong>Core Assumptions</strong>: The authors base their approach on assumptions that include the continuation of current AI development paradigms, no inherent ceiling to AI capabilities, uncertain development timelines, the potential for accelerating capability growth, and approximately continuous progress.</li>
        </ul>
        
        <p className="text-gray-600 mt-4">
          This work represents a roadmap rather than a complete solution, acknowledging the many open research problems that still need to be addressed to safely develop advanced AI systems while accessing their potential benefits.
        </p>
        
        <div className="my-8 border-t border-gray-100"></div>
        
        <h2 id="disclaimer" className="text-2xl font-bold mb-6">Disclaimer</h2>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-gray-600 m-0">
            This website is not affiliated with, endorsed by, or connected to Google DeepMind or any of the original authors of the report. This is an independent educational resource created to provide information about the concepts discussed in the report.
          </p>
          <p className="text-gray-600 mt-4 mb-0">
            All content from the original report is copyright © 2025 Google DeepMind, with all rights reserved. This site is provided for educational purposes only and makes no claims of accuracy or completeness. The site creator takes no responsibility for any errors or omissions in the content.
          </p>
        </div>
        
        <div className="my-8 border-t border-gray-100"></div>
        
        <h2 id="contact" className="text-2xl font-bold mb-6">Contact & Support</h2>
        <p className="text-gray-600">
  If you have any questions or feedback about this resource, please feel free to{' '}
  <a 
    href="https://www.linkedin.com/in/panuhen/" 
    className="text-blue-600 hover:text-blue-800 hover:underline font-medium" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    reach out
  </a>
  .
</p>
        
        <div className="flex flex-col md:flex-row gap-6 my-6">

          
          {/*<a 
            href="https://www.buymeacoffee.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <FiCoffee className="-ml-1 mr-2 h-5 w-5" />
            Buy me a coffee
          </a>*/}
        </div>
         {/*
        <p className="text-gray-600 text-sm mt-4">
          Contributions through "Buy me a coffee" help cover domain and hosting costs for this educational resource. Thank you for your support!
        </p>*/}
      </div>
    </PageLayout>
  );
}