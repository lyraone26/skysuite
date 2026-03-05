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

const bullets = [
  "Natural language input: describe your trip, get a complete plan.",
  "Aircraft recommendation based on checkout status, range, W&B, and cost.",
  "True cost estimation including fuel, hourly rate, and maintenance reserves.",
  "Route weather assessment with VFR/IFR indicators along the full route.",
];

export default function SpotlightFlightPlanner() {
  return (
    <section className="bg-[#F5F7F0] py-[80px] md:py-[120px] lg:py-[160px]">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* UI Panel LEFT */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-h-[400px] overflow-hidden lg:max-h-none"
        >
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900 p-6 shadow-2xl">
            {/* Input */}
            <div className="mb-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm text-white/80">I want to fly to Oshkosh</span>
            </div>

            {/* Result card */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Route map (CSS-drawn) */}
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative flex w-full items-center justify-between px-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-[#07BCE7] bg-[#07BCE7]/30" />
                      <span className="mt-1 text-[10px] font-medium text-slate-300">KXYZ</span>
                    </div>
                    <svg className="absolute left-8 right-8 top-1.5 h-4 w-auto" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path
                        d="M0,15 Q100,-10 200,15"
                        fill="none"
                        stroke="#07BCE7"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        opacity="0.6"
                      />
                    </svg>
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-[#0941C4] bg-[#0941C4]/30" />
                      <span className="mt-1 text-[10px] font-medium text-slate-300">KOSH</span>
                    </div>
                  </div>
                </div>

                {/* Details stack */}
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Aircraft</span>
                    <span className="font-medium text-white">N172SP SR20 <span className="text-[9px] text-slate-500">(Best match)</span></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Route</span>
                    <span className="text-white">KXYZ &rarr; KOSH, 312nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Fuel stops</span>
                    <span className="text-white">1 recommended</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. cost</span>
                    <span className="font-medium text-green-400">$487 (wet)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Weather</span>
                    <span className="font-medium text-green-400">VFR along route</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-lg border border-white/20 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
                  Save Plan
                </button>
                <button className="brand-gradient flex-1 rounded-lg py-2 text-xs font-semibold text-white">
                  Book Now
                </button>
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
            AI Flight Planner
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-navy-blue md:text-5xl">
            Tell us where you want to go. We&apos;ll handle the rest.
          </h2>
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
