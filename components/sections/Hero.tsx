"use client";

import { motion } from "framer-motion";

const scheduleData = [
  {
    tail: "N172SP",
    blocks: [
      { label: "Lesson · J.Martinez", start: 1, span: 2, color: "bg-green-600" },
      { label: "Lesson · J.Park", start: 5, span: 2, color: "bg-green-600" },
    ],
  },
  {
    tail: "N34821",
    blocks: [
      { label: "Rental · R.Chen", start: 2, span: 2, color: "bg-blue-600" },
    ],
  },
  {
    tail: "N8846X",
    blocks: [
      { label: "Checkride", start: 4, span: 2, color: "bg-purple-600" },
    ],
  },
  {
    tail: "N5541W",
    blocks: [
      { label: "100hr Maint.", start: 2, span: 2, color: "bg-orange-600" },
    ],
  },
];

const instructors = [
  { name: "CFI Smith", status: "green", label: "Active" },
  { name: "CFI Jones", status: "amber", label: "Exp 14d" },
  { name: "CFI Park", status: "green", label: "Active" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#011830] py-[160px]">
      {/* Animated background orbs */}
      <div
        className="hero-orb-1 absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full opacity-[0.14]"
        style={{ background: "radial-gradient(circle, #07BCE7 0%, transparent 70%)" }}
      />
      <div
        className="hero-orb-2 absolute bottom-20 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.18]"
        style={{ background: "radial-gradient(circle, #0941C4 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-20">
        {/* Left column — copy */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease }}
            className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Aviation Operations Platform
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease }}
            className="font-heading text-6xl font-extrabold leading-[1.0] tracking-[-0.03em] text-white md:text-7xl lg:text-8xl"
          >
            Your Co-Pilot for{" "}
            <span className="brand-gradient-text">Smarter Operations</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
            className="max-w-xl text-base leading-[1.7] text-white/65 md:text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            SkySuite brings scheduling, fleet management, maintenance tracking, and
            compliance into one modern platform — built specifically for flight
            schools and flying clubs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#early-access"
              className="brand-gradient rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ boxShadow: "0 0 24px rgba(7,188,231,0.4)" }}
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See It In Action
            </a>
          </motion.div>

          {/* Trust line — muted, lower */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease }}
            className="mt-10 text-xs text-slate-400"
          >
            Part 61 &amp; 141 Ready &bull; FAA Audit Defensible &bull; Zero Setup Headaches
          </motion.p>
        </div>

        {/* Right column — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease }}
          className="relative flex-1"
        >
          {/* Sky Blue radial glow behind dashboard */}
          <div
            className="absolute left-1/2 top-1/2 -z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(7,188,231,0.4) 0%, transparent 70%)",
            }}
          />

          {/* Device frame with float animation */}
          <div className="animate-float relative z-10 rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 rounded-t-xl bg-[#0d2847] px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span className="ml-2 text-xs text-slate-400">
                Schedule — This Week
              </span>
            </div>

            <div className="flex">
              {/* Schedule grid */}
              <div className="flex-1 p-3">
                {/* Day selector */}
                <div className="mb-3 flex gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                    <span
                      key={d}
                      className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                        i === 1
                          ? "bg-white/10 text-white"
                          : "text-slate-500"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Time headers */}
                <div className="mb-2 flex gap-1 pl-16">
                  {["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"].map(
                    (t) => (
                      <div
                        key={t}
                        className="flex-1 text-center text-[9px] text-slate-500"
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>

                {/* Aircraft rows */}
                {scheduleData.map((row) => (
                  <div key={row.tail} className="mb-1.5 flex items-center gap-1">
                    <span className="w-16 text-right text-[10px] font-medium text-slate-300">
                      {row.tail}
                    </span>
                    <div className="relative flex flex-1 gap-0.5">
                      {Array.from({ length: 11 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-7 flex-1 rounded-sm bg-white/5"
                        />
                      ))}
                      {row.blocks.map((b) => (
                        <div
                          key={b.label + b.start}
                          className={`absolute top-0 h-7 rounded-md px-1.5 text-[8px] font-medium leading-7 text-white ${b.color}`}
                          style={{
                            left: `${(b.start / 11) * 100}%`,
                            width: `${(b.span / 11) * 100}%`,
                          }}
                        >
                          {b.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instructor sidebar */}
              <div className="w-36 border-l border-white/10 p-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Instructor Currency
                </p>
                {instructors.map((inst) => (
                  <div key={inst.name} className="mb-1.5 flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        inst.status === "green"
                          ? "bg-green-400 animate-status-pulse"
                          : "bg-amber-400 animate-status-pulse"
                      }`}
                    />
                    <span className="text-[10px] text-slate-300">
                      {inst.name}
                    </span>
                    <span
                      className={`text-[9px] ${
                        inst.status === "green"
                          ? "text-green-400"
                          : "text-amber-400"
                      }`}
                    >
                      {inst.label}
                    </span>
                  </div>
                ))}
                <div className="mt-3 flex items-center gap-1 rounded-md bg-green-600/20 px-2 py-1">
                  <span className="text-[10px] text-green-400">&#10003; Dispatch Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
