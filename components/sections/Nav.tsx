"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Why SkySuite", href: "#why-skysuite" },
  { label: "Scheduling", href: "#scheduling" },
  { label: "Fleet and Maintenance", href: "#fleet" },
  { label: "CFI Portal", href: "#cfi-portal" },
  { label: "Features", href: "#features" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const scrolled = useTransform(scrollY, [0, 80], [0, 1]);
  const unscrolled = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 glass-nav"
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          {/* Logo-15: full-color horizontal lockup — scrolled/frosted state */}
          <motion.div style={{ opacity: scrolled }}>
            <Image
              src="/brand/Logo-15.png"
              alt="SkySuite"
              width={160}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </motion.div>
          {/* Logo-07: white reversed with tagline — initial/dark hero state */}
          <motion.div style={{ opacity: unscrolled }} className="absolute">
            <Image
              src="/brand/Logo-07.png"
              alt="SkySuite"
              width={160}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </motion.div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#early-access"
          className="brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Request Early Access
        </a>
      </div>
    </motion.nav>
  );
}
