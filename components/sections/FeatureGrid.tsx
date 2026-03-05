"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Cloud,
  LayoutDashboard,
  Users,
  CalendarRange,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: CreditCard, title: "Billing & Payments", desc: "Automated billing with Stripe integration — wet and dry rates." },
  { icon: Cloud, title: "Live Weather", desc: "Integrated METAR and TAF display with VFR/IFR flight category indicators." },
  { icon: LayoutDashboard, title: "Role-Based Dashboards", desc: "Tailored views for pilots, instructors, dispatchers, and maintenance." },
  { icon: Users, title: "Admin & Member Management", desc: "Member onboarding, role configuration, and organizational settings." },
  { icon: CalendarRange, title: "Resource Booking", desc: "Aircraft, classrooms, simulators, and bookable resources." },
  { icon: Sparkles, title: "AI-Assisted Insights", desc: "Surface utilization gaps, compliance risks, and scheduling opportunities automatically." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-[#011830] py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            Platform Overview
          </p>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            One Platform. Every Role. Every Workflow.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-white/65">
            Six modules working together so nothing falls through the cracks.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-white">{f.title}</h3>
              <p className="text-base leading-[1.7] text-white/65">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
