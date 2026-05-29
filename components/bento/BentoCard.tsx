"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`overflow-hidden rounded-[20px] transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-card ${className}`}
    >
      {children}
    </motion.article>
  );
}
