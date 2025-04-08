// src/app/safety-cases/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import { FiShield, FiCheckCircle, FiSearch, FiAlertCircle } from 'react-icons/fi';

export default function SafetyCasesPage() {
  return (
    <PageLayout
      title="Safety Cases"
      breadcrumbItems={[
        { name: 'Safety Cases', href: '/safety-cases', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          A safety case is a structured argument, supported by a body of evidence, that a system is safe 
          for a given application in a given environment. For AGI systems, safety cases are crucial to 
          justify deployment decisions and ensure appropriate risk mitigation.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="what-are-safety-cases" className="text-2xl font-bold mb-6">What Are Safety Cases?</h2>
        <p className="text-gray-600">
          Safety cases provide a systematic way to argue that a system&apos;s risks have been reduced to an acceptable 
          level. They include both the argument structure (how evidence supports claims about safety) and the 
          evidence itself (test results, design specifications, analysis outcomes, etc.).
        </p>
        <p className="mt-4 text-gray-600">
          For AGI systems, specialized safety cases are needed that address the unique risks of advanced AI, 
          particularly for misuse and misalignment risks.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="misuse-safety-cases" className="text-2xl font-bold mb-6">Misuse Safety Cases</h2>
        <p className="text-gray-600">
          For mitigating misuse risks, the report identifies two main types of safety cases:
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inability Safety Case Card */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiShield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Inability Safety Case</h3>
                <p className="text-gray-600 m-0">
                  The system does not possess the capability to cause harm. This is justified based on the results 
                  of dangerous capability evaluations, and how those capabilities enable risks.
                </p>
              </div>
            </div>
          </div>
          
          {/* Red-Teamed Safety Case Card */}
          <div className="p-6 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiAlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Red-Teamed Safety Case</h3>
                <p className="text-gray-600 m-0">
                  For models with dangerous capabilities, stress tests are run to understand how robust the described mitigations 
                  are against potential attacks. This evidence forms the basis of an argument that mitigations are 
                  sufficient for reducing risk to adequate levels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* *** START FIXES *** */}
        {/* Add standard separator */}
        <div className="my-12 border-t border-gray-100"></div>

        {/* Changed h3 to h2, updated classes, added id, removed wrapper div */}
        <h2 id="dangerous-capability-evaluations" className="text-2xl font-bold mb-6">Dangerous Capability Evaluations</h2>
        <p className="text-gray-600">
          Dangerous capability evaluations measure the extent to which an AI system possesses capabilities 
          that could enable severe harm if misused. These evaluations test specific tasks that proxy for 
          real-world harmful capabilities.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">
            For example, evaluations might test an AI system&apos;s ability to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Provide detailed instructions for harmful activities</li>
            <li>Identify exploitable vulnerabilities in critical systems</li>
            <li>Generate persuasive content for manipulation</li>
            <li>Assist with dual-use R&D in sensitive domains</li>
          </ul>
          <p className="text-gray-600">
            If these evaluations show that the model cannot perform these tasks at a level that would enable 
            severe harm, an inability safety case can be made.
          </p>
        </div>

        {/* Add standard separator */}
        <div className="my-12 border-t border-gray-100"></div>

        {/* Changed h3 to h2, updated classes, added id, removed wrapper div */}
        <h2 id="red-teaming-stress-testing" className="text-2xl font-bold mb-6">Red-Teaming and Stress Testing</h2>
        <p className="text-gray-600">
          For models that possess dangerous capabilities, it is necessary to assess whether the described mitigations are 
          sufficient. Red-teaming involves attempting to bypass safety measures to access dangerous capabilities.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">
            This can take various forms:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Manual attempts to jailbreak models or craft adversarial prompts</li>
            <li>Automated searches for vulnerabilities in safety mechanisms</li>
            <li>Targeted attacks against specific mitigations</li>
            <li>Simulating sophisticated threat actors with additional advantages</li>
          </ul>
          <p className="text-gray-600">
            The results of these red-teaming efforts provide evidence for a control safety case, demonstrating 
            that mitigations are robust against a range of attack vectors.
          </p>
        </div>
        {/* *** END FIXES *** */}

        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="misalignment-safety-cases" className="text-2xl font-bold mb-6">Misalignment Safety Cases</h2>
        <p className="text-gray-600">
          For mitigating misalignment risks, the report considers several approaches to safety cases:
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inability Safety Case Card */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {/* ... content ... */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiShield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Inability Safety Case</h3>
                <p className="text-gray-600 m-0">
                  For current models, it can be argued that the AI system could not cause severe harm even if it was 
                  trying to do so. This can be demonstrated through capability evaluations, similarly to misuse.
                </p>
              </div>
            </div>
          </div>
          
          {/* Control Safety Case Card */}
          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {/* ... content ... */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiCheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Control Safety Case</h3>
                <p className="text-gray-600 m-0">
                  This type of argument says that if the AI system were to produce outputs that would cause harm, 
                  harmful actions would be noticed and corrective action taken that prevents the harm. Monitoring and control evaluations 
                  provide evidence for this type of safety case.
                </p>
              </div>
            </div>
          </div>
          
          {/* Understanding Safety Case Card */}
          <div className="p-6 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {/* ... content ... */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiSearch className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Understanding Safety Case</h3>
                <p className="text-gray-600 m-0">
                  This class of safety cases aims to analyze the final model well enough that it can be certified 
                  that it only produces safe outputs. Progress in interpretability research could eventually 
                  enable such safety cases.
                </p>
              </div>
            </div>
          </div>
          
          {/* Incentives Safety Case Card */}
          <div className="p-6 bg-yellow-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {/* ... content ... */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiAlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-0 mb-4">Incentives Safety Case</h3>
                <p className="text-gray-600 m-0">
                  An incentives-based argument appeals to the training process to argue that the AI system is 
                  pursuing the intended goal. This requires addressing challenges like goal misgeneralization 
                  or distribution shift.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="control-evaluations" className="text-2xl font-bold mb-6">Control Evaluations</h2>
        <p className="text-gray-600">
          A control evaluation extends misuse red-teaming to the misalignment setting. In the misuse setting, 
          the red team acts as a malicious external user. In a control evaluation, the red team can finetune 
          or prompt the model to try to cause harm, and the success of the resulting model is observed.
        </p>
        <p className="mt-4 text-gray-600">
          Control evaluations test the robustness of the supervision techniques described: if the red team can create 
          a model that behaves in ways that would cause harm, but that supervision doesn&apos;t detect, then 
          the supervision described is insufficient.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="alignment-stress-tests" className="text-2xl font-bold mb-6">Alignment Stress Tests</h2>
        <p className="text-gray-600">
          Alignment stress tests involve a red team trying to show that key assumptions in alignment plans 
          are false. This helps identify vulnerabilities in the described approach and provides evidence about the 
          likelihood of misalignment.
        </p>
        <p className="mt-4 text-gray-600">
          These tests typically proceed by:
        </p>
        <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-600">
          <li>Starting with a specific safety argument or assumption</li>
          <li>Designing experiments to test this assumption&apos;s validity</li>
          <li>Drawing conclusions based on the experiment results</li>
          <li>Using these insights to improve the described alignment approaches</li>
        </ol>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="building-robust-safety-cases" className="text-2xl font-bold mb-6">Building Robust Safety Cases</h2>
        <p className="text-gray-600">
          As AI systems become more powerful, the safety cases described must evolve to address new risks. Initially, 
          inability safety cases may be sufficient, but as capabilities advance, it will be necessary to rely more 
          on control safety cases and eventually on understanding or incentives-based arguments.
        </p>
        <p className="mt-4 text-gray-600">
          A critical aspect of robust safety cases is acknowledging their limitations and continuously 
          seeking to strengthen the evidence they rely on. This requires ongoing research into evaluation 
          methods, interpretability techniques, and alignment approaches.
        </p>
      </div>
    </PageLayout>
  );
}