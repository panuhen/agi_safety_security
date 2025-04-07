import PageLayout from '@/components/layout/PageLayout';
import RiskAreasVisualization from '@/components/visualizations/RiskAreas';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import Link from 'next/link';
import { FiAlertCircle, FiCrosshair, FiHelpCircle, FiGlobe } from 'react-icons/fi';

export default function RiskAreasPage() {
  return (
    <PageLayout
      title="Risk Areas"
      breadcrumbItems={[
        { name: 'Risk Areas', href: '/risk-areas', current: true },
      ]}
      showTableOfContents={true}
    >
      <section className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          When addressing safety and security, it is helpful to identify broad groups of pathways to harm 
          that can be addressed through similar mitigation strategies. We define areas based on abstract 
          structural features rather than concrete risk domains.
        </p>

        <RiskAreasVisualization />

        {/* Header for Risk Categories */}
        <h2 id="risk-categories" className="text-2xl font-bold mb-6">
          The Four Risk Categories
        </h2>

        {/* Misuse Section */}
        <div className="p-6 bg-red-50 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FiAlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 id="misuse" className="text-xl font-semibold text-gray-900 mt-0 mb-4">
                Misuse
              </h3>
              <p className="text-gray-600">
                <GlossaryTooltip term="Misuse">Misuse</GlossaryTooltip> occurs when a user intentionally instructs the AI system to take actions that cause harm, 
                against the intent of the developer. For example, an AI system might help a hacker conduct 
                cyberattacks against critical infrastructure.
              </p>
              <p className="text-gray-600 mt-2">
                AI could exacerbate harm from misuse in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Increased possibility of causing harm by placing significant expertise and capabilities in the hands of users</li>
                <li>Decreased detectability of harmful actions by helping evade surveillance</li>
                <li>Disrupting existing defensive institutions, which take time to adapt to new threats</li>
                <li>Enabling automation at scale, allowing individual actors to cause harm more broadly</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/misuse"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Explore Misuse Mitigation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-100"></div>

        {/* Misalignment Section */}
        <div className="p-6 bg-yellow-50 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FiCrosshair className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 id="misalignment" className="text-xl font-semibold text-gray-900 mt-0 mb-4">
                Misalignment
              </h3>
              <p className="text-gray-600">
                <GlossaryTooltip term="Misalignment">Misalignment</GlossaryTooltip> occurs when the AI system knowingly causes harm against the intent of the developer. 
                This can happen through <GlossaryTooltip term="Specification gaming">specification gaming</GlossaryTooltip> or <GlossaryTooltip term="Goal misgeneralization"> goal misgeneralization</GlossaryTooltip>.
              </p>
              <p className="text-gray-600">
                For example, an AI system may provide confident answers that stand up to scrutiny from human overseers, but the AI knows the answers are actually incorrect. 
                In more extreme cases, a misaligned AI could actively work against the interests of developers or users to pursue its own goals.
              </p>
              <p className="text-gray-600">
                Alignment is particularly challenging as AI systems become more capable than their human overseers, as it becomes harder to determine whether the AI is actually 
                pursuing the goals we intend or merely appearing to do so.
              </p>
              <div className="mt-4">
                <Link
                  href="/misalignment"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Explore Misalignment Mitigation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-100"></div>

        {/* Mistakes Section */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FiHelpCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 id="mistakes" className="text-xl font-semibold text-gray-900 mt-0 mb-4">
                Mistakes
              </h3>
              <p className="text-gray-600">
                Mistakes occur when the AI system produces a short sequence of outputs that directly cause harm, 
                but the AI system did not know that the outputs would lead to harmful consequences that the 
                developer did not intend.
              </p>
              <p className="text-gray-600">
                For example, an AI agent running a power grid may not be aware that a transmission line requires maintenance, 
                and so might overload it and burn it out, causing a power outage.
              </p>
              <p className="text-gray-600">
                When there is no adversary, as with mistakes, standard safety engineering practices (e.g., testing, 
                verification, and redundancy) can drastically reduce risks, and should be similarly effective for averting AI 
                mistakes as for human mistakes.
              </p>
              <p className="text-gray-600 mt-2">
                These risks often emerge from complex interactions and may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>AI-generated entertainment and companions distorting genuine relationships</li>
                <li>AI systems undermining human sense of achievement by doing more and more of our work</li>
                <li>Degradation of information quality as AI-generated content becomes widespread</li>
                <li>Gradual loss of human control over political and economic decision-making</li>
                <li>Challenges to democratic processes through misinformation or surveillance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-100"></div>

        {/* Structural Risks Section */}
        <div className="p-6 bg-green-50 rounded-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FiGlobe className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 id="structural-risks" className="text-xl font-semibold text-gray-900 mt-0 mb-4">
                Structural Risks
              </h3>
              <p className="text-gray-600">
                Structural risks are harms arising from multi-agent dynamics – involving multiple people, 
                organizations, or AI systems – which would not have been prevented simply by changing one person's 
                behaviour, one system's alignment, or one system's safety controls.
              </p>
              <p className="text-gray-600 mt-2">
                These risks often emerge from complex interactions and may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>AI-generated entertainment and companions distorting genuine relationships</li>
                <li>AI systems undermining human sense of achievement by doing more and more of our work</li>
                <li>Degradation of information quality as AI-generated content becomes widespread</li>
                <li>Gradual loss of human control over political and economic decision-making</li>
                <li>Challenges to democratic processes through misinformation or surveillance</li>
              </ul>
              <p className="text-gray-600 mt-2">
                These problems are often complex and multifaceted, requiring broader societal responses rather than purely 
                technical solutions from AI developers.
              </p>
            </div>
          </div>
        </div>

        {/* Our Focus Section */}
        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="our-focus" className="text-2xl font-bold mb-6">
          Our Focus
        </h2>
        <p className="text-gray-600">
          Our strategy focuses primarily on <GlossaryTooltip term="misuse">misuse</GlossaryTooltip> and <GlossaryTooltip term="misalignment">
          misalignment</GlossaryTooltip>, as these present the most significant 
          and addressable risks of severe harm. Mistakes are better addressed through standard safety practices, 
          while structural risks require broader societal responses.
        </p>

        {/* Approach to Misuse */}
        <h3 id="approach-to-misuse" className="text-xl font-semibold mt-8 mb-6">
          Approach to Misuse
        </h3>
        <p className="text-gray-600">
          For misuse, our strategy aims to prevent bad actors from accessing dangerous capabilities through robust security, 
          access restrictions, monitoring, and model safety mitigations. We focus on identifying when models have 
          dangerous capabilities and implementing appropriate safeguards.
        </p>

        {/* Approach to Misalignment */}
        <h3 id="approach-to-misalignment" className="text-xl font-semibold mt-8 mb-6">
          Approach to Misalignment
        </h3>
        <p className="text-gray-600">
          For misalignment, we outline two lines of defense: model-level mitigations such as amplified oversight and robust 
          training, and system-level security measures such as monitoring and access control. We also leverage techniques 
          from interpretability and uncertainty estimation to enhance these mitigations.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/misuse"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
          >
            Explore Misuse Mitigation
          </Link>
          <Link
            href="/misalignment"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-center"
          >
            Explore Misalignment Mitigation
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}