"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const suggestions = [
  { tail: "N172SP", status: "green", time: "Sat 9:00 AM", duration: "2.0h", label: "Available" },
  { tail: "N34821", status: "green", time: "Sat 10:30 AM", duration: "2.0h", label: "Available" },
  { tail: "N8846X", status: "amber", time: "Sat 9:00 AM", duration: "", label: "CFI Required" },
];

const bullets = [
  'Natural language booking: "Book me a 172 Saturday morning" becomes a confirmed reservation.',
  "Real-time conflict detection at the database level. Zero double-bookings, enforced.",
  "Cmd+K command palette with speech-to-text for hands-free operation.",
  "Role-aware results: pilots see available aircraft, dispatchers see the full board.",
  "Optimal time suggestions based on weather, instructor availability, and aircraft health.",
];

export default function SpotlightRoger() {
  return (
    <section className="bg-[#011830] py-[80px] md:py-[120px] lg:py-[160px]">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Copy LEFT */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Roger AI
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            Book a flight with your voice. Literally.
          </h2>
          <ul className="mt-10 space-y-4">
            {bullets.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                <span className="text-base leading-[1.7] text-white/65">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-slate-500">
            Roger is the AI layer built into every SkySuite workflow — not a chatbot bolted on.
          </p>
        </motion.div>

        {/* UI Panel RIGHT */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 max-h-[400px] overflow-hidden lg:order-2 lg:max-h-none"
        >
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900 p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm font-semibold text-white">Roger</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
            </div>

            {/* Input field */}
            <div className="mb-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm text-white/80"
              >
                Book me a 172 Saturday morning
              </motion.span>
            </div>

            {/* Suggestion cards */}
            <div className="space-y-2">
              {suggestions.map((s, i) => (
                <motion.div
                  key={s.tail}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        s.status === "green" ? "bg-green-400" : "bg-amber-400"
                      }`}
                    />
                    <span className="text-xs font-medium text-white">{s.tail}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{s.time}</span>
                  {s.duration && (
                    <span className="text-[11px] text-slate-400">{s.duration}</span>
                  )}
                  <span
                    className={`text-[10px] font-medium ${
                      s.status === "green" ? "text-green-400" : "text-amber-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Confirm button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.4 }}
              className="brand-gradient mt-4 w-full rounded-lg py-2.5 text-sm font-semibold text-white"
            >
              Confirm Booking
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
