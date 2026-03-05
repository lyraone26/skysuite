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
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function FeatureGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-navy-blue md:text-4xl">
            Everything your operation needs
          </h2>
          <p className="mt-3 text-slate-500">
            Six modules working together so nothing falls through the cracks.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(7,188,231,0.15)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-navy-blue">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
