"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const sprintPhases = [
  {
    week: "WEEK 0",
    title: "Strategic Gate",
    description:
      "Qualify or walk. Audit tracking, reviews, decision-maker authority.",
    progress: 10,
  },
  {
    week: "WEEKS 1-2",
    title: "Discovery & Baseline",
    description: "Lock the metric. Verify tracking. Deliver brief.",
    progress: 30,
  },
  {
    week: "WEEKS 3-5",
    title: "Production",
    description: "UGC creators briefed and filmed. Three revision rounds max.",
    progress: 60,
  },
  {
    week: "WEEKS 6-8",
    title: "Deploy & Measure",
    description:
      "Ads live from creator handles. Weekly reporting against guaranteed metric.",
    progress: 90,
  },
  {
    week: "WEEK 8 END",
    title: "Sprint Debrief",
    description: "Hit or miss documented. Engine retainer proposed.",
    progress: 100,
  },
];

export default function SprintTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green px-[5vw] py-20"
    >
      <div className="flex items-center justify-between">
        <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/50">
          § THE SPRINT
        </p>
        <p className="font-display text-[20px] font-semibold text-white">
          8 weeks. One outcome.
        </p>
      </div>

      <div className="relative mt-10">
        <button
          type="button"
          aria-label="Scroll timeline left"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-green transition-opacity hover:opacity-90"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto px-12 py-1"
        >
          {sprintPhases.map((phase) => (
            <article
              key={phase.week}
              className="flex min-w-[260px] shrink-0 flex-col justify-between rounded-[20px] border border-white/10 bg-white/[0.08] p-7"
            >
              <div>
                <p className="font-body text-[11px] uppercase tracking-widest text-white/40">
                  {phase.week}
                </p>
                <h3 className="mt-3 font-display text-[20px] font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 font-body text-[13px] font-light leading-[1.5] text-white/[0.55]">
                  {phase.description}
                </p>
              </div>

              <div className="mt-8 h-0.5 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-white/80 transition-all duration-500"
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll timeline right"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-green transition-opacity hover:opacity-90"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.section>
  );
}
