"use client";

import { motion } from "framer-motion";
import { XCircle, CalendarCheck, Plane, ShieldCheck } from "lucide-react";

const painPoints = [
  "Scheduling tools that don\u2019t talk to each other forces staff to manually cross-check aircraft, instructors, and students.",
  "Idle aircraft drain fixed costs while visibility gaps make it impossible to act.",
  "Compliance gaps only surface at the worst time: during an audit or an incident.",
];

const solutions = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    desc: "Real-time conflict detection, drag-and-drop booking, automatic dispatch compliance.",
  },
  {
    icon: Plane,
    title: "Fleet Intelligence",
    desc: "Utilization tracking, maintenance countdowns, squawk management from one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Engine",
    desc: "Part 61 & 141 logic enforced at dispatch. Immutable records. One-click FAA Audit Mode.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSolution() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold text-navy-blue md:text-4xl"
        >
          Why operators switch to SkySuite
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pain points */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl bg-navy-blue/5 p-8"
          >
            <h3 className="mb-6 font-heading text-xl font-semibold text-navy-blue">
              The way aviation operations work today
            </h3>
            <div className="space-y-5">
              {painPoints.map((point, i) => (
                <div key={i} className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <div className="space-y-4">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex gap-4 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full brand-gradient text-white">
                  <sol.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-heading text-base font-semibold text-navy-blue">{sol.title}</h4>
                  <p className="text-sm text-slate-600">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
