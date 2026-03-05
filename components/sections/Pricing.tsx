"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  subtext: string;
  badge?: string;
  target: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    subtext: "+ Stripe processing fees",
    target: "Small clubs and rental ops getting started",
    features: [
      "Up to 3 aircraft",
      "Scheduling",
      "Basic fleet tracking",
      "Member management",
      "Mobile app",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Operations",
    price: "$12",
    subtext: "Billed monthly",
    badge: "Most Popular",
    target: "Flight schools and active clubs",
    features: [
      "Everything in Starter, plus:",
      "Unlimited aircraft",
      "CFI Portal + Part 61/141",
      "Maintenance tracking",
      "Billing + Stripe integration",
      "Roger AI assistant",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtext: "Volume pricing available",
    target: "Multi-location chains and large FBOs",
    features: [
      "Everything in Operations, plus:",
      "Multi-location management",
      "Custom RBAC",
      "SLA guarantee",
      "Dedicated onboarding",
      "White-label option",
      "API access",
    ],
    cta: "Contact Us",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Pricing() {
  return (
    <section className="bg-[#011830] py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            <span className="h-px w-6 bg-[#07BCE7]/40" />
            Pricing
            <span className="h-px w-6 bg-[#07BCE7]/40" />
          </div>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            Simple pricing that scales with your operation.
          </h2>
          <p className="mt-4 text-base text-white/65">
            Per-aircraft subscription. No surprises.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 ${
                plan.featured
                  ? "border-transparent"
                  : "border-white/10 bg-white/5"
              }`}
              style={
                plan.featured
                  ? {
                      backgroundImage:
                        "linear-gradient(#011830, #011830), linear-gradient(135deg, #07BCE7, #0941C4)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
            >
              {plan.badge && (
                <span className="brand-gradient-text mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em]">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.price === "$12" && (
                  <span className="text-sm text-slate-400">/ aircraft / mo</span>
                )}
              </div>
              <p className="mt-1 text-xs text-slate-500">{plan.subtext}</p>
              <p className="mt-4 text-sm text-white/65">{plan.target}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    <span className="text-sm text-white/80">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#early-access"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.featured
                    ? "brand-gradient text-white"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
                style={plan.featured ? { boxShadow: "0 0 24px rgba(7,188,231,0.4)" } : undefined}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          All plans include a 30-day free trial. No credit card required.
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">
          <a href="#early-access" className="underline hover:text-white/60">
            Standalone CFI pricing available — ask us.
          </a>
        </p>
      </div>
    </section>
  );
}
