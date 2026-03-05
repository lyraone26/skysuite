"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 9, suffix: "", label: "Integrated Modules" },
  { value: 14, suffix: "", label: "Compliance Hard Gates" },
  { value: 100, suffix: "%", label: "Records Cryptographically Hashed" },
  { value: 0, suffix: "", label: "Minutes of Audit Prep" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (value === 0) { setCount(0); return; }
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="brand-gradient-text font-heading text-5xl font-extrabold md:text-6xl">
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-[#022C55] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            {/* Glow behind number */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #07BCE7 0%, transparent 70%)" }} />
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
