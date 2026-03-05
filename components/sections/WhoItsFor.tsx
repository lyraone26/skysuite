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
    desc: "Utilization tracking, member management, maintenance visibility, and automated billing so the club runs itself and your fixed costs are always covered.",
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
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function WhoItsFor() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold text-navy-blue md:text-4xl"
        >
          Built for every role in your operation
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full brand-gradient text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-heading text-lg font-bold text-navy-blue">{p.title}</h3>
              <p className="mb-3 text-sm italic text-slate-500">{p.tagline}</p>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
