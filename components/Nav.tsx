"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const navLinks = [
  { href: "/", label: "The Model" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/results", label: "Results" },
];

export default function Nav() {
  const pathname = usePathname();
  const startsOnLightBg = pathname === "/results";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(startsOnLightBg);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 40],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 40],
    ["rgba(229, 229, 229, 0)", "rgba(229, 229, 229, 1)"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(startsOnLightBg || latest > 20);
  });

  useEffect(() => {
    setScrolled(startsOnLightBg || window.scrollY > 20);
  }, [startsOnLightBg, pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);
  const useDarkNav = scrolled && !mobileOpen;

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 w-full"
      style={
        startsOnLightBg
          ? {
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              borderBottomColor: "rgba(229, 229, 229, 1)",
            }
          : {
              backgroundColor,
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              borderBottomColor: borderColor,
            }
      }
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className={`relative z-10 font-display text-[16px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
            useDarkNav ? "text-green" : "text-white"
          }`}
          onClick={closeMenu}
        >
          HURDLER
        </Link>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-[13px] tracking-[0.04em] transition-colors duration-200 hover:opacity-70 ${
                  useDarkNav ? "text-near-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/apply"
          className={`relative z-10 hidden rounded-full border px-5 py-[9px] font-body text-[13px] transition-all duration-200 ease-in-out md:inline-block ${
            useDarkNav
              ? "border-green text-green hover:bg-green hover:text-white"
              : "border-white text-white hover:bg-white hover:text-green"
          }`}
        >
          Apply →
        </Link>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-px w-5 transition-colors duration-200 ${
              mobileOpen || !useDarkNav ? "bg-white" : "bg-near-black"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-px w-5 transition-colors duration-200 ${
              mobileOpen || !useDarkNav ? "bg-white" : "bg-near-black"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-px w-5 transition-colors duration-200 ${
              mobileOpen || !useDarkNav ? "bg-white" : "bg-near-black"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-green md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-[32px] font-semibold text-white"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                <Link
                  href="/apply"
                  className="mt-4 inline-block rounded-full border border-white px-8 py-3 font-body text-[15px] text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-green"
                  onClick={closeMenu}
                >
                  Apply →
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
