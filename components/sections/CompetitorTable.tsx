"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial";

interface Competitor {
  name: string;
  highlight?: boolean;
  cells: CellValue[];
}

const columns = ["Scheduling", "Fleet", "AI", "Maintenance", "Mobile", "Training"];

const competitors: Competitor[] = [
  { name: "Schedule Master", cells: ["yes", "no", "no", "no", "no", "partial"] },
  { name: "Flight Schedule Pro", cells: ["yes", "no", "no", "no", "partial", "no"] },
  { name: "Spreadsheets", cells: ["no", "no", "no", "no", "no", "no"] },
  { name: "SkySuite", highlight: true, cells: ["yes", "yes", "yes", "yes", "yes", "yes"] },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") return <CheckCircle2 className="mx-auto h-4 w-4 text-green-400" />;
  if (value === "partial") return <Minus className="mx-auto h-4 w-4 text-amber-400" />;
  return <XCircle className="mx-auto h-4 w-4 text-red-400/60" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function CompetitorTable() {
  return (
    <section className="bg-[#011830] py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Why SkySuite
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            The operations platform GA deserves.
          </h2>
          <p className="mt-4 text-base text-white/65">
            Built for operators who are done settling for legacy tools.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-7 bg-white/5 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Platform</span>
              {columns.map((col) => (
                <span key={col} className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {col}
                </span>
              ))}
            </div>
            {/* Rows */}
            {competitors.map((c) => (
              <div
                key={c.name}
                className={`grid grid-cols-7 items-center px-4 py-3 ${
                  c.highlight
                    ? "border border-transparent text-white"
                    : "bg-slate-700/20 text-slate-400"
                }`}
                style={
                  c.highlight
                    ? {
                        backgroundImage:
                          "linear-gradient(#011830, #011830), linear-gradient(135deg, #07BCE7, #0941C4)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : undefined
                }
              >
                <span className={`text-sm font-medium ${c.highlight ? "text-white" : "text-slate-400"}`}>
                  {c.name}
                </span>
                {c.cells.map((cell, i) => (
                  <div key={columns[i]} className="text-center">
                    <CellIcon value={cell} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {competitors.map((c, ci) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className={`rounded-2xl p-5 ${
                c.highlight
                  ? "border border-transparent"
                  : "border border-white/10 bg-slate-700/20"
              }`}
              style={
                c.highlight
                  ? {
                      backgroundImage:
                        "linear-gradient(#011830, #011830), linear-gradient(135deg, #07BCE7, #0941C4)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
            >
              <h3 className={`mb-3 text-sm font-semibold ${c.highlight ? "text-white" : "text-slate-400"}`}>
                {c.name}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {c.cells.map((cell, i) => (
                  <div key={columns[i]} className="flex flex-col items-center gap-1">
                    <CellIcon value={cell} />
                    <span className="text-[9px] text-slate-500">{columns[i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          We didn&apos;t build another scheduler. We built the operating system.
        </p>
      </div>
    </section>
  );
}
