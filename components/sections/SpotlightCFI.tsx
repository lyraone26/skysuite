"use client";

import { motion } from "framer-motion";
import { CheckCircle, Lock } from "lucide-react";

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const students = [
  {
    initials: "JM",
    color: "bg-blue-600",
    name: "James Martinez",
    track: "Part 141 \u00B7 Stage 2 \u00B7 PPL SEL",
    progress: 68,
    chips: [
      { label: "Solo Endorsed", color: "bg-green-600/20 text-green-400" },
      { label: "XC Complete", color: "bg-blue-600/20 text-blue-400" },
    ],
  },
  {
    initials: "RC",
    color: "bg-purple-600",
    name: "Rachel Chen",
    track: "Part 61 \u00B7 PPL SEL",
    progress: 34,
    chips: [
      { label: "Solo 14d", color: "bg-amber-600/20 text-amber-400" },
    ],
  },
  {
    initials: "TP",
    color: "bg-green-600",
    name: "Tyler Park",
    track: "Part 141 \u00B7 Stage 1 \u00B7 PPL SEL",
    progress: 15,
    chips: [
      { label: "Pre-Solo", color: "bg-slate-600/30 text-slate-400" },
    ],
  },
  {
    initials: "AS",
    color: "bg-orange-600",
    name: "Aisha Santos",
    track: "Part 141 \u00B7 Stage 3 \u00B7 IR",
    progress: 82,
    chips: [
      { label: "Stage 3 Complete", color: "bg-green-600/20 text-green-400" },
      { label: "IR Approaches", color: "bg-purple-600/20 text-purple-400" },
    ],
  },
];

const bullets = [
  "Part 61 and 141 on enforced separate logic paths.",
  "Solo dispatch hard-blocked without valid 61.87 endorsement.",
  "Stage checks require authorized check instructor.",
  "Immutable records with SHA-256 hashing.",
  "One-click FAA Audit Mode.",
];

export default function SpotlightCFI() {
  return (
    <section id="cfi-portal" className="bg-[#F5F7F0] py-[160px]">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* UI Panel LEFT */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900 p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Student Roster</span>
              <div className="flex items-center gap-1.5 rounded-full bg-green-600/20 px-2.5 py-1">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-status-pulse" />
                <span className="text-[10px] font-medium text-green-400">Audit Ready</span>
              </div>
            </div>

            {/* Student rows */}
            <div className="space-y-3">
              {students.map((s) => (
                <div key={s.initials} className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${s.color}`}>
                    {s.initials}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-white">{s.name}</span>
                      <span className="text-[9px] text-slate-400">{s.track}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-white/10">
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #07BCE7, #0941C4)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        />
                      </div>
                      <span className="text-[9px] text-slate-400">{s.progress}%</span>
                    </div>

                    {/* Chips */}
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {s.chips.map((chip) => (
                        <span
                          key={chip.label}
                          className={`rounded-md px-2 py-0.5 text-[9px] font-medium ${chip.color}`}
                        >
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Audit Mode button */}
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-medium text-slate-400 transition-colors hover:bg-white/10">
              <Lock className="h-3.5 w-3.5" />
              One-click FAA Audit Mode
            </button>
          </div>
        </motion.div>

        {/* Copy RIGHT */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            CFI Portal
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-navy-blue md:text-5xl">
            The first platform built for the Chief Instructor.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-slate-700">
            Part 61 and 141 separate logic paths. Hard-blocked solo dispatch without
            proper endorsements. Immutable records for every training event. Built for
            the people who carry the weight of compliance on their shoulders.
          </p>
          <ul className="mt-10 space-y-4">
            {bullets.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-base leading-[1.7] text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-slate-500">
            SkySuite surfaces the information your team needs. The decisions stay with your people.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
