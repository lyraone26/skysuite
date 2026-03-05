"use client";

import { motion } from "framer-motion";

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const aircraft = [
  {
    tail: "N172SP",
    hobbs: "1,847.3h",
    nextInsp: "23 days",
    inspColor: "text-slate-300",
    squawks: "0",
    squawkColor: "text-green-400",
    squawkDot: "bg-green-400",
    sparkPath: "M0,20 L10,18 L20,15 L30,16 L40,12 L50,14 L60,10 L70,8 L80,6 L90,9 L100,5",
  },
  {
    tail: "N34821",
    hobbs: "2,103.8h",
    nextInsp: "7 days",
    inspColor: "text-amber-400",
    squawks: "1 Minor",
    squawkColor: "text-amber-400",
    squawkDot: "bg-amber-400",
    sparkPath: "M0,15 L10,18 L20,20 L30,17 L40,14 L50,16 L60,13 L70,15 L80,12 L90,10 L100,11",
  },
  {
    tail: "N8846X",
    hobbs: "892.1h",
    nextInsp: "61 days",
    inspColor: "text-slate-300",
    squawks: "0",
    squawkColor: "text-green-400",
    squawkDot: "bg-green-400",
    sparkPath: "M0,18 L10,14 L20,16 L30,12 L40,10 L50,8 L60,11 L70,7 L80,9 L90,5 L100,6",
  },
];

const statCards = [
  {
    num: "1",
    title: "Turn idle tail numbers into revenue.",
    desc: "Flight schools have fixed costs that run whether the aircraft flies or not. SkySuite surfaces utilization gaps and flags idle aircraft across booking windows so operators can act.",
  },
  {
    num: "2",
    title: "Give your club fixed costs somewhere to land.",
    desc: "Track utilization per member, surface who is flying and who is not, keep costs distributed fairly and members engaged.",
  },
  {
    num: "3",
    title: "Operational confidence, not just maintenance logs.",
    desc: "Surfaces inspection countdowns and squawk tracking at dispatch. The decisions stay with your people.",
  },
];

export default function SpotlightFleet() {
  return (
    <section id="fleet" className="bg-[#011830] py-[160px]">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Copy LEFT */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#07BCE7]">
            Fleet Intelligence
          </p>
          <h2 className="mt-6 font-heading text-4xl font-bold text-white md:text-5xl">
            Every tail number accounted for.
          </h2>

          {/* Three mini stat cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {statCards.map((card) => (
              <div
                key={card.num}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="brand-gradient-text font-heading text-3xl font-extrabold">
                  {card.num}
                </span>
                <p className="mt-2 text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-500">
            SkySuite surfaces operational information. The decisions stay with your people.
          </p>
        </motion.div>

        {/* UI Panel RIGHT */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 lg:order-2"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-2 rounded-t-xl bg-[#0d2847] px-4 py-2.5">
              <span className="text-xs font-semibold text-white">Fleet Status</span>
              <div className="h-2 w-2 rounded-full bg-green-400 animate-status-pulse" />
            </div>

            {/* Table */}
            <div className="p-4">
              {/* Column headers */}
              <div className="mb-3 grid grid-cols-5 gap-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                <span>Tail</span>
                <span>Hobbs</span>
                <span>Next Insp</span>
                <span>Squawks</span>
                <span>Utilization</span>
              </div>

              {/* Rows */}
              {aircraft.map((a) => (
                <div
                  key={a.tail}
                  className="mb-3 grid grid-cols-5 items-center gap-3 text-[11px]"
                >
                  <span className="font-medium text-white">{a.tail}</span>
                  <span className="text-slate-300">
                    <span className="animate-status-pulse inline-block h-1.5 w-1.5 rounded-full bg-green-400 mr-1" />
                    {a.hobbs}
                  </span>
                  <span className={a.inspColor}>{a.nextInsp}</span>
                  <span className="flex items-center gap-1">
                    <span className={`h-2 w-2 rounded-full ${a.squawkDot}`} />
                    <span className={a.squawkColor}>{a.squawks}</span>
                  </span>
                  <svg viewBox="0 0 100 25" className="h-5 w-full">
                    <motion.path
                      d={a.sparkPath}
                      fill="none"
                      stroke="url(#sparkGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#07BCE7" />
                        <stop offset="100%" stopColor="#0941C4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
