"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#011830]">
      {/* Background photo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-cockpit.jpg"
          alt="SkySuite - Flight operations, finally intelligent."
          fill
          className="object-cover object-center"
          priority
        />
        {/* Main overlay: dark left, reveals aircraft right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(1,24,48,0.92) 0%, rgba(1,24,48,0.78) 45%, rgba(1,24,48,0.45) 75%, rgba(1,24,48,0.60) 100%)",
          }}
        />
        {/* Bottom fade to section bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to top, rgba(1,24,48,1) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* SVG grid texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(7,188,231,0.03)' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-[80px] pt-[140px] md:pb-[120px] md:pt-[200px] lg:items-center lg:pb-0 lg:pt-0">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease }}
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Aviation Operations Platform
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </motion.div>

          {/* H1 line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease }}
            className="font-heading text-5xl font-extrabold leading-[1.0] tracking-[-0.03em] text-white md:text-8xl"
          >
            Every Flight
          </motion.h1>

          {/* H1 line 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease }}
            className="font-heading text-5xl font-extrabold leading-[1.0] tracking-[-0.03em] md:text-8xl"
          >
            <span className="brand-gradient-text">Starts Here.</span>
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease }}
            className="max-w-lg text-base leading-[1.7] text-white/65 md:text-[18px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            SkySuite is the operating platform for flight schools, flying clubs,
            and aircraft partnerships — scheduling, compliance, fleet, and
            billing in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease }}
            className="flex flex-col items-start gap-4 pt-4 sm:flex-row"
          >
            <a
              href="#early-access"
              className="brand-gradient rounded-lg px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
              style={{ boxShadow: "0 0 32px rgba(7,188,231,0.35)" }}
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              See It In Action
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease }}
            className="pt-4 text-sm text-slate-400"
          >
            Part 61 &amp; 141 Ready &middot; FAA Audit Defensible &middot; Zero
            Setup Headaches
          </motion.p>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5, ease }}
            className="text-[13px] text-slate-500"
          >
            Trusted by operators managing 200+ aircraft across the US.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
