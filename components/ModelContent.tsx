"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import SprintTimeline from "@/components/SprintTimeline";

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const guaranteeTypes = [
  {
    number: "01",
    title: "Attention Guarantee",
    points: [
      "Defined CTR threshold, hook rate, or video completion rate, set before the sprint starts.",
      "Content deployed via creator handles (Meta Partnership Ads / TikTok Spark Ads). Never from the brand's own account.",
    ],
  },
  {
    number: "02",
    title: "Brand Lift Guarantee",
    points: [
      "Measurable movement on aided recall or sentiment score.",
      "Measured via pre/post Pollfish survey panel, same 200-person demographic, same 3 questions.",
    ],
  },
  {
    number: "03",
    title: "Pipeline Guarantee",
    points: [
      "Defined MQL count at an agreed CPL, tracked via UTMs + CRM.",
      "MQL definition locked in the brief before the sprint starts. No retroactive changes.",
    ],
  },
];

const pricingTiers = [
  {
    name: "Sprint",
    price: "$12-18k fixed",
    duration: "8 weeks",
    description:
      "Discovery + production + deployment + measurement. Priced to prove the method. No one goes straight to retainer.",
    highlighted: true,
  },
  {
    name: "Engine Retainer",
    price: "$8-15k/month",
    duration: "6-month minimum",
    description: "Earned after the sprint proves the model works.",
    highlighted: false,
  },
];

const missClauses = [
  {
    clause: "Miss by ≤20%",
    outcome: "30-day free extension at agency cost.",
  },
  {
    clause: "Miss by >20%",
    outcome: "50% of sprint fee credited or refunded within 14 days.",
  },
  {
    clause: "Client-caused miss",
    outcome: "Guarantee voided, full fee due.",
  },
];

export default function ModelContent() {
  return (
    <>
      <section className="-mt-20 bg-green px-6 pb-[160px] pt-[calc(160px+5rem)]">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/50">
            § THE MODEL
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(44px,5vw,72px)] font-bold leading-tight text-white">
            The guarantee. The sprint. The risk model.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-[16px] font-light leading-relaxed text-white/60">
            Everything you need to understand how this works before you apply.
          </p>
        </div>
      </section>

      <section className="bg-off-white px-6 py-[120px]">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/50">
            THREE OUTCOMES. PICK ONE.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {guaranteeTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-[20px] bg-white p-8"
              >
                <p className="font-display text-[48px] font-bold leading-none text-green/15">
                  {type.number}
                </p>
                <h2 className="mt-4 font-display text-[20px] font-semibold text-near-black">
                  {type.title}
                </h2>
                <ul className="mt-5 space-y-4">
                  {type.points.map((point) => (
                    <li
                      key={point}
                      className="font-body text-[14px] font-light leading-relaxed text-near-black/60"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-[120px]">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/50">
            ONE ENTRY POINT
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[20px] border bg-white p-10 ${
                  tier.highlighted ? "border-green" : "border-near-black/10"
                }`}
              >
                <h2 className="font-display text-[24px] font-semibold text-near-black">
                  {tier.name}
                </h2>
                <p className="mt-4 font-display text-[32px] font-bold leading-none text-green">
                  {tier.price}
                </p>
                <p className="mt-2 font-body text-[13px] font-normal uppercase tracking-widest text-near-black/50">
                  {tier.duration}
                </p>
                <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-near-black/60">
                  {tier.description}
                </p>
              </div>
            ))}
          </motion.div>

          <p className="mt-8 font-body text-[13px] font-light text-near-black/40">
            Revenue share available at later stages. Discussed only after sprint
            completion.
          </p>
        </div>
      </section>

      <section className="bg-off-white px-6 py-[120px]">
        <div className="mx-auto max-w-4xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/50">
            THE MISS CLAUSE
          </p>
          <h2 className="mt-6 font-display text-[clamp(28px,3vw,40px)] font-bold leading-tight text-near-black">
            It&apos;s in the contract. Not the marketing.
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-12"
          >
            {missClauses.map((row) => (
              <div
                key={row.clause}
                className="grid gap-2 border-t border-near-black/10 py-6 first:border-t-0 first:pt-0 md:grid-cols-[280px_1fr] md:gap-8"
              >
                <p className="font-body text-[15px] font-light text-near-black/50">
                  {row.clause}
                </p>
                <p className="font-display text-[17px] font-semibold text-near-black">
                  {row.outcome}
                </p>
              </div>
            ))}
          </motion.div>

          <p className="mt-8 font-body text-[13px] font-light leading-relaxed text-near-black/40">
            Client-caused misses include: product issues, late assets, tracking
            not configured, brand crisis, or scope change after the brief is
            locked.
          </p>
        </div>
      </section>

      <SprintTimeline />

      <section className="bg-green px-6 py-[120px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight text-white">
            The sprint is the only entry point.
          </h2>
          <Link
            href="/apply"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 font-body text-[15px] font-normal text-green transition-opacity hover:opacity-90"
          >
            Apply for a discovery call →
          </Link>
        </div>
      </section>
    </>
  );
}
