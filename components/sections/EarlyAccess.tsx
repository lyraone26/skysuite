"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, CheckCircle2 } from "lucide-react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="bg-[#011830] py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <Plane className="h-7 w-7" />
          </div>

          {!submitted ? (
            <>
              <div className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
                <span className="h-px w-6 bg-[#07BCE7]/40" />
                Early Access
                <span className="h-px w-6 bg-[#07BCE7]/40" />
              </div>
              <h2 className="mt-6 mb-3 font-heading text-3xl font-bold text-white">
                Be first in the pattern.
              </h2>
              <p className="mb-6 text-base leading-[1.7] text-white/65">
                Join the limited beta cohort. Early members lock in founder pricing
                before our public launch.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="Your work email"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  />
                  {error && <p className="mt-1 text-left text-xs text-red-400">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="brand-gradient w-full rounded-lg py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  style={{ boxShadow: "0 0 24px rgba(7,188,231,0.4)" }}
                >
                  Request Early Access
                </button>
              </form>
              <p className="mt-4 text-xs text-slate-500">
                Founder pricing guaranteed &middot; 30-day free trial &middot; No credit card
              </p>
            </>
          ) : (
            <div className="space-y-3">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
              <h3 className="font-heading text-xl font-bold text-white">You&apos;re in the pattern</h3>
              <p className="text-base text-white/65">We&apos;ll be in touch shortly with your beta access details.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
