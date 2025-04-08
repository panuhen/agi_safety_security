// src/app/benefits/page.tsx
import PageLayout from '@/components/layout/PageLayout';
import GlossaryTooltip from '@/components/ui/GlossaryTooltip';
import { FiTrendingUp, FiBook, FiLayers, FiUsers } from 'react-icons/fi';

export default function BenefitsPage() {
  return (
    <PageLayout
      title="Benefits of AGI"
      breadcrumbItems={[
        { name: 'Benefits of AGI', href: '/benefits', current: true }
      ]}
    >
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600">
          While the primary focus is on mitigating risks, it&apos;s important to recognize the tremendous 
          potential benefits that <GlossaryTooltip term="AGI">AGI</GlossaryTooltip> could bring to humanity. 
          These benefits motivate the development of AGI and underscore the importance of building it safely.
        </p>

        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="overview-of-benefits" className="text-2xl font-bold mb-6">Overview of Benefits</h2>
        <p className="text-gray-600">
          Artificial General Intelligence promises transformative benefits across virtually every domain 
          of human endeavor. Its capability to think, learn, and solve problems across multiple domains 
          could help address some of humanity&apos;s most pressing challenges and unlock new possibilities 
          for human flourishing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FiTrendingUp className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900 m-0">Economic Growth</h3>
            </div>
            <p className="text-gray-600 m-0">
              AGI could dramatically accelerate economic growth by increasing productivity, automating 
              routine tasks, and enabling innovation across sectors.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FiBook className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900 m-0">Scientific Discovery</h3>
            </div>
            <p className="text-gray-600 m-0">
              AGI could accelerate scientific research by analyzing vast amounts of data, generating 
              hypotheses, and even designing and running experiments.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FiUsers className="h-6 w-6 text-purple-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900 m-0">Healthcare Improvements</h3>
            </div>
            <p className="text-gray-600 m-0">
              AGI could revolutionize healthcare through drug discovery, personalized medicine, 
              disease diagnosis, and medical research.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FiLayers className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900 m-0">Educational Access</h3>
            </div>
            <p className="text-gray-600 m-0">
              AGI could democratize education by providing personalized, adaptive learning 
              experiences for people around the world.
            </p>
          </div>
        </div>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="raising-living-standards" className="text-2xl font-bold mb-6">Raising Living Standards Across the World</h2>
        <p className="text-gray-600">
          AGI, if deployed safely, widely, and cost-effectively, has the potential to raise living 
          standards across the world in several important ways.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Economic Growth and Prosperity</h3>
        <p className="text-gray-600">
        By contributing to faster, more cost-effective innovation, AGI could drive significant 
        economic growth. Key impacts include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
          <li><strong>High ROI on innovation</strong>: Research suggests social returns of at least $4 for every $1 spent on innovation, potentially rising to over $20 when accounting for broader factors</li>
          <li><strong>Global prosperity</strong>: Potential to raise the global standard of living to levels considered respectable in modern developed countries</li>
          <li><strong>Transformation scale</strong>: A tenfold increase in global GDP (comparable to the economic growth achieved between 1820-2010) would represent approximately $13,500 trillion in economic value when discounted at 5%</li>
        </ul>
        <p className="text-gray-600 mt-4">
          As a &quot;technology of technologies,&quot; AGI could enhance innovation across all fields, 
          potentially raising the global standard of living to levels considered respectable in 
          modern developed countries—a transformation comparable to the global economic gains 
          achieved between 1820 and 2010.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Education Improvements</h3>
        <p className="text-gray-600">
          AGI could address critical gaps in global education access and quality:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
          <li><strong>Addressing critical needs</strong>: Currently, 57% of ten-year-olds in Low and Middle-Income Countries cannot read simple texts</li>
          <li><strong>Personalized learning</strong>: Adaptive educational experiences tailored to individual learning styles and paces</li>
          <li><strong>Proven improvements</strong>: Early studies show AI-enhanced learning significantly improves performance on tasks like SAT math problems</li>
          <li><strong>Broader access</strong>: Making high-quality education available to people of all backgrounds globally</li>
        </ul>
        <p className="text-gray-600 mt-4">
          AGI could provide personalized, adaptive learning experiences, making high-quality 
          education more accessible and effective for people of all backgrounds. This could be 
          particularly impactful given the notable benefits of personalized tuition on learning 
          outcomes. Early studies have shown that AI-enhanced learning can significantly improve 
          performance on tasks like SAT math problems and computer programming.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Healthcare Advancements</h3>
        <p className="text-gray-600">
          AGI&apos;s potential to transform healthcare includes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
          <li><strong>Improved diagnostics</strong>: More accurate and earlier disease detection</li>
          <li><strong>Personalized medicine</strong>: Treatment plans tailored to individual genetic profiles</li>
          <li><strong>Accelerated research</strong>: Faster drug discovery and development processes</li>
          <li><strong>Genetic insights</strong>: Better understanding of genetic variants in diseases like cystic fibrosis and cancer</li>
          <li><strong>Equitable access</strong>: Improvements in healthcare quality for underserved populations</li>
        </ul>
        <p className="text-gray-600 mt-4">
          These advancements may occur directly through AI-assisted drug discovery, or indirectly 
          through insights into genetics and disease mechanisms. For example, AI-predicted missense 
          data enables researchers to learn more about the role of genetic variants in diseases 
          such as cystic fibrosis, sickle-cell anemia, or cancer.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="scientific-discovery" className="text-2xl font-bold mb-6">Deepening Human Knowledge and Accelerating Scientific Discovery</h2>
        <p className="text-gray-600">
          Recent breakthroughs have demonstrated the potential for AI models to capture complex 
          scientific concepts and enable novel discoveries in domains such as mathematics, chemistry, 
          and biology.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">AGI as a Force Multiplier</h3>
        <p className="text-gray-600">
          By dramatically expanding our cognitive capacities, AGI could fundamentally alter the 
          constraint landscape for research. In principle, it is possible to concurrently apply 
          many replicas of AGI systems to solving important problems with major downstream impact, 
          such as new discoveries in energy that could significantly affect energy prices and 
          environmental health.
        </p>
        <p className="text-gray-600">
          The Nobel Turing Challenge, for example, aims to develop a highly autonomous AI system 
          that can perform top-level science, indistinguishable from the quality of that performed 
          by the best human scientists, potentially achieving discoveries worthy of Nobel Prize 
          level recognition.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Accelerating Research</h3>
        <p className="text-gray-600">
          AGI could accelerate scientific research through several mechanisms:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Analyzing vast, complex datasets from multiple experiments and laboratories to uncover patterns beyond human perception</li>
          <li>Digesting and synthesizing entire fields of scientific literature to help researchers formulate better hypotheses</li>
          <li>Serving as executable repositories of domain knowledge, capturing intricate relationships among hundreds of thousands of variables</li>
          <li>Automating or semi-automating experimental design and execution through robotics</li>
        </ul>
        <p className="text-gray-600 mt-4">
          As a specific example, researchers have already leveraged deep learning and graph neural 
          networks to discover 2.2 million new crystals, including 380,000 stable materials, effectively 
          multiplying the number of technologically viable materials known to humanity.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="lowering-barriers" className="text-2xl font-bold mb-6">Enhancing Information Processing and Lowering Barriers to Innovation</h2>
        <p className="text-gray-600">
          AGI could democratize enhanced information processing capability and access to knowledge 
          at unprecedented scale, rendering it accessible to vast swathes of the world&apos;s population.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Democratizing Access</h3>
        <p className="text-gray-600">
          AGI could lower the barriers to innovation by making advanced problem-solving capabilities 
          widely accessible. This could enable individuals and small organizations to tackle complex 
          challenges previously only addressable by large, well-funded institutions.
        </p>
        <p className="text-gray-600">
          Applications, APIs, tools, and agents will likely become more widely accessible over time, 
          representing an important shift in how knowledge is distributed, accessed, understood, and 
          leveraged. AI assistants in particular are expected to take on a number of roles to help 
          augment and improve human decision-making.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">New Problem-Solving Paradigms</h3>
        <p className="text-gray-600">
          AGI will help create new tools to better test and understand the world. An exciting 
          emerging area is using multi-agent systems to study emergent social phenomena – complex 
          behaviors arising spontaneously from the interaction of individual agents.
        </p>
        <p className="text-gray-600">
          This opens up entirely new avenues for scientific inquiry, allowing researchers to explore 
          the dynamics of social systems, markets, and institutions in ways that were previously 
          impossible. For example, researchers could populate simulated worlds with AI agents to study 
          how social norms evolve or how cooperation emerges.
        </p>
        
        <div className="my-12 border-t border-gray-100"></div>
        
        <h2 id="balancing-benefits-risks" className="text-2xl font-bold mb-6">Balancing Benefits and Risks</h2>
        <p className="text-gray-600">
          The pursuit of AGI is motivated by these important benefits—the ability to deploy intelligence 
          at scale will allow society to devote new resources to many domains and problems crucial to 
          the betterment of humankind. However, the benefits of AGI can only be fully realized if systems are developed safely and responsibly. 
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
          <li><strong>Dual-use capabilities</strong>: Many of AGI&apos;s most beneficial capabilities (like scientific discovery or systems optimization) could also be misused. The misuse prevention approaches outlined in this framework aim to block harmful applications while enabling beneficial ones.</li>
          <li><strong>Sustainable progress</strong>: By ensuring AGI systems remain aligned with human values and intentions, the alignment approaches in this framework help ensure that benefits accumulate over time rather than being undermined by unintended consequences.</li>
          <li><strong>Maintaining human agency</strong>: The safety framework&apos;s emphasis on human oversight and control helps ensure that AGI enhances human capabilities and decision-making rather than diminishing human agency and control.</li>
          <li><strong>Enabling broader deployment</strong>: Strong safety guarantees make it possible to deploy AGI more widely and in more domains, maximizing potential benefits while managing risks.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          By developing robust safety measures alongside advancing capabilities, we can work toward 
          a future where AGI enhances human flourishing without introducing unacceptable risks.
        </p>
      </div>
    </PageLayout>
  );
}