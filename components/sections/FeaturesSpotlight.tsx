"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── Section A: Smart Scheduling ── */
function SchedulePanel() {
  const times = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM"];
  const rows = [
    { tail: "N172SP", blocks: [{ l: "Lesson", s: 0, w: 2, c: "bg-green-100 text-green-800" }, { l: "Rental", s: 3, w: 1, c: "bg-blue-100 text-blue-800" }] },
    { tail: "N34821", blocks: [{ l: "Checkride", s: 1, w: 2, c: "bg-purple-100 text-purple-800" }] },
    { tail: "N8846X", blocks: [{ l: "Lesson", s: 0, w: 1, c: "bg-green-100 text-green-800" }, { l: "Maint.", s: 4, w: 2, c: "bg-orange-100 text-orange-800" }] },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
      <div className="bg-[#022C55] px-4 py-2 text-xs font-semibold text-white">Schedule — Today</div>
      <div className="flex">
        <div className="flex-1 p-3">
          <div className="mb-2 flex gap-1 pl-14">
            {times.map((t) => <div key={t} className="flex-1 text-center text-[10px] text-slate-400">{t}</div>)}
          </div>
          {rows.map((r) => (
            <div key={r.tail} className="mb-1.5 flex items-center gap-1">
              <span className="w-14 text-right text-[10px] font-medium text-slate-600">{r.tail}</span>
              <div className="relative flex flex-1 gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-6 flex-1 rounded-sm bg-slate-50" />)}
                {r.blocks.map((b) => (
                  <div key={b.l + b.s} className={`absolute top-0 h-6 rounded-sm px-1 text-[9px] font-medium leading-6 ${b.c}`} style={{ left: `${(b.s / 6) * 100}%`, width: `${(b.w / 6) * 100}%` }}>{b.l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-28 border-l border-slate-100 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Currency</p>
          {[{ n: "CFI Smith", s: "bg-green-400" }, { n: "CFI Jones", s: "bg-amber-400" }].map((i) => (
            <div key={i.n} className="mb-1 flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${i.s}`} />
              <span className="text-[10px] text-slate-600">{i.n}</span>
            </div>
          ))}
          <p className="mt-3 mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Endorsements</p>
          <span className="text-[10px] text-green-600">Solo &#10003;</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section B: Fleet Intelligence ── */
function FleetPanel() {
  const aircraft = [
    { tail: "N172SP", hobbs: "3,412.6", next: "50 hrs", squawks: 0, util: 82 },
    { tail: "N34821", hobbs: "1,887.3", next: "12 hrs", squawks: 2, util: 64 },
    { tail: "N8846X", hobbs: "5,091.1", next: "3 hrs", squawks: 1, util: 91 },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
      <div className="bg-[#022C55] px-4 py-2 text-xs font-semibold text-white">Fleet Status Board</div>
      <div className="p-3">
        <div className="mb-2 grid grid-cols-5 gap-2 text-[10px] font-semibold uppercase text-slate-400">
          <span>Tail</span><span>Hobbs</span><span>Next Insp</span><span>Squawks</span><span>Utilization</span>
        </div>
        {aircraft.map((a) => (
          <div key={a.tail} className="mb-1.5 grid grid-cols-5 items-center gap-2 text-[11px] text-slate-700">
            <span className="font-medium">{a.tail}</span>
            <span>{a.hobbs}</span>
            <span className={a.next === "3 hrs" ? "font-semibold text-amber-600" : ""}>{a.next}</span>
            <span className={a.squawks > 0 ? "text-red-500 font-semibold" : "text-green-600"}>{a.squawks}</span>
            <div className="flex items-center gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-slate-100">
                <div className="h-1.5 rounded-full brand-gradient" style={{ width: `${a.util}%` }} />
              </div>
              <span className="text-[10px]">{a.util}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section C: CFI Portal ── */
function StudentPanel() {
  const students = [
    { name: "Alex Rivera", stage: "Stage 3", endorsements: "Solo Endorsed", currency: "Current", ec: "bg-green-100 text-green-700", sc: "bg-blue-100 text-blue-700" },
    { name: "Maria Chen", stage: "Stage 2", endorsements: "Pre-Solo", currency: "Current", ec: "bg-slate-100 text-slate-600", sc: "bg-blue-100 text-blue-700" },
    { name: "James Okafor", stage: "Stage 5", endorsements: "Solo Endorsed", currency: "Due", ec: "bg-green-100 text-green-700", sc: "bg-amber-100 text-amber-700" },
  ];
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
      <div className="bg-[#022C55] px-4 py-2 text-xs font-semibold text-white">CFI Portal — Student Roster</div>
      <div className="p-3">
        <div className="mb-2 grid grid-cols-4 gap-2 text-[10px] font-semibold uppercase text-slate-400">
          <span>Student</span><span>Stage</span><span>Endorsements</span><span>Currency</span>
        </div>
        {students.map((s) => (
          <div key={s.name} className="mb-1.5 grid grid-cols-4 items-center gap-2 text-[11px] text-slate-700">
            <span className="font-medium">{s.name}</span>
            <span className={`inline-block w-fit rounded-full px-2 py-0.5 text-[9px] font-medium ${s.sc}`}>{s.stage}</span>
            <span className={`inline-block w-fit rounded-full px-2 py-0.5 text-[9px] font-medium ${s.ec}`}>{s.endorsements}</span>
            <span className={s.currency === "Current" ? "text-green-600" : "text-amber-600"}>{s.currency}</span>
          </div>
        ))}
      </div>
      {/* Floating badge */}
      <div className="absolute -right-2 -top-2 rounded-full bg-green-500 px-2.5 py-1 text-[9px] font-bold text-white shadow-md">
        Audit Ready
      </div>
    </div>
  );
}

function BulletPoints({ points }: { points: string[] }) {
  return (
    <ul className="space-y-3">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sky-blue" />
          <span className="text-sm text-slate-600">{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FeaturesSpotlight() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl space-y-24 px-6">
        {/* A: Smart Scheduling */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SchedulePanel />
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="mb-4 font-heading text-2xl font-bold text-navy-blue">Smart Scheduling &amp; Dispatch</h3>
            <p className="mb-6 text-slate-600">Frictionless booking with real-time conflict detection across aircraft, instructors, and students. Dispatch compliance is enforced automatically.</p>
            <BulletPoints points={[
              "Drag-and-drop scheduling with instant availability checks",
              "Automatic instructor currency and endorsement validation",
              "Dispatch compliance hard-gates prevent unauthorized flights",
            ]} />
          </motion.div>
        </div>

        {/* B: Fleet Intelligence */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-2 lg:order-1">
            <h3 className="mb-4 font-heading text-2xl font-bold text-navy-blue">Fleet Intelligence &amp; Maintenance</h3>
            <div className="mb-6 grid grid-cols-3 gap-4">
              {[
                { num: "1", desc: "Turn idle tail numbers into revenue — flight schools have fixed costs that run whether the aircraft flies or not." },
                { num: "2", desc: "Give your club fixed costs somewhere to land — track utilization per member." },
                { num: "3", desc: "Operational confidence not just maintenance logs — surfaces inspection countdowns and squawk tracking." },
              ].map((s) => (
                <div key={s.num} className="text-center">
                  <span className="brand-gradient-text font-heading text-3xl font-extrabold">{s.num}</span>
                  <p className="mt-1 text-xs text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
            <FleetPanel />
          </motion.div>
        </div>

        {/* C: CFI Portal */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <StudentPanel />
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="mb-4 font-heading text-2xl font-bold text-navy-blue">The first platform built for the Chief Instructor</h3>
            <p className="mb-6 text-slate-600">Part 61 and 141 separate logic paths. Hard-blocked solo dispatch without proper endorsements. Immutable records for every training event.</p>
            <BulletPoints points={[
              "Student progress tracking with stage-check workflows",
              "Endorsement management with expiration alerts",
              "One-click FAA Audit Mode with complete training records",
            ]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
