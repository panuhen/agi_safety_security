// src/app/page.tsx
import Link from 'next/link';
import { FiShield, FiAlertTriangle, FiTarget, FiLayers } from 'react-icons/fi';
import ConceptCard from '@/components/ui/ConceptCard';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  An Approach to Technical AGI Safety & Security
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Explore Google DeepMind's comprehensive framework for addressing safety and security concerns 
                  related to Artificial General Intelligence (AGI).
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/risk-areas"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Explore Risk Areas
                  </Link>
                  <Link href="/core-assumptions" className="text-sm font-semibold leading-6 text-gray-900">
                    Core Assumptions <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key sections overview */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Comprehensive Framework</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key Areas of the AGI Safety & Security Approach
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This interactive guide presents a technical approach to ensuring AGI systems are developed safely 
            and securely, focusing on four risk areas and corresponding mitigation strategies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <ConceptCard
              title="Core Assumptions"
              description="Review the five fundamental assumptions about AGI development that underpin the safety approach."
              icon={<FiLayers className="h-7 w-7" />}
              linkHref="/core-assumptions"
            />
            <ConceptCard
              title="Risk Areas"
              description="Explore the four key risk areas: misuse, misalignment, mistakes, and structural risks - with a focus on the first two as most critical for severe harm prevention."
              icon={<FiAlertTriangle className="h-7 w-7" />}
              linkHref="/risk-areas"
            />
            <ConceptCard
              title="Misuse Mitigation"
              description="Learn about approaches to prevent malicious actors from accessing and exploiting dangerous AI capabilities."
              icon={<FiShield className="h-7 w-7" />}
              linkHref="/misuse"
            />
            <ConceptCard
              title="Misalignment Mitigation"
              description="Understand strategies to ensure AI systems remain aligned with human values and intentions, even as capabilities advance."
              icon={<FiTarget className="h-7 w-7" />}
              linkHref="/misalignment"
            />
          </dl>
        </div>
      </div>

      {/* Executive summary */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Executive Summary</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Artificial General Intelligence (AGI) promises transformative benefits like raising living standards worldwide and accelerating scientific discovery, but also presents significant risks. This approach develops an "anytime" framework to address risks of severe harms, focusing primarily on misuse and misalignment, while acknowledging mistakes and structural risks.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        For misuse, the strategy proactively identifies dangerous capabilities and prevents threat actors from accessing them through robust security, access restrictions, monitoring, and model safety mitigations. For misalignment, two lines of defense are outlined: first, training aligned models via amplified oversight and robust training; second, implementing system-level security measures to mitigate harm even from misaligned models.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        This approach is informed by key assumptions about AGI development: continuing within the current paradigm, potentially exceeding human capabilities, developing on uncertain timelines, and exhibiting approximately continuous progress. Supporting techniques include interpretability, uncertainty estimation, and safer design patterns for building effective AGI safety cases.
      </p>
          </div>
        </div>
      </div>
    </div>
  );
}