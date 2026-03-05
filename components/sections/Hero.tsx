"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const scheduleData = [
  {
    tail: "N172SP",
    blocks: [
      { label: "Lesson", start: 1, span: 2, color: "bg-green-100 text-green-800" },
      { label: "Rental", start: 4, span: 1, color: "bg-blue-100 text-blue-800" },
    ],
  },
  {
    tail: "N34821",
    blocks: [
      { label: "Checkride", start: 2, span: 2, color: "bg-purple-100 text-purple-800" },
      { label: "Lesson", start: 5, span: 2, color: "bg-green-100 text-green-800" },
    ],
  },
  {
    tail: "N8846X",
    blocks: [
      { label: "Maint.", start: 0, span: 3, color: "bg-orange-100 text-orange-800" },
    ],
  },
];

const instructors = [
  { name: "CFI Smith", status: "green" },
  { name: "CFI Jones", status: "amber" },
  { name: "CFI Park", status: "green" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#022C55] pt-24 pb-16">
      {/* Background orbs */}
      <div className="hero-orb-1 absolute top-20 left-1/4 h-96 w-96 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #07BCE7 0%, transparent 70%)" }} />
      <div className="hero-orb-2 absolute bottom-20 right-1/4 h-80 w-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0941C4 0%, transparent 70%)" }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* Left column */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-block rounded-full border border-sky-blue/30 bg-sky-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-blue">
              NEW — Now in Beta
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Your Co-Pilot for{" "}
            <span className="brand-gradient-text">Smarter Operations</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="max-w-xl text-lg text-slate-300">
            SkySuite brings scheduling, fleet management, maintenance tracking, and billing into one modern platform built specifically for flight schools and flying clubs.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#early-access" className="brand-gradient rounded-lg px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
              Get Early Access
            </a>
            <a href="#features" className="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              See It In Action
            </a>
          </motion.div>

          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="text-xs text-slate-400">
            Part 61 &amp; 141 Ready &bull; FAA Audit Defensible &bull; Zero Setup Headaches
          </motion.p>
        </div>

        {/* Right column — dashboard mockup */}
        <motion.div
          initial={{ rotateX: 8, rotateY: -8, scale: 0.95, opacity: 0 }}
          animate={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.3 }}
          className="relative flex-1 perspective-[1200px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
            className="rounded-2xl border border-white/10 bg-[#0a1e3d] p-1 shadow-2xl"
          >
            {/* Dashboard header */}
            <div className="flex items-center gap-2 rounded-t-xl bg-[#0d2847] px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span className="ml-2 text-xs text-slate-400">Schedule — Today</span>
            </div>

            <div className="flex">
              {/* Schedule grid */}
              <div className="flex-1 p-3">
                {/* Time headers */}
                <div className="mb-2 flex gap-1 pl-16">
                  {["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM"].map((t) => (
                    <div key={t} className="flex-1 text-center text-[10px] text-slate-500">{t}</div>
                  ))}
                </div>
                {/* Aircraft rows */}
                {scheduleData.map((row) => (
                  <div key={row.tail} className="mb-1.5 flex items-center gap-1">
                    <span className="w-16 text-right text-[10px] font-medium text-slate-300">{row.tail}</span>
                    <div className="relative flex flex-1 gap-0.5">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="h-7 flex-1 rounded-sm bg-white/5" />
                      ))}
                      {row.blocks.map((b) => (
                        <div
                          key={b.label + b.start}
                          className={`absolute top-0 h-7 rounded-sm px-1 text-[9px] font-medium leading-7 ${b.color}`}
                          style={{
                            left: `${(b.start / 7) * 100}%`,
                            width: `${(b.span / 7) * 100}%`,
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
              <div className="w-32 border-l border-white/10 p-3">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Instructor Currency</p>
                {instructors.map((inst) => (
                  <div key={inst.name} className="mb-1.5 flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${inst.status === "green" ? "bg-green-400" : "bg-amber-400"}`} />
                    <span className="text-[10px] text-slate-300">{inst.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-4 top-8 glass-card flex items-center gap-2 px-3 py-2"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">&#10003;</div>
            <span className="text-[10px] font-medium text-navy-blue">Dispatch Compliant</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -left-4 bottom-8 glass-card flex items-center gap-2 px-3 py-2"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-blue text-[10px] text-white">&#9992;</div>
            <span className="text-[10px] font-medium text-navy-blue">Fleet: 8 Active</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
