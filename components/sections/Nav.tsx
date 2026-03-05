"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";

const navLinks = ["Features", "Pricing", "About"];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

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
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-navy-blue">
          <Plane className="h-6 w-6 text-sky-blue" />
          SKYSUITE
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy-blue"
            >
              {link}
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
