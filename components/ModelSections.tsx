"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const slideFromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const marketNowItems = [
  "$3-10k/month retainers",
  "Output-based, cookie-cut",
  "Risk sits with the brand",
  "No business case for the spend",
];

const weOfferItems = [
  "A defined outcome, agreed before we start",
  "Measurable, outcome-based",
  "Guaranteed result, or we keep working at our cost",
  "Risk absorbed by the agency",
];

const sprintPhases = [
  {
    week: "Week 0",
    title: "Strategic Gate",
    description:
      "Qualify or walk. Audit tracking, reviews, decision-maker authority.",
  },
  {
    week: "Weeks 1-2",
    title: "Discovery & Baseline",
    description: "Lock the metric. Verify tracking. Deliver brief.",
  },
  {
    week: "Weeks 3-5",
    title: "Production",
    description: "UGC creators briefed and filmed. Three revision rounds max.",
  },
  {
    week: "Weeks 6-8",
    title: "Deploy & Measure",
    description:
      "Ads live from creator handles. Weekly reporting against guaranteed metric.",
  },
  {
    week: "End of Week 8",
    title: "Sprint Debrief",
    description: "Hit or miss documented. Engine retainer proposed.",
  },
];

const guaranteeCards = [
  {
    title: "Miss ≤20%",
    description: "30-day free extension. Continued at agency cost.",
  },
  {
    title: "Miss >20%",
    description:
      "50% of sprint fee credited or partial refund within 14 days.",
  },
  {
    title: "Client-caused miss",
    description:
      "Guarantee voided. Full fee due. Named explicitly in contract.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[11px] uppercase tracking-widest">
      {children}
    </p>
  );
}

export function ProblemSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="bg-white px-6 py-[120px]"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel>§ 01 THE PROBLEM</SectionLabel>

        <h2 className="mt-6 max-w-4xl font-display text-[clamp(36px,4vw,56px)] leading-tight text-near-black">
          The marketing services market is broken on both sides.
        </h2>

        <div className="mt-16 overflow-hidden rounded-2xl border border-[#e5e5e5]">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[#e5e5e5] p-8 md:border-b-0 md:border-r">
              <h3 className="font-body text-[13px] font-medium uppercase tracking-widest text-near-black">
                The market now
              </h3>
              <ul className="mt-6 space-y-4">
                {marketNowItems.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] leading-relaxed text-near-black/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8">
              <h3 className="font-body text-[13px] font-medium uppercase tracking-widest text-green">
                What we offer
              </h3>
              <ul className="mt-6 space-y-4">
                {weOfferItems.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] leading-relaxed text-green"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function SprintSection() {
  return (
    <section className="bg-green px-6 py-[120px] text-white">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>§ 02 THE SPRINT</SectionLabel>

        <h2 className="mt-6 max-w-3xl font-display text-[clamp(36px,4vw,56px)] italic leading-tight">
          Eight weeks. One outcome. One entry point.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          {sprintPhases.map((phase, index) => (
            <motion.div key={phase.week} variants={slideFromLeft}>
              <div className="grid gap-4 py-8 md:grid-cols-[140px_180px_1fr] md:items-start md:gap-8">
                <p className="font-body text-[13px] uppercase tracking-widest text-white/60">
                  {phase.week}
                </p>
                <p className="font-body text-[15px] font-medium">
                  {phase.title}
                </p>
                <p className="font-body text-[15px] leading-relaxed text-white/70">
                  {phase.description}
                </p>
              </div>
              {index < sprintPhases.length - 1 && (
                <div className="h-px bg-white/15" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function GuaranteeSection() {
  return (
    <section className="bg-white px-6 py-[120px]">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>§ 03 THE GUARANTEE</SectionLabel>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-[800px] text-center font-display text-[clamp(28px,3vw,44px)] italic leading-snug text-green"
        >
          If we miss by more than 20%, you receive a 50% credit or partial
          refund within 14 days.
        </motion.blockquote>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {guaranteeCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#e5e5e5] p-8"
            >
              <h3 className="font-body text-[15px] font-medium text-near-black">
                {card.title}
              </h3>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-near-black/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] text-near-black">
            Ready to apply?
          </h2>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-full bg-green px-8 py-3.5 font-body text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Apply for a discovery call →
          </Link>
        </div>
      </div>
    </section>
  );
}
