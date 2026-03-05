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
    <section id="early-access" className="bg-cream py-20">
      <div className="mx-auto max-w-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-elevated p-10 text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full brand-gradient text-white">
            <Plane className="h-7 w-7" />
          </div>

          {!submitted ? (
            <>
              <h2 className="mb-3 font-heading text-2xl font-bold text-navy-blue">Be first in the pattern</h2>
              <p className="mb-6 text-sm text-slate-600">
                Join the limited beta cohort. We are onboarding a select group of flight schools and clubs before our public launch.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="Your work email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20"
                  />
                  {error && <p className="mt-1 text-left text-xs text-red-500">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="brand-gradient w-full rounded-lg py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Request Early Access
                </button>
              </form>
              <p className="mt-4 text-xs text-slate-400">
                Limited beta cohort. No credit card required.
              </p>
            </>
          ) : (
            <div className="space-y-3">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
              <h3 className="font-heading text-xl font-bold text-navy-blue">You&apos;re in the pattern</h3>
              <p className="text-sm text-slate-600">We&apos;ll be in touch shortly with your beta access details.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
