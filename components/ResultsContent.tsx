"use client";

import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const placeholderCases = [
  {
    tag: "Attention Guarantee",
    title: "Sprint 01 — [Client Name]",
    guarantee: "[Defined metric agreed]",
    result: "[Measured outcome]",
    method: "[What was made and deployed]",
    meta: "8 weeks · UGC Sprint",
  },
  {
    tag: "Pipeline Guarantee",
    title: "Sprint 02 — [Client Name]",
    guarantee: "[Defined metric agreed]",
    result: "[Measured outcome]",
    method: "[What was made and deployed]",
    meta: "8 weeks · B2B Sprint",
  },
];

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#e5e5e5] py-5 first:border-t-0 first:pt-0">
      <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/60">
        {label}
      </p>
      <p className="mt-2 font-body text-[16px] font-light italic text-near-black/40">
        {value}
      </p>
    </div>
  );
}

export default function ResultsContent() {
  return (
    <>
      <section className="bg-off-white px-6 py-[120px]">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/60">
            § RESULTS
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(52px,5.5vw,80px)] font-bold leading-tight text-near-black">
            The guarantee, measured.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-[16px] font-light leading-relaxed text-near-black/60">
            Every sprint documented. Guarantee vs result vs method.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-20 grid gap-8 md:grid-cols-2"
          >
            {placeholderCases.map((study) => (
              <motion.article
                key={study.title}
                variants={fadeUp}
                className="rounded-[20px] border border-[#e5e5e5] bg-white p-10 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-card"
              >
                <span className="inline-block rounded-full bg-green px-3 py-1 font-body text-[11px] font-normal uppercase tracking-widest text-white">
                  {study.tag}
                </span>

                <h2 className="mt-6 font-display text-[28px] font-semibold text-near-black">
                  {study.title}
                </h2>

                <div className="mt-8">
                  <DataRow label="Guarantee" value={study.guarantee} />
                  <DataRow label="Result" value={study.result} />
                  <DataRow label="Method" value={study.method} />
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#e5e5e5] pt-6">
                  <p className="font-body text-[13px] font-light text-near-black/60">
                    {study.meta}
                  </p>
                  <span className="text-near-black/40" aria-hidden>
                    →
                  </span>
                </div>
              </motion.article>
            ))}

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center rounded-[20px] border border-dashed border-green p-10 md:col-span-2"
            >
              <p className="text-center font-display text-[22px] font-semibold text-green">
                Sprint in progress. Results published on completion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-green px-6 py-[120px]">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-display text-[clamp(28px,3.5vw,44px)] font-bold leading-snug text-white">
            Everyone is selling pieces of content. We sell the result those
            pieces are supposed to produce.
          </blockquote>
          <p className="mt-10 font-body text-[14px] font-light text-white/60">
            &copy; Hurdler. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
