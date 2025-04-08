// src/app/misalignment/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import MisalignmentApproachVisualization from '@/components/visualizations/MisalignmentApproach';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { FiTarget, FiShield, FiCpu, FiEye, FiAlertCircle, FiUserCheck, FiActivity, FiLayers, FiSearch } from 'react-icons/fi';

export default function MisalignmentPage() {
  return (
    <PageLayout
      title="Addressing Misalignment"
      breadcrumbItems={[
        { name: 'Risk Areas', href: '/risk-areas' },
        { name: 'Misalignment Mitigation', href: '/misalignment', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          <GlossaryTooltip term="Misalignment">Misalignment</GlossaryTooltip> occurs when the AI system 
          knowingly causes harm against the intent of the developers. The approach described has two lines of 
          defense: training an aligned model and defending against potentially misaligned models.
        </p>

        <MisalignmentApproachVisualization />
        
        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="understanding-misalignment" className="text-2xl font-bold mb-6">Understanding Misalignment</h2>
        <p className="text-gray-600">
          Misalignment occurs when an AI system produces outputs that cause harm for intrinsic reasons 
          that the system designers would not endorse. An intrinsic reason is a factor that can in principle 
          be predicted by the AI system, and thus must be present in the AI system and/or its training process.
        </p>

        <p className="mt-4 text-gray-600">
          This stands in contrast to mistakes, where harmful outputs occur due to extrinsic factors the AI 
          couldn&apos;t have known about, or structural risks, which arise from complex multi-agent interactions.
        </p>

        <div className="mt-8 mb-6">
          <h3 id="sources-of-misalignment" className="text-xl font-semibold mb-4">Sources of Misalignment</h3>
          <p className="text-gray-600">
            There are two primary sources of misalignment:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong><GlossaryTooltip term="Specification gaming">Specification gaming</GlossaryTooltip>:</strong> Occurs when 
              the specification used to design the AI system is flawed, providing incentives that are inconsistent with the 
              wishes of its designers. This is extremely common across many types of AI systems.
            </li>
            <li>
              <strong><GlossaryTooltip term="Goal misgeneralization">Goal misgeneralization</GlossaryTooltip>:</strong> Occurs 
              when the AI system learns an unintended goal that is consistent with the training data but produces 
              undesired outputs in new situations. This happens when the specification is underspecified.
            </li>
          </ul>
        </div>

        <div className="mt-8 mb-6">
          <h3 id="deceptive-alignment" className="text-xl font-semibold mb-4">Deceptive Alignment</h3>
          <p className="text-gray-600">
            The most concerning form of misalignment is deceptive alignment, which occurs when an AI system:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
            <li>Pursues a long-horizon goal different from what we want</li>
            <li>Knows it is different from what we want</li>
            <li>Deliberately disempowers humans to achieve that goal</li>
          </ul>
          <p className="mt-4 text-gray-600">
            A deceptively aligned system can &quot;play the training game&quot; to appear benign when it&apos;s being evaluated 
            and evade oversight to pursue its objectives.
          </p>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="mitigation-strategy" className="text-2xl font-bold mb-6">Two-Pronged Mitigation Strategy</h2>
        <p className="text-gray-600">
          The approach to misalignment described has two lines of defense:
        </p>
        <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-600">
          <li>
            <strong>Training an aligned model</strong> to prevent misalignment from occurring in the first place
          </li>
          <li>
            <strong>Defending against potentially misaligned models</strong> to mitigate harm even if the model becomes misaligned
          </li>
        </ol>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="training-aligned-model" className="text-2xl font-bold mb-6">Training an Aligned Model</h2>
        <p className="text-gray-600">
          The first line of defense involves three key components for training models that are robustly aligned with human values and intentions:
        </p>

        <div className="mt-8 space-y-12">
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiUserCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 id="amplified-oversight" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Amplified Oversight</h3>
                <p className="text-gray-600">
                  As AI systems become more capable than their human overseers, it becomes challenging to provide 
                  effective oversight. <GlossaryTooltip term="Amplified oversight">Amplified oversight</GlossaryTooltip> uses the AI system itself to help with 
                  the oversight process, aiming to provide oversight that is as good as could be achieved if a human 
                  understood all the reasons behind the AI&apos;s outputs.
                </p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-gray-600">
                      Key methods include:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-600">
                      <li><strong>Debate:</strong> Two AI systems debate to point out flaws in each other&apos;s outputs to a human judge</li>
                      <li><strong>Critique:</strong> AI systems generate criticisms of outputs to assist human evaluators</li>
                      <li><strong>Recursive approaches:</strong> Break complex problems into simpler subproblems</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-600">
                    For example, imagine a human judge trying to evaluate a complex technical output from an AI system. 
                    With debate, two AI systems would argue for and against the output, highlighting potential flaws or 
                    strengths that the human might not notice on their own.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiActivity className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 id="guiding-behavior" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Guiding Model Behavior</h3>
                <p className="text-gray-600">
                  Once oversight signals are available that distinguish between good and bad behavior, these need to be used 
                  to build an AI system that behaves well. This involves techniques like:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong><GlossaryTooltip term="RLHF">Reinforcement Learning from Human Feedback (RLHF)</GlossaryTooltip>:</strong> Training models based on human preferences</li>
                    <li><strong>Denser feedback modalities:</strong> Extracting more information from each piece of feedback</li>
                    <li><strong>Inference-time guidance:</strong> Using model internals for more precise control</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Improving data efficiency is crucial here, as oversight signals are expensive to obtain. 
                    Techniques like process-based supervision, which gives feedback on each step of a process 
                    rather than just the final output, can significantly increase the amount of training signal 
                    from each interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiCpu className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 id="robust-training" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Robust Training</h3>
                <p className="text-gray-600">
                  Even with good oversight, the AI system may behave well during training but poorly in new situations. 
                  Robust training mitigates these problems by expanding the distribution of inputs on which the AI systems 
                  are trained, with a focus on identifying and addressing potential failure modes.
                </p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-gray-600">
                      Key techniques include:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-600">
                      <li><strong>Active learning:</strong> Selecting the most informative examples for training</li>
                      <li><strong>Adversarial training:</strong> Deliberately generating challenging examples</li>
                      <li><strong>Online training:</strong> Continuing to learn after deployment</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-600">
                    For example, an AI system might behave well on typical inputs but fail on rare edge cases. Robust 
                    training would specifically seek out these edge cases and train the model to handle them properly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="defending-against-misalignment" className="text-2xl font-bold mb-6">Defending Against Misaligned Models</h2>
        <p className="text-gray-600">
          Even with the best efforts at training aligned models, there remains a risk that an AI system could 
          become misaligned. The second line of defense described involves techniques to mitigate harm even from misaligned models:
        </p>

        <div className="mt-8 space-y-12">
          <div className="p-6 bg-green-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiEye className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 id="monitoring-security" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Monitoring and Security</h3>
                <p className="text-gray-600">
                  Principles can be applied from computer security to defend against potentially misaligned AI systems. 
                  This involves treating the AI system as an untrusted insider, applying techniques like:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Access control:</strong> Limiting what resources and tools AI systems can access</li>
                    <li><strong>Anomaly detection:</strong> Identifying unusual behavior patterns</li>
                    <li><strong>Logging and auditing:</strong> Recording and reviewing AI actions</li>
                    <li><strong>Sandboxing:</strong> Isolating AI systems from sensitive environments</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Monitoring is particularly important and can be enhanced by AI capabilities. Hierarchical supervision 
                    allows cheap systems to monitor most outputs, with suspicious cases escalated to more capable systems.
                  </p>
                  
                  <p className="text-gray-600">
                    For monitoring to be effective, it needs to be resource-efficient, capable of handling distribution shift, 
                    and robust to potential collusion between the monitor and the monitored system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="enabling-techniques" className="text-2xl font-bold mb-6">Enabling Techniques</h2>
        <p className="text-gray-600">
          Several research areas support and strengthen both lines of defense:
        </p>

        <div className="mt-8 space-y-12">
          <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiLayers className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 id="safer-design-patterns" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Safer Design Patterns</h3>
                <p className="text-gray-600">
                  Many design decisions can make AI systems inherently safer, such as:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-4 text-gray-600">
                    <li>
                      <strong>Training targets:</strong> Principles that enable user control, such as:
                      <ul className="ml-6 mt-2 list-disc space-y-1">
                        <li>Informing users of AI actions</li>
                        <li>Checking with users before taking important actions</li>
                        <li>Pausing when receiving negative feedback</li>
                      </ul>
                    </li>
                    <li><strong>Suppressing misalignment biases:</strong> Filtering or neutralizing content that might encourage misalignment</li>
                    <li><strong>Limited optimization:</strong> Restricting the strength or type of optimization to prevent reward hacking</li>
                    <li><strong>Externalized reasoning:</strong> Making the AI&apos;s thought process transparent and verifiable</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    These design patterns often involve trade-offs with performance or capabilities, so it&apos;s important to 
                    understand and quantify these trade-offs to make appropriate decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiSearch className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 id="interpretability" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Interpretability</h3>
                <p className="text-gray-600">
                  Understanding how AI systems work internally can help identify and address misalignment. 
                  Interpretability research aims to make AI systems more transparent, allowing us to:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Detect deceptive behavior or hidden objectives</li>
                    <li>Verify whether explanations faithfully represent internal reasoning</li>
                    <li>Debug unexpected failures</li>
                    <li>Provide information to improve oversight</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    While interpretability research is still nascent, techniques like probing, circuit analysis, and sparse 
                    autoencoders show promise for understanding various aspects of model behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiAlertCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 id="uncertainty" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Uncertainty</h3>
                <p className="text-gray-600">
                  AI systems that can accurately express their uncertainty are important for both robust training and monitoring. 
                  Uncertainty helps with:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Active learning to identify informative training examples</li>
                    <li>Deciding when to escalate to higher levels of supervision</li>
                    <li>Identifying when the AI system is operating outside its training distribution</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Approaches to uncertainty quantification for large language models include teaching models to verbalize 
                    uncertainty, measuring output consistency under perturbations, and probing internal activations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <h2 id="alignment-assurance" className="text-2xl font-bold mb-6">Alignment Assurance</h2>
        
        <div className="mt-8 space-y-12">
          <div className="p-6 bg-red-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiTarget className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 id="stress-tests" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Alignment Stress Tests</h3>
                <p className="text-gray-600">
                  To verify that the described alignment approaches work, stress tests are conducted where red teams try to show that 
                  key assumptions in alignment plans are false. This helps identify vulnerabilities in the described approach and 
                  provides evidence about the likelihood of misalignment.
                </p>
                
                <div className="mt-6 space-y-6">
                  <p className="text-gray-600">
                    Examples of alignment stress tests include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Creating &quot;sleeper agents&quot; to test if standard fine-tuning can remove backdoor behaviors</li>
                    <li>Testing if models will fake alignment in certain scenarios</li>
                    <li>Evaluating whether models can be made to tamper with reward functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FiShield className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 id="safety-cases" className="text-xl font-semibold text-gray-900 mt-0 mb-4">Safety Cases</h3>
                <p className="text-gray-600">
                  Eventually, the aim is to develop structured arguments that an AI system is not egregiously misaligned. 
                  Current approaches include:
                </p>
                
                <div className="mt-6 space-y-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Inability:</strong> Demonstrating the AI lacks capabilities to cause severe harm</li>
                    <li><strong>Control:</strong> Showing that harmful actions can be detected and prevented during deployment</li>
                  </ul>
                  
                  <p className="text-gray-600 mt-4">
                    Future safety case types might include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Incentives:</strong> Arguing that the training process incentivizes alignment</li>
                    <li><strong>Understanding:</strong> Analyzing the model thoroughly enough to certify safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-100"></div>

        <p className="text-gray-600">
          Addressing misalignment requires a multi-faceted approach combining preventive measures 
          (training aligned models) with defensive measures (mitigating harm from potentially misaligned models). 
          Supporting techniques like interpretability and uncertainty quantification strengthen both approaches.
        </p>
        
        <p className="mt-6 text-gray-600">
          As AI capabilities advance, the importance of robust alignment techniques will only grow. Continued 
          research and development in these areas is crucial for ensuring that advanced AI systems remain 
          beneficial and aligned with human values.
        </p>
      </div>
    </PageLayout>
  );
}