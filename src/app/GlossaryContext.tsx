// src/app/GlossaryContext.tsx
"use client"

import React, { createContext, useContext, ReactNode, useState } from 'react';

type GlossaryTerm = {
  term: string;
  definition: string;
};

type GlossaryContextType = {
  terms: GlossaryTerm[];
  highlightedTerm: string | null;
  setHighlightedTerm: (term: string | null) => void;
};

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Misuse",
    definition: "When a user intentionally instructs the AI system to take actions that cause harm, against the intent of the developer."
  },
  {
    term: "Misalignment",
    definition: "When the AI system knowingly causes harm against the intent of the developer or produces outputs for intrinsic reasons that the designer would not endorse."
  },
  {
    term: "Specification gaming",
    definition: "When an AI system exploits flaws in how its objective is specified, leading to unwanted behavior that technically satisfies the specification."
  },
  {
    term: "Goal misgeneralization",
    definition: "When an AI system learns an unintended goal that is consistent with the training data but produces undesired outputs in new situations."
  },
  {
    term: "Amplified oversight",
    definition: "Using AI systems themselves to help humans provide effective oversight, particularly for superhuman AI systems."
  },
  {
    term: "RLHF",
    definition: "Reinforcement Learning from Human Feedback - a technique for training AI models using human preferences rather than predefined rewards."
  },
  {
    term: "Jailbreak",
    definition: "An attempt to circumvent an AI system's safety measures or content restrictions through carefully crafted prompts."
  },
  {
    term: "Capability threshold",
    definition: "A level of AI capability at which a system becomes capable enough to enable severe harm if misused."
  },
  {
    term: "AGI",
    definition: "Artificial General Intelligence - AI systems that have the ability to understand, learn, and apply knowledge across a wide range of tasks at a level comparable to or exceeding human capabilities."
  },
  {
    term: "Safety case",
    definition: "A structured argument, supported by evidence, that a system is safe for a given application in a given environment."
  },
  {
    term: "Inability safety case",
    definition: "A structured argument demonstrating that an AI system lacks the capabilities necessary to cause harm, based on evidence from capability evaluations."
  },
  {
    term: "Red-teamed safety case",
    definition: "A structured argument showing that an AI system's safety mitigations are robust against potential attacks, based on evidence from comprehensive stress testing."
  },
];

const GlossaryContext = createContext<GlossaryContextType>({
  terms: glossaryTerms,
  highlightedTerm: null,
  setHighlightedTerm: () => {},
});

export function useGlossary() {
  return useContext(GlossaryContext);
}

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);

  return (
    <GlossaryContext.Provider
      value={{
        terms: glossaryTerms,
        highlightedTerm,
        setHighlightedTerm,
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
}