"use client";

import { motion } from "framer-motion";

type Tier = "full" | "partial" | "basic" | "none";

interface Competitor {
  name: string;
  highlight?: boolean;
  cells: Tier[];
}

const columns = ["Scheduling", "Fleet", "AI", "Maintenance", "Mobile", "Training"];

const competitors: Competitor[] = [
  { name: "SkySuite", highlight: true, cells: ["full", "full", "full", "full", "full", "full"] },
  { name: "Schedule Master", cells: ["basic", "basic", "none", "basic", "basic", "none"] },
  { name: "Flight Circle", cells: ["basic", "basic", "none", "basic", "basic", "none"] },
  { name: "Flight Schedule Pro", cells: ["partial", "partial", "none", "partial", "partial", "partial"] },
  { name: "Spreadsheets", cells: ["none", "none", "none", "none", "none", "none"] },
];

const tierConfig = {
  full: {
    bars: [true, true, true, true],
    color: "#07BCE7",
    label: "Full",
    labelColor: "#07BCE7",
  },
  partial: {
    bars: [true, true, true, false],
    color: "rgba(255,150,50,0.65)",
    label: "Partial",
    labelColor: "rgba(255,150,50,0.75)",
  },
  basic: {
    bars: [true, true, false, false],
    color: "rgba(255,190,50,0.6)",
    label: "Basic",
    labelColor: "rgba(255,190,50,0.7)",
  },
  none: {
    bars: [],
    color: "",
    label: "None",
    labelColor: "rgba(255,255,255,0.2)",
  },
};

const barHeights = [6, 10, 14, 18];

function SignalBars({ tier }: { tier: Tier }) {
  const config = tierConfig[tier];

  if (tier === "none") {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex h-[18px] items-end">
          <div
            className="rounded-sm"
            style={{ width: 18, height: 2, background: "rgba(255,255,255,0.12)" }}
          />
        </div>
        <span className="text-[10px] font-medium" style={{ color: config.labelColor }}>
          {config.label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex items-end" style={{ gap: 3 }}>
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              width: 5,
              height: h,
              background: config.bars[i] ? config.color : "rgba(255,255,255,0.1)",
              boxShadow:
                tier === "full" && i === 3
                  ? "0 0 8px rgba(7,188,231,0.8)"
                  : undefined,
            }}
          />
        ))}
      </div>
      <span className="text-[10px] font-medium" style={{ color: config.labelColor }}>
        {config.label}
      </span>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function CompetitorTable() {
  return (
    <section className="bg-[#050f1c] py-[60px] md:py-[100px]">
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
          <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl">
            {/* Header */}
            <div className="grid grid-cols-7 border-b border-white/[0.06] px-4 py-3">
              <span className="pl-7 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white/30" style={{ width: 200 }}>
                Platform
              </span>
              {columns.map((col) => (
                <span key={col} className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/30">
                  {col}
                </span>
              ))}
            </div>

            {/* Rows */}
            {competitors.map((c, idx) => (
              <div
                key={c.name}
                className={`grid grid-cols-7 items-center transition-colors ${
                  c.highlight
                    ? "border-y border-[#07BCE7]/20 bg-[#07BCE7]/[0.04] hover:bg-[#07BCE7]/[0.07]"
                    : `hover:bg-white/[0.02] ${idx < competitors.length - 1 ? "border-b border-white/[0.04]" : ""}`
                }`}
              >
                <span
                  className={`pl-7 text-sm font-medium ${
                    c.highlight ? "text-white" : "text-white/55"
                  }`}
                  style={{
                    fontFamily: c.highlight ? "var(--font-montserrat, Montserrat, sans-serif)" : undefined,
                    fontWeight: c.highlight ? 700 : undefined,
                    fontSize: c.highlight ? 15 : undefined,
                  }}
                >
                  {c.name}
                </span>
                {c.cells.map((cell, i) => (
                  <div key={columns[i]} className="flex justify-center" style={{ padding: "18px 16px" }}>
                    <SignalBars tier={cell} />
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
                  ? "border border-[#07BCE7]/20 bg-[#07BCE7]/[0.04]"
                  : "border border-white/[0.06] bg-white/[0.03]"
              }`}
            >
              <h3
                className={`mb-4 text-sm font-semibold ${c.highlight ? "text-white" : "text-white/55"}`}
                style={{
                  fontFamily: c.highlight ? "var(--font-montserrat, Montserrat, sans-serif)" : undefined,
                  fontWeight: c.highlight ? 700 : undefined,
                }}
              >
                {c.name}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {c.cells.map((cell, i) => (
                  <div key={columns[i]} className="flex flex-col items-center gap-2">
                    <SignalBars tier={cell} />
                    <span className="text-[9px] text-white/30">{columns[i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-7">
          <div className="flex items-center gap-2">
            <SignalBars tier="full" />
            <span className="text-[11px] tracking-wide text-white/35">
              Full — purpose-built, compliance-grade
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SignalBars tier="partial" />
            <span className="text-[11px] tracking-wide text-white/35">
              Partial — limited capability
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SignalBars tier="basic" />
            <span className="text-[11px] tracking-wide text-white/35">
              Basic — present but inadequate
            </span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/25">
          We didn&apos;t build another scheduler. We built the operating system.
        </p>
      </div>
    </section>
  );
}
