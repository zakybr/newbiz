"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const slideFromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideFromRight: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const workWithItems = [
  "E-commerce or DTC brands with ≥$30k/month in ad spend",
  "Existing tracking infrastructure (pixel, CRM, UTMs)",
  "Growth-stage B2B SaaS targeting pipeline outcomes",
  "Founders or marketing directors with decision-making authority",
  "Brands whose product can genuinely support the guarantee claim",
];

const dontWorkWithItems = [
  "Brands with poor reviews or a broken product",
  "No tracking, no pixel, no measurement baseline",
  "Procurement-led or committee decision-making",
  "Clients who want to touch their own ad account during the sprint",
  "Anyone who needs to be convinced the guarantee is real",
];

export default function WhoWeWorkWithContent() {
  return (
    <>
      <section className="-mt-20 bg-green px-6 pb-[160px] pt-[calc(160px+5rem)]">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/50">
            § WHO WE WORK WITH
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(44px,5vw,72px)] font-bold leading-tight text-white">
            This engagement isn&apos;t for everyone. That&apos;s by design.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-[16px] font-light leading-relaxed text-white/60">
            We qualify hard before signing. The guarantee only works if the
            conditions for winning exist.
          </p>
        </div>
      </section>

      <section className="bg-off-white px-6 py-[120px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideFromLeft}
            >
              <h2 className="font-display text-[28px] font-semibold text-green">
                We work with
              </h2>
              <ul className="mt-8 space-y-5">
                {workWithItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-[16px] font-normal leading-relaxed text-near-black"
                  >
                    <span className="mt-0.5 shrink-0 text-green" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideFromRight}
            >
              <h2 className="font-display text-[28px] font-semibold text-near-black/50">
                We don&apos;t work with
              </h2>
              <ul className="mt-8 space-y-5">
                {dontWorkWithItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-[16px] font-normal leading-relaxed text-near-black/50"
                  >
                    <span className="mt-0.5 shrink-0" aria-hidden>
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mx-auto mt-24 max-w-3xl rounded-[20px] border border-green bg-[#f0f5f2] p-12 text-center">
            <p className="font-display text-[clamp(22px,2.5vw,28px)] font-bold leading-snug text-green">
              The fact that we turn clients away is proof the guarantee means
              something. Selectivity is a brand signal.
            </p>
            <Link
              href="/apply"
              className="mt-8 inline-block rounded-full bg-green px-8 py-3.5 font-body text-[15px] font-normal text-white transition-opacity hover:opacity-90"
            >
              Apply for a discovery call →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
