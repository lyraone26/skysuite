"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navCol1 = [
  { label: "Why SkySuite", href: "#why-skysuite" },
  { label: "Scheduling", href: "#scheduling" },
  { label: "Fleet and Maintenance", href: "#fleet" },
  { label: "CFI Portal", href: "#cfi-portal" },
  { label: "Features", href: "#features" },
];

const navCol2 = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
  { label: "About", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#011830] py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left: Logo + tagline */}
          <div>
            <Image
              src="/brand/Logo-07.png"
              alt="SkySuite"
              width={180}
              height={54}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-3 text-sm text-slate-400">
              Your Co-Pilot for Smarter Operations
            </p>
          </div>

          {/* Center: Two nav columns */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              {navCol1.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="space-y-3">
              {navCol2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Waitlist signup */}
          <div>
            <p className="mb-3 text-sm font-medium text-white">Join the waitlist</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@flightschool.com"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white/30"
              />
              <button
                type="submit"
                className="brand-gradient flex items-center justify-center rounded-lg px-3 py-2 text-white transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Centered tagline */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Built for the people who keep aviation moving.
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-400">&copy; 2025 SkySuite. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-white">Privacy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
