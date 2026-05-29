"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const headlineLines = [
  { text: "We guarantee" },
  { text: "the ", italic: "result." },
];

const tickerText =
  "SPRINT · $12–18K FIXED · 8 WEEKS · OUTCOME CONTRACTED · RISK ON US · SPRINT ·";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="-mt-20 bg-green px-[5vw] pb-20 pt-[160px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <p className="font-body text-[11px] font-light uppercase tracking-[0.14em] text-white/50">
          OUTCOME-CONTRACTED CONTENT ©
        </p>
        <p className="font-body text-[11px] font-light text-white/50">
          EST. {currentYear}
        </p>
      </motion.div>

      <h1 className="mt-10 font-display text-[clamp(72px,10vw,140px)] font-extrabold leading-[0.95] tracking-[-0.02em] text-white">
        {headlineLines.map((line, index) => (
          <motion.span
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            className="block"
          >
            {line.text}
            {line.italic ? <em className="italic">{line.italic}</em> : null}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
      >
        <p className="max-w-[360px] font-body text-[15px] font-light leading-[1.6] text-white/[0.65]">
          Everyone sells content. We sell what it&apos;s supposed to produce —
          then put our fee on the line.
        </p>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
          <Link
            href="/apply"
            className="inline-block shrink-0 rounded-full bg-white px-7 py-3.5 font-body text-[14px] font-normal text-green"
          >
            Apply for a discovery call →
          </Link>
        </motion.div>
      </motion.div>

      <div className="mt-16 border-t border-white/15">
        <div className="overflow-hidden py-3">
          <div className="animate-ticker flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                aria-hidden={copy === 1}
                className="shrink-0 pr-8 font-body text-[11px] uppercase tracking-[0.1em] text-white/[0.35]"
              >
                {tickerText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
