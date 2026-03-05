"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Roger AI", href: "#roger" },
  { label: "Why SkySuite", href: "#why-skysuite" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const scrolled = useTransform(scrollY, [0, 80], [0, 1]);
  const unscrolled = useTransform(scrollY, [0, 80], [1, 0]);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <motion.div style={{ opacity: scrolled }}>
            <Image
              src="/brand/Logo-15.png"
              alt="SkySuite - Flight operations, finally intelligent."
              width={160}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </motion.div>
          <motion.div style={{ opacity: unscrolled }} className="absolute">
            <Image
              src="/brand/Logo-07.png"
              alt="SkySuite - Flight operations, finally intelligent."
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
          className="hidden brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-block"
        >
          Get Early Access
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#011830] lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#early-access"
                onClick={() => setMobileOpen(false)}
                className="brand-gradient mt-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
