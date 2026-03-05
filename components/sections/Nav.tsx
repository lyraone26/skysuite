"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why SkySuite", href: "#why-skysuite" },
  { label: "Roger AI", href: "#roger" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const scrolled = useTransform(scrollY, [0, 80], [0, 1]);
  const unscrolled = useTransform(scrollY, [0, 80], [1, 0]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on scroll past 50px
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      if (window.scrollY > 50) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Desktop glass background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 glass-nav hidden md:block"
      />

      {/* Mobile solid background — always visible so hamburger is readable */}
      <div className="absolute inset-0 bg-[#011830]/80 md:hidden" />

      {/* Top bar */}
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

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#early-access"
          className="hidden brand-gradient rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-block"
        >
          Get Early Access
        </a>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center justify-center rounded-md p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-40 overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="bg-[#011830]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block border-b border-white/10 px-6 py-4 text-base font-medium text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#early-access"
                onClick={handleLinkClick}
                className="brand-gradient block px-6 py-4 text-center font-semibold text-white"
              >
                Request Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
