"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, PlaneTakeoff } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "Flight Schools",
    tagline: "Built around the way you train.",
    desc: "Scheduling, CFI management, compliance tracking, and billing — integrated so your instructors spend time teaching, not doing paperwork.",
  },
  {
    icon: Users,
    title: "Flight Clubs",
    tagline: "Every member flies. Every cost lands fairly.",
    desc: "Utilization tracking, member management, maintenance visibility, and automated billing so the club runs itself.",
  },
  {
    icon: PlaneTakeoff,
    title: "Aircraft Partnerships",
    tagline: "Shared ownership, zero shared headaches.",
    desc: "Booking, Hobbs tracking, maintenance scheduling, and cost splitting in one platform for everyone on the tail number.",
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

export default function WhoItsFor() {
  return (
    <section className="bg-[#F5F7F0] py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Built For You
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-navy-blue md:text-5xl">
            Built for Every Operator.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-10 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="brand-gradient mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-heading text-lg font-bold text-navy-blue">{p.title}</h3>
              <p className="mb-3 text-sm italic text-slate-500">{p.tagline}</p>
              <p className="text-base leading-[1.7] text-slate-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
