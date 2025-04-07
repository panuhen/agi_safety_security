// src/app/core-assumptions/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import Link from 'next/link';

export default function CoreAssumptionsPage() {
  return (
    <PageLayout
      title="Core Assumptions About AGI Development"
      breadcrumbItems={[
        { name: 'Core Assumptions', href: '/core-assumptions', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          Our approach to technical safety is underpinned by five core assumptions about the development of 
          <GlossaryTooltip term="AGI">Artificial General Intelligence (AGI)</GlossaryTooltip>. These assumptions inform our strategies for mitigating risks.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>

        {/* This H2 should appear in ToC */}
        <h2 id="the-five-core-assumptions" className="text-2xl font-bold mb-6">The Five Core Assumptions</h2>
        <p className="mt-4 text-gray-600">
          These assumptions help us navigate uncertainty and develop an "anytime" approach to safety that 
          can be applied whenever needed.
        </p>

        {/* Container for the assumption cards */}
        <div className="mt-10 space-y-6"> {/* Adjusted spacing if needed */}
          
          {/* --- Card 1 --- */}
          {/* This H3 title should now appear in ToC */}
          <h3 
            id="assumption-1-paradigm" // Added ID for ToC linking
            className="text-xl font-semibold text-gray-900 mb-4 pt-6" // Added padding-top for spacing after divider
          >
            1. Current Paradigm Continuation
          </h3>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-[-1rem]"> {/* Negative margin to pull card under heading */}
            <div className="mt-4 space-y-4"> {/* Container for card content */}
              {/* These DIVs remain hidden from ToC */}
              <div 
                id="paradigm-continuation" 
                className="text-lg font-medium text-gray-900 mt-0" 
                role="heading" 
                aria-level={4} 
              >
                What this means
              </div>
              <p className="text-gray-600">
                We assume that frontier AI systems will continue to be developed within the current paradigm 
                for the foreseeable future. This paradigm is characterized by scaling computation and data, 
                learning and search as central mechanisms, and algorithmic innovations for efficiency.
              </p>
              
              <div 
                id="paradigm-evidence" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5} 
              >
                Supporting evidence
              </div>
              <p className="text-gray-600">
                Long-run AI capability improvements to date have been driven by large-scale increases in compute, data, 
                and algorithmic efficiency. Studies show a smooth power law relationship between these inputs and
                performance outcomes. For example, researchers have observed that the total compute used for the largest 
                training runs has grown by an annual average of approximately 4× between 2010 and 2024.
              </p>
              
              <div 
                id="paradigm-implications" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5} 
              >
                Implications
              </div>
              <p className="text-gray-600">
                This assumption motivates our focus on an "anytime" approach to AGI safety that can be applied 
                at any point. It also highlights the need for oversight signals that can accurately assess 
                whether a given AI action is good or bad.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-100"></div>
          
          {/* --- Card 2 --- */}
           {/* This H3 title should now appear in ToC */}
          <h3 
            id="assumption-2-no-ceiling" // Added ID
            className="text-xl font-semibold text-gray-900 mb-4 pt-6" 
          >
             2. No Human Ceiling for AI Capability
          </h3>
           <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-[-1rem]">
            <div className="mt-4 space-y-4">
              {/* These DIVs remain hidden from ToC */}
              <div 
                id="no-ceiling" 
                className="text-lg font-medium text-gray-900 mt-0" 
                role="heading" 
                aria-level={4}
              >
                What this means
              </div>
              <p className="text-gray-600">
                We assume that AI capabilities will not cease to advance once they achieve parity with the most 
                capable humans. There is no "human ceiling" that sets an upper limit for AI capability.
              </p>
              
              <div 
                id="ceiling-evidence" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Supporting evidence
              </div>
              <p className="text-gray-600">
                Superhuman performance has already been demonstrated in several domains:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Chess, where AI systems reached an Elo rating of 3643 in 2024, compared to the highest human rating of 2882</li>
                <li>Go, which was considered much more difficult than chess, yet was mastered by AlphaGo</li>
                <li>AlphaFold's superhuman performance in predicting protein structures</li>
              </ul>
              <p className="text-gray-600 mt-2">
                We observe no principled arguments for why AI capability would necessarily stop at human-level,
                and many examples suggest that AI can use fundamentally different approaches than humans.
              </p>
              
              <div 
                id="ceiling-implications" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Implications
              </div>
              <p className="text-gray-600">
                Our safety approach must leverage new AI capabilities as they become available. Initially, this will 
                involve augmenting human work with AI assistance, but eventually most cognitive labor relevant to 
                AI safety may need to be performed by AI to keep pace with advancing capabilities.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-100"></div>
          
          {/* --- Card 3 --- */}
          <h3 
            id="assumption-3-timelines" // Added ID
            className="text-xl font-semibold text-gray-900 mb-4 pt-6" 
          >
            3. Uncertain Timelines
          </h3>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-[-1rem]">
             <div className="mt-4 space-y-4">
              {/* These DIVs remain hidden from ToC */}
              <div 
                id="timelines" 
                className="text-lg font-medium text-gray-900 mt-0" 
                role="heading" 
                aria-level={4}
              >
                What this means
              </div>
              <p className="text-gray-600">
                The timeline for the development of powerful AI systems remains highly uncertain. We consider a 
                broad range of timelines to be plausible, including relatively short timelines where Exceptional 
                AGI (Level 4) might be developed before the end of the current decade.
              </p>
              
              <div 
                id="timeline-evidence" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Supporting evidence
              </div>
              <p className="text-gray-600">
                Existing AI forecasts support a broad spectrum of timelines. For instance:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Expert surveys conducted in 2023 estimated a 50% chance of "High-level machine intelligence" by 2047</li>
                <li>Compute-centric approaches have predicted human-level AI within the next decade</li>
                <li>Historical forecasting challenges suggest caution in placing too much confidence in any single prediction</li>
              </ul>
              
              <div 
                id="timeline-implications" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Implications
              </div>
              <p className="text-gray-600">
                Given this uncertainty, we prioritize safety approaches that can be integrated into current frontier 
                AI development and applied whenever necessary, rather than more foundational explorations that might 
                take many years to bear fruit.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-100"></div>

          {/* --- Card 4 --- */}
          <h3 
            id="assumption-4-acceleration" // Added ID
            className="text-xl font-semibold text-gray-900 mb-4 pt-6" 
          >
             4. Potential for Accelerating Improvement
          </h3>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-[-1rem]">
             <div className="mt-4 space-y-4">
               {/* These DIVs remain hidden from ToC */}
              <div 
                id="acceleration" 
                className="text-lg font-medium text-gray-900 mt-0" 
                role="heading" 
                aria-level={4}
              >
                What this means
              </div>
              <p className="text-gray-600">
                We assume that as AI systems automate scientific research and development, we could enter a phase 
                of accelerating growth. Initial automation of R&D would enable the development of increasingly capable 
                AI research systems, creating a positive feedback loop.
              </p>
              
              <div 
                id="acceleration-evidence" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Supporting evidence
              </div>
              <p className="text-gray-600">
                The economics literature supports a diversity of perspectives on accelerating growth, including some that
                predict extremely rapid growth. Erdil et al. (2024) estimate returns to software R&D could be sufficient to
                produce hyperbolic growth, though the evidence is not conclusive. AI researcher surveys show substantial 
                support for the possibility of rapidly accelerating growth.
              </p>
              
              <div 
                id="acceleration-implications" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Implications
              </div>
              <p className="text-gray-600">
                Such acceleration could drastically increase the pace of progress, giving us very little calendar time 
                to notice and react to issues. Our safety approach must also be accelerated through AI assistance to 
                ensure we retain the ability to address novel risks as they arise.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="my-12 border-t border-gray-100"></div>
          
          {/* --- Card 5 --- */}
          <h3 
            id="assumption-5-continuity" // Added ID
            className="text-xl font-semibold text-gray-900 mb-4 pt-6" 
          >
            5. Approximate Continuity
          </h3>
           <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white mt-[-1rem]">
            <div className="mt-4 space-y-4">
               {/* These DIVs remain hidden from ToC */}
              <div 
                id="continuity" 
                className="text-lg font-medium text-gray-900 mt-0" 
                role="heading" 
                aria-level={4}
              >
                What this means
              </div>
              <p className="text-gray-600">
                We assume there will not be large discontinuous jumps in general AI capabilities given continuous 
                increases in the inputs to those capabilities (compute and R&D effort). We do not make any such 
                assumption about the rate of AI progress with respect to calendar time.
              </p>
              
              <div 
                id="continuity-evidence" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Supporting evidence
              </div>
              <p className="text-gray-600">
                Taking an outside view, large discontinuous jumps in highly optimized domains are rare. Empirical
                evidence suggests that general capabilities (as measured by broad benchmarks) tend not to show large,
                sudden jumps. While the phenomenon of "emergent abilities" has been documented, most cases can be
                explained as measurement artifacts, and dramatic gains that would enable severe harm are extremely rare.
              </p>
              
              <div 
                id="continuity-implications" 
                className="font-medium text-gray-900 mt-6" 
                role="heading" 
                aria-level={5}
              >
                Implications
              </div>
              <p className="text-gray-600">
                This enables us to iteratively and empirically test our approach and detect flawed assumptions as 
                capabilities improve. Our technical approach doesn't need to be robust to arbitrarily capable AI 
                systems, but can focus on foreseeable capability improvements.
              </p>
            </div>
          </div>
        </div> {/* End of space-y container */}

        <div className="my-12 border-t border-gray-100"></div>

        {/* This H2 should also appear in ToC */}
        <h2 id="benefits-agi" className="text-2xl font-bold mb-6">Benefits of AGI</h2> 
        <p className="mt-4 text-gray-600">
          While our focus is on mitigating risks, it's important to acknowledge that AGI has the potential to 
          provide tremendous benefits, including:
        </p>
        
        <ul className="list-disc pl-5 text-gray-600 mt-4">
          <li>
            <strong>Raising living standards:</strong> AGI could drive economic growth through faster, more cost-effective
            innovation, while directly improving education and healthcare outcomes globally.
          </li>
          <li>
            <strong>Deepening human knowledge:</strong> AGI could act as a force multiplier for scientific discovery,
            helping tackle previously intractable problems in fields from medicine to climate science.
          </li>
          <li>
            <strong>Democratizing access to knowledge:</strong> AGI could make advanced problem-solving capabilities 
            widely accessible, lowering barriers to innovation and creativity.
          </li>
        </ul>
        
        <p className="mt-4 text-gray-600">
          Our goal is to access these benefits while effectively addressing safety concerns.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4 not-prose"> 
          <Link
            href="/risk-areas"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Explore Risk Areas
          </Link>
          <Link
            href="/benefits"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Learn More About Benefits
          </Link>
        </div>
      </div> {/* End of prose container */}
    </PageLayout>
  );
}