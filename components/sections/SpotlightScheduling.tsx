"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const scheduleRows = [
  {
    tail: "N172SP",
    blocks: [
      { label: "J.Martinez", start: 1, span: 2, color: "bg-green-600" },
      { label: "J.Park", start: 6, span: 2, color: "bg-green-600" },
    ],
  },
  {
    tail: "N34821",
    blocks: [
      { label: "Self/R.Chen", start: 2, span: 2, color: "bg-blue-600" },
    ],
  },
  {
    tail: "N8846X",
    blocks: [
      { label: "Checkride", start: 5, span: 2, color: "bg-purple-600" },
    ],
  },
  {
    tail: "N5541W",
    blocks: [
      { label: "100hr", start: 2, span: 2, color: "bg-orange-600" },
    ],
  },
];

const instructors = [
  { name: "CFI Smith", status: "green", label: "Active" },
  { name: "CFI Jones", status: "amber", label: "Exp 14d" },
  { name: "CFI Park", status: "green", label: "Active" },
];

const bullets = [
  "Drag-and-drop scheduling with instant availability checks across aircraft, instructors, and students.",
  "Automatic instructor currency and endorsement validation at dispatch.",
  "Dispatch compliance hard-gates prevent unauthorized flights before they happen.",
];

export default function SpotlightScheduling() {
  return (
    <section id="scheduling" className="bg-[#F5F7F0] py-[160px]">
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
            <div className="flex items-center justify-between rounded-t-xl bg-[#0d2847] px-4 py-2.5">
              <span className="text-xs font-semibold text-white">Schedule — This Week</span>
              <div className="flex gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                  <span
                    key={d}
                    className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                      i === 1 ? "bg-white/10 text-white" : "text-slate-400"
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="p-3">
              {/* Time headers */}
              <div className="mb-2 flex gap-1 pl-16">
                {["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"].map((t) => (
                  <div key={t} className="flex-1 text-center text-[9px] text-slate-400">{t}</div>
                ))}
              </div>

              {/* Aircraft rows */}
              {scheduleRows.map((row) => (
                <div key={row.tail} className="mb-1.5 flex items-center gap-1">
                  <span className="w-16 text-right text-[10px] font-medium text-slate-300">{row.tail}</span>
                  <div className="relative flex flex-1 gap-0.5">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div key={i} className="h-7 flex-1 rounded-sm bg-white/5" />
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

            {/* Dispatch compliance sidebar */}
            <div className="border-t border-white/10 p-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Instructor Currency
              </p>
              <div className="flex flex-wrap gap-3">
                {instructors.map((inst) => (
                  <div key={inst.name} className="flex items-center gap-1.5">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        inst.status === "green" ? "bg-green-400 animate-status-pulse" : "bg-amber-400 animate-status-pulse"
                      }`}
                    />
                    <span className="text-[10px] text-slate-300">{inst.name}</span>
                    <span className={`text-[9px] ${inst.status === "green" ? "text-green-400" : "text-amber-400"}`}>
                      {inst.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-green-600/20 px-2 py-1">
                <span className="text-[10px] text-green-400">&#10003; Dispatch Compliant</span>
              </div>
            </div>
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
            Smart Scheduling
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-navy-blue md:text-5xl">
            Frictionless booking. Unbreakable compliance.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-slate-700">
            Real-time conflict detection across aircraft, instructors, and students.
            Dispatch compliance is enforced automatically — so nothing leaves the
            ground without the right people, paperwork, and aircraft in order.
          </p>
          <ul className="mt-10 space-y-4">
            {bullets.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-base leading-[1.7] text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
