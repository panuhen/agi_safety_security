// src/app/misuse/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import ExpandableSection from '@/components/ui/ExpandableSection';
import MisuseApproachVisualization from '@/components/visualizations/MisuseApproach';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import Link from 'next/link';
import { FiShield, FiAlertTriangle, FiEye, FiUsers, FiLock, FiZap } from 'react-icons/fi';

export default function MisusePage() {
  return (
    <PageLayout
      title="Addressing Misuse"
      breadcrumbItems={[
        { name: 'Risk Areas', href: '/risk-areas' },
        { name: 'Misuse Mitigation', href: '/misuse', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          <GlossaryTooltip term="Misuse">Misuse</GlossaryTooltip> occurs when a human deliberately uses the AI system to cause harm, 
          against the developer&apos;s wishes. The approach described focuses on preventing bad actors from accessing dangerous capabilities.
        </p>

        <MisuseApproachVisualization />
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="misuse-overview" className="text-2xl font-bold mb-6">Understanding Misuse Risk</h2>
        
        <p className="text-gray-600">
          AI could exacerbate harm from misuse by:
        </p>
        
        <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-4">
          <li>
            <strong>Increased possibility of causing harm:</strong> AI could place the power of significant weapons 
            expertise and a large workforce in the hands of its users, expanding the pool of individuals with the 
            capability to cause severe harms.
          </li>
          <li>
            <strong>Decreased detectability:</strong> AI could assist with evading surveillance, reducing the 
            probability that a bad actor is caught.
          </li>
          <li>
            <strong>Disrupting defenses:</strong> As a novel and quickly developing technology, AI models disturb 
            the existing misuse equilibrium, requiring time for society to build appropriate controls.
          </li>
          <li>
            <strong>Automation at scale:</strong> AI systems may concentrate power in the hands of individuals who 
            control it, enabling a single bad actor to cause harm at unprecedented scale.
          </li>
        </ul>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="mitigation-approaches" className="text-2xl font-bold mb-6">Mitigation Approaches</h2>

        <div className="mt-8 space-y-12">
          {/* Capability-Based Risk Assessment */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-yellow-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiAlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 id="risk-assessment" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Capability-Based Risk Assessment</h3>
                  <p className="text-gray-600">
                    Before implementing costly mitigations, it is first assessed whether the AI model has capabilities that 
                    could enable severe harm.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="Threat Modeling" className="w-full">
                  <p className="text-gray-600">
                    Misuse threat modeling identifies concrete plausible ways that threat actors could cause severe 
                    harm through powerful capabilities of frontier AI systems. This involves characterizing:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>What capabilities the AI system has</li>
                    <li>What the threat actor does with these capabilities</li>
                    <li>What kinds of threat actors might be involved</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    The goal is to produce realistic descriptions of the most plausible pathways to harm as well as 
                    their expected damages.
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Capability Evaluations" className="w-full">
                  <p className="text-gray-600">
                    Dangerous capability evaluations assess whether a given AI system is approaching a capability 
                    threshold that unlocks severe harm. This might involve:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Multiple-choice tests of harmful knowledge</li>
                    <li>Agent task-performance on potentially dangerous activities</li>
                    <li>Human uplift trials measuring how effectively a model can help humans perform harmful tasks</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Capability Elicitation" className="w-full">
                  <p className="text-gray-600">
                    Capability elicitation involves finding the evaluation score that represents the full capabilities of 
                    the model, accounting for techniques that could enhance performance like finetuning or prompting.
                    This is important because:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Current safeguards can be removed with ease via finetuning if model weights are accessed</li>
                    <li>New techniques have been shown to dramatically improve model performance on dangerous tasks</li>
                    <li>Active elicitation helps verify that the model has not been tweaked to artificially fail evaluations</li>
                  </ul>
                </ExpandableSection>
              </div>
            </div>
          </div>
          
          {/* Model Deployment Mitigations */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-green-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiShield className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 id="model-mitigations" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Model Deployment Mitigations</h3>
                  <p className="text-gray-600">
                    When models possess dangerous capabilities, techniques are applied to prevent misuse:
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="Harmlessness Post-Training" className="w-full">
                  <p className="text-gray-600">
                    One common strategy is to intervene at post-training to teach the model to refuse to answer harmful 
                    requests. This can involve:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Adding instructions to the system prompt</li>
                    <li>Supervised finetuning on demonstrations of harmless responses</li>
                    <li>Reinforcement learning from human feedback (RLHF) or direct preference optimization (DPO) 
                    using preference comparisons</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Jailbreak Resistance" className="w-full">
                  <p className="text-gray-600">
                    Researchers have found many ways to circumvent a model&apos;s refusal training (jailbreaks), such as:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Exploiting role-playing abilities</li>
                    <li>Bypassing safety instructions through prompt injections</li>
                    <li>Obfuscating harmful queries inside other tasks</li>
                    <li>Using many-shot examples to induce harmful behavior</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Defense strategies include adversarial training, latent adversarial training (LAT), and 
                    representation rerouting (RR).
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Capability Suppression" className="w-full">
                  <p className="text-gray-600">
                    Capability suppression aims to modify the model to be unable to respond to certain queries. 
                    Approaches include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Filtering out harmful data from training sets</li>
                    <li>Gradient routing to localize undesired capabilities in parts of the network that can be deleted</li>
                    <li>Unlearning techniques that edit out unwanted knowledge or capabilities from a trained model</li>
                  </ul>
                </ExpandableSection>
              </div>
            </div>
          </div>
          
          {/* Monitoring */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-blue-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiEye className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 id="monitoring" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Monitoring</h3>
                  <p className="text-gray-600">
                    Monitoring systems detect when a threat actor attempts to inappropriately access dangerous capabilities, 
                    and respond to prevent them from causing harm.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="AI-Specific Monitoring Approaches" className="w-full">
                  <p className="text-gray-600">
                    Several techniques can be used to detect misuse attempts:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Probes on intermediate activations to detect harmful intent</li>
                    <li>Custom classifier language models that output harm probability scores</li>
                    <li>Prompted language models to evaluate user inputs and model outputs</li>
                    <li>Manual human labeling for high-risk cases</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    These techniques can be combined for defense in depth, as they have somewhat decorrelated failure modes.
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Response Options" className="w-full">
                  <p className="text-gray-600">
                    When misuse is detected, possible responses include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Immediately terminating the interaction</li>
                    <li>Inserting tokens into the prompt to make the model refuse to comply</li>
                    <li>Switching to a weaker model that is less likely to be able to assist harmful actions</li>
                  </ul>
                </ExpandableSection>
              </div>
            </div>
          </div>
          
          {/* Access Restrictions */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-blue-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiUsers className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 id="access-restrictions" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Access Restrictions</h3>
                  <p className="text-gray-600">
                    Access to models with dangerous capabilities can be restricted to vetted user groups and use cases, 
                    reducing the surface area that an actor can attempt to exploit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="Access Review Process" className="w-full">
                  <p className="text-gray-600">
                    Implementing effective restrictions requires:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Creating a policy around what intended use-cases should get access</li>
                    <li>Requiring submission of statements of intended use for review</li>
                    <li>Implementing enforcement mechanisms to verify ongoing compliance</li>
                    <li>Validating user identity and trustworthiness through &quot;know-your-customer&quot; vetting</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Access Control Configuration" className="w-full">
                  <p className="text-gray-600">
                    The actual configuration of access controls must balance security with utility:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Permission-checking layers that trigger only when dual-use capabilities are accessed</li>
                    <li>Separate endpoints for models with and without dangerous capabilities</li>
                    <li>Staged deployment to gather data on how access control should be configured</li>
                  </ul>
                </ExpandableSection>
              </div>
            </div>
          </div>
          
          {/* Securing Model Weights */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-purple-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiLock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 id="security" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Securing Model Weights</h3>
                  <p className="text-gray-600">
                    Security measures aim to prevent bad actors from stealing AI model weights, which could allow them to 
                    bypass deployment mitigations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="Identity and Access Control" className="w-full">
                  <p className="text-gray-600">
                    The first line of defense is to reduce access to &quot;least privilege&quot;:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Only give access to individuals who need it and for only the time needed</li>
                    <li>Use multi-factor authentication and security keys</li>
                    <li>Continuously supervise who has access to what part of the model infrastructure</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Environment Hardening" className="w-full">
                  <p className="text-gray-600">
                    The environment exposed to the model should be hardened from pre-training to inference time:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Monitoring and logging all access</li>
                    <li>Exfiltration detection and resistance</li>
                    <li>Using narrow APIs for downstream applications</li>
                    <li>Detecting and preventing API-based model extraction</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Encrypted Processing" className="w-full">
                  <p className="text-gray-600">
                    Advanced approaches to protect model weights include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Confidential computing using hardware enclaves like AMD-SEV-SNP or Intel TDX</li>
                    <li>Private inference that protects both the model and user prompts</li>
                    <li>Cryptographic computing techniques that enable computation on encrypted data</li>
                  </ul>
                </ExpandableSection>
              </div>
            </div>
          </div>
          
          {/* Red-Teaming Mitigations */}
          <div className="rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-red-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiZap className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 id="red-teaming" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Red-Teaming Mitigations</h3>
                  <p className="text-gray-600">
                    Red-teaming evaluates whether the described mitigations are sufficient by attempting to bypass them.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border-l border-r border-b border-gray-200">
              <div className="space-y-6">
                <ExpandableSection title="Red-Team Approaches" className="w-full">
                  <p className="text-gray-600">
                    Several approaches can be used for red-teaming:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Manual testing by security experts trying to circumvent safety measures</li>
                    <li>AI-enhanced testing using language models to generate problematic test cases</li>
                    <li>Algorithmic search methods that systematically alter prompts to find vulnerabilities</li>
                    <li>Targeted attack testing focused on weaknesses in specific safety mechanisms</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Red-Team Process" className="w-full">
                  <p className="text-gray-600">
                    A red-team test typically follows these steps:
                  </p>
                  <ol className="list-decimal pl-5 text-gray-600 mt-4 space-y-2">
                    <li>Start with the safeguard safety case</li>
                    <li>Identify key assumptions that the safety case relies on</li>
                    <li>Carry out tests to find where these assumptions fail</li>
                    <li>Assess whether the safety case is still adequate, or if additional R&D is needed</li>
                  </ol>
                  <p className="text-gray-600 mt-4">
                    Since a bad actor might put in much more effort than is invested in red-teaming, red teamers are given extra advantages 
                    to compensate, such as full knowledge of the mitigations or loosened thresholds.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="safety-cases" className="text-2xl font-bold mb-6">Safety Cases</h2>
        <p className="text-gray-600">
        The mitigations described above are critical components for addressing misuse risks, but they don&apos;t exist in isolation. 
        To make deployment decisions, a structured way is needed to determine if these mitigations collectively provide sufficient protection against risks. <GlossaryTooltip term="Safety case">Safety cases</GlossaryTooltip> provide 
        a framework for assessing whether our mitigation strategies are comprehensive enough to justify deployment decisions. 
        They help transform individual mitigations into coherent evidence that a system poses acceptable risk.
        </p>
        <p className="text-gray-600 mt-4">
        Safety cases for misuse typically fall into two categories: &quot;inability&quot; cases (demonstrating the model lacks dangerous capabilities) 
        and &quot;red-teamed&quot; cases (demonstrating mitigations are robust against sophisticated attacks).  
        </p>
      </div>
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/safety-cases"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center"
        >
          Explore Safety Cases
        </Link>
      </div>
    </PageLayout>
  );
}