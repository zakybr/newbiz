"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fieldClassName =
  "w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-body text-[15px] font-normal text-white placeholder:text-white/40 transition-[border-color] duration-200 ease-in-out focus:border-white/60 focus:outline-none";

const adSpendOptions = ["<$10k", "$10–30k", "$30–100k", ">$100k"];

const trackingOptions = [
  "Yes — fully set up",
  "Partially",
  "No",
];

export default function ApplyContent() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [adSpend, setAdSpend] = useState("");
  const [outcome, setOutcome] = useState("");
  const [tracking, setTracking] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="-mt-20 bg-green px-6 pb-[160px] pt-[calc(160px+5rem)]">
      <div className="mx-auto max-w-[640px] text-center">
        <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/50">
          § APPLY
        </p>

        <h1 className="mt-6 font-display text-[clamp(44px,5vw,68px)] font-bold leading-tight text-white">
          Tell us about your brand.
        </h1>

        <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-white/60">
          Discovery calls are 30 minutes. We qualify in the first ten. If
          it&apos;s not right, we&apos;ll tell you directly.
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-12 space-y-4 text-left"
        >
          <motion.input
            variants={fadeUp}
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClassName}
          />

          <motion.input
            variants={fadeUp}
            type="text"
            placeholder="Brand / company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={fieldClassName}
          />

          <motion.select
            variants={fadeUp}
            value={adSpend}
            onChange={(e) => setAdSpend(e.target.value)}
            className={`${fieldClassName} ${adSpend ? "text-white" : "text-white/40"}`}
          >
            <option value="" disabled className="bg-green text-white/40">
              Monthly ad spend
            </option>
            {adSpendOptions.map((option) => (
              <option key={option} value={option} className="bg-green text-white">
                {option}
              </option>
            ))}
          </motion.select>

          <motion.textarea
            variants={fadeUp}
            rows={4}
            placeholder="What outcome would you want to guarantee?"
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            className={`${fieldClassName} resize-none`}
          />

          <motion.select
            variants={fadeUp}
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            className={`${fieldClassName} ${tracking ? "text-white" : "text-white/40"}`}
          >
            <option value="" disabled className="bg-green text-white/40">
              Do you have existing tracking infrastructure? (pixel, CRM, UTMs)
            </option>
            {trackingOptions.map((option) => (
              <option key={option} value={option} className="bg-green text-white">
                {option}
              </option>
            ))}
          </motion.select>

          <motion.div variants={fadeUp} className="pt-4">
            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-white px-10 py-4 font-body text-[15px] font-normal text-green transition-colors hover:bg-white/95"
            >
              {submitted ? "Application received →" : "Submit application →"}
            </motion.button>

            <p className="mt-4 text-center font-body text-[12px] font-light text-white/40">
              We respond within 1 business day. If you don&apos;t qualify,
              we&apos;ll tell you why.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
