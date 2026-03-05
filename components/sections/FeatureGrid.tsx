"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Plane,
  Wrench,
  GraduationCap,
  CreditCard,
  UserPlus,
  BarChart3,
  Cloud,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    desc: "Drag-and-drop booking with real-time conflict detection and automatic dispatch compliance enforcement.",
    featured: true,
  },
  {
    icon: Plane,
    title: "Fleet Management",
    desc: "Aircraft profiles, Hobbs and Tach tracking, AI Health Score (0-100), and engine monitor dashboards in one view.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    desc: "Work orders, inspection schedules, squawk management, and AD compliance tracked end to end.",
  },
  {
    icon: GraduationCap,
    title: "CFI Portal",
    desc: "Endorsement management, student rosters, Part 61 and 141 compliance, and one-click FAA Audit Mode.",
    featured: true,
  },
  {
    icon: CreditCard,
    title: "Billing and Payments",
    desc: "Automated billing with Stripe, wet and dry rates, instructor fees, and stage check billing.",
  },
  {
    icon: UserPlus,
    title: "Pilot Onboarding",
    desc: "Member applications, document collection, checkout workflows, and role assignment in one flow.",
  },
  {
    icon: BarChart3,
    title: "Insights and Analytics",
    desc: "Utilization reporting, revenue gap analysis, compliance scoring, and instructor performance dashboards.",
  },
  {
    icon: Cloud,
    title: "Live Weather",
    desc: "METAR and TAF display with VFR, MVFR, IFR, and LIFR indicators surfaced at dispatch.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-Based Dashboards",
    desc: "Tailored views for pilots, instructors, dispatchers, admins, and maintenance personnel.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-[#011830] py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Platform Overview
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            One Platform. Every Role. Every Workflow.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-white/65">
            Nine integrated modules purpose-built for aviation operations.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl border bg-white/5 p-10 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-[rgba(7,188,231,0.3)] hover:shadow-lg ${
                f.featured ? "border-transparent" : "border-white/10"
              }`}
              style={
                f.featured
                  ? {
                      backgroundImage:
                        "linear-gradient(#011830, #011830), linear-gradient(135deg, #07BCE7, #0941C4)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      border: "1px solid transparent",
                    }
                  : undefined
              }
            >
              {f.featured && (
                <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#07BCE7]">
                  Featured
                </span>
              )}
              <div className="brand-gradient inline-flex rounded-xl p-3 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-base leading-[1.7] text-white/65">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
