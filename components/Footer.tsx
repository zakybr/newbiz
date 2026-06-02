"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/model", label: "The Model" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/results", label: "Results" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-near-black px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-[24px] font-bold text-white"
            >
              HURDLER
            </Link>
            <p className="mt-3 font-body text-[13px] font-light text-white/40">
              Outcome-contracted content.
            </p>
          </div>

          <nav>
            <ul className="flex flex-col gap-3 md:items-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[13px] font-normal text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-body text-[11px] font-light text-white/30">
            &copy; 2025 Hurdler
          </p>
          <p className="font-body text-[11px] font-light text-white/30">
            Risk on us. Always.
          </p>
          <Link
            href="/apply"
            className="font-body text-[11px] font-normal text-white/70 transition-colors duration-200 ease-in-out hover:text-green"
          >
            Apply for a discovery call →
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
