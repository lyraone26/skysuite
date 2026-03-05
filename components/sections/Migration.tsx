"use client";

import { motion } from "framer-motion";
import { Upload, Database, Shield } from "lucide-react";

const cards = [
  {
    icon: Upload,
    title: "ScheduleMaster Import",
    desc: "Members, aircraft, schedules, and maintenance history imported automatically. Your team wakes up Monday in SkySuite.",
  },
  {
    icon: Database,
    title: "Engine Data",
    desc: "Import G1000 engine logs and flight records. Your maintenance history becomes AI training data.",
  },
  {
    icon: Shield,
    title: "Zero Disruption",
    desc: "Your operation doesn\u2019t stop. We migrate in the background and you flip the switch when ready.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Migration() {
  return (
    <section className="bg-[#F5F7F0] py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Migration
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-navy-blue md:text-5xl">
            Switch in a weekend, not a quarter.
          </h2>
          <p className="mt-4 text-base text-slate-700">
            We import your data and make it smarter.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-10 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="brand-gradient mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold text-navy-blue">{card.title}</h3>
              <p className="text-base leading-[1.7] text-slate-700">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#early-access"
            className="inline-block rounded-lg border border-navy-blue/30 px-8 py-3 text-sm font-semibold text-navy-blue transition-colors hover:bg-navy-blue/5"
          >
            Start Your Migration
          </a>
        </div>
      </div>
    </section>
  );
}
