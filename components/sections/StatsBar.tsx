"use client";

import { motion, useSpring, useInView, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 130, suffix: "+", label: "API Endpoints" },
  { value: 5, suffix: "", label: "Role-Based Dashboard Views" },
  { value: 100, suffix: "%", label: "Records SHA-256 Hashed" },
  { value: 6, suffix: "+", label: "Import Sources" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 15 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <span ref={ref} className="brand-gradient-text font-heading text-5xl font-extrabold md:text-6xl">
      0{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-[#011830] py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
