import Link from "next/link";
import React from "react";

const highlights = [
  {
    title: "High Precision",
    subtitle: "±0.01mm Accuracy",
    icon: <PrecisionIcon />,
  },
  {
    title: "Heavy Duty Build",
    subtitle: "Industrial Cast Steel",
    icon: <ShieldIcon />,
  },
  {
    title: "Fast Production",
    subtitle: "24m/min Travel Speed",
    icon: <SpeedIcon />,
  },
  {
    title: "24/7 Support",
    subtitle: "Dedicated Engineers",
    icon: <SupportIcon />,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mt-20 sm:mt-19 lg:mt-20 isolate min-h-[100svh] w-full overflow-hidden bg-[#02070d] text-white select-none"
    >
      {/* ======================================================
          BACKGROUND & LIGHTING EFFECTS
      ====================================================== */}

      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-30 opacity-20 mix-blend-luminosity">
        <img
          src="/herobg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      {/* Atmospheric Radial Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#02070d]/60" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#02070d] via-[#02070d]/85 to-transparent lg:via-[#02070d]/70" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t from-[#02070d] via-transparent to-[#02070d]/80" />

      {/* Tech Grid Matrix */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-[linear-gradient(to_right,#06b6d40f_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40f_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem]
          [mask-image:radial-gradient(ellipse_70%_60%_at_65%_45%,#000_30%,transparent_100%)]
        "
      />

      {/* Ambient Glowing Orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-[5%] top-[15%] -z-10 hidden h-[550px] w-[550px] rounded-full bg-cyan-400/[0.12] blur-[160px] lg:block" />
      <div className="pointer-events-none absolute right-[20%] top-[40%] -z-10 hidden h-[350px] w-[350px] rounded-full bg-emerald-500/[0.08] blur-[120px] lg:block" />

      {/* ======================================================
          MAIN HERO CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1536px] grid-cols-1 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
        {/* ==================================================
            LEFT COLUMN - BRAND & CTA
        ================================================== */}

        <div className="relative z-30 flex flex-col justify-center lg:col-span-7 xl:col-span-6">
          {/* Status Badge */}
          <div className="inline-flex max-w-fit items-center gap-2.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-950/60 to-slate-900/60 py-1.5 pl-3 pr-4 text-xs font-medium text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
            </span>

            <span className="tracking-wide text-cyan-200">
              Next-Gen Industrial CNC Systems
            </span>

            <ChevronSmallIcon />
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.08]">
            Precision CNC <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]">
              Router Machines
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base text-slate-300/90 sm:text-lg lg:text-base xl:text-lg leading-relaxed font-light">
            Engineer your production floor for absolute accuracy, maximum output,
            and zero unplanned downtime. Designed for heavy-duty timber, non-ferrous
            metals, acrylics, and industrial fabrication.
          </p>

          {/* Contact action */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 px-8 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(163,230,53,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(163,230,53,0.55)] active:scale-95"
            >
              <span className="relative z-10 tracking-wide">Contact Us</span>
              <span className="pointer-events-none absolute inset-y-0 -left-[50%] w-[40%] -skew-x-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[130%]" />
            </Link>
          </div>

          {/* ==================================================
              FEATURE HIGHLIGHTS CARDS
          ================================================== */}

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-3.5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-800/80
                  bg-gradient-to-b
                  from-slate-900/60
                  to-slate-950/80
                  p-3.5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-cyan-500/50
                  hover:shadow-[0_12px_30px_-5px_rgba(6,182,212,0.2)]
                "
              >
                {/* Micro corner accent */}
                <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-400/0 transition-colors duration-300 group-hover:border-cyan-400/60" />
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-400/0 blur-xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-lime-400/25 bg-lime-400/10 text-lime-400 transition-all duration-300 group-hover:border-lime-400/50 group-hover:bg-lime-400/20 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-xs font-bold text-slate-100 transition-colors group-hover:text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-slate-400 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================
            RIGHT COLUMN — MACHINE SHOWCASE & HUD OVERLAYS
        ================================================== */}

        <div className="relative z-20 mt-12 flex items-center justify-center lg:col-span-5 lg:mt-0 xl:col-span-6">
          <div className="relative w-full max-w-lg lg:max-w-none">
            {/* Machine Back Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[48%]
                h-[90%]
                w-[90%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(6,182,212,0.20)_0%,rgba(6,182,212,0.05)_40%,transparent_75%)]
              "
            />

            {/* Tech Radar Rings */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[85%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[68%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/20" />
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[52%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

            {/* Rotating Tech Ring */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[85%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite] rounded-full border border-transparent border-r-cyan-400/40 border-t-cyan-400/20" />

            {/* Precision Grid Axis Lines */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-[48%] h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />

            {/* Decorative HUD Markers */}
            <TechMarker className="left-[6%] top-[30%]" />
            <TechMarker className="right-[4%] top-[38%] rotate-90" />
            <TechMarker className="bottom-[22%] right-[14%] -rotate-[35deg]" />

            {/* Pedestal Glow & Base Platform */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 h-28 w-[92%] -translate-x-1/2 rounded-[100%] border border-cyan-400/20 bg-gradient-to-b from-cyan-500/15 to-transparent blur-[2px]" />
            <div className="pointer-events-none absolute bottom-6 left-1/2 h-14 w-[75%] -translate-x-1/2 rounded-[100%] bg-cyan-400/25 blur-2xl" />
            <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-[38px] w-[65%] -translate-x-1/2 rounded-[50%] border border-cyan-300/25" />

            {/* MAIN MACHINE IMAGE */}
            <img
              src="/herocnc.png"
              alt="Heavy Duty CNC Machine Router Showcase"
              fetchPriority="high"
              className="
                relative
                z-10
                h-auto
                w-full
                max-h-[580px]
                object-contain
                drop-shadow-[0_30px_45px_rgba(0,0,0,0.85)]
                transition-transform
                duration-700
                hover:scale-[1.025]"
            />

            {/* ==================================================
                HUD CARD 1: CONTROL SYSTEM
            ================================================== */}

            <div
              className="
                absolute
                top-6
                -right-2
                z-20
                hidden
                items-center
                gap-3
                rounded-xl
                border
                border-cyan-500/30
                bg-[#04121a]/85
                p-3.5
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/60
                sm:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <ChipIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400/80">
                  Control System
                </p>
                <p className="text-xs font-bold text-white tracking-wide">
                  DSP / Syntec Controller
                </p>
              </div>

              <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              </span>
            </div>

            {/* Connector Line - Control Card */}
            <div className="pointer-events-none absolute right-[17%] top-[24%] z-[8] hidden h-[46px] w-px bg-gradient-to-b from-cyan-400/50 to-transparent sm:block">
              <span className="absolute -bottom-[2px] -left-[3px] h-[7px] w-[7px] rounded-full border border-cyan-300/60 bg-cyan-950" />
            </div>

            {/* ==================================================
                HUD CARD 2: SPINDLE POWER
            ================================================== */}

            <div
              className="
                absolute
                bottom-12
                -left-4
                z-20
                hidden
                items-center
                gap-3
                rounded-xl
                border
                border-lime-500/30
                bg-[#04121a]/85
                p-3.5
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-lime-400/60
                sm:flex
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/20 text-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.3)]">
                <BoltIcon />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-lime-400/80">
                  Spindle Power
                </p>
                <p className="text-xs font-bold text-white tracking-wide">
                  6.0KW Air Cooled
                </p>
              </div>

              <span className="absolute right-2.5 top-2.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
              </span>
            </div>

            {/* Connector Line - Spindle Card */}
            <div className="pointer-events-none absolute bottom-[25%] left-[17%] z-[8] hidden h-[42px] w-px bg-gradient-to-t from-lime-400/50 to-transparent sm:block">
              <span className="absolute -top-[2px] -left-[3px] h-[7px] w-[7px] rounded-full border border-lime-300/60 bg-slate-950" />
            </div>

            {/* Machine Top Label Banner */}
            <div className="pointer-events-none absolute left-1/2 top-[3%] hidden -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-400/20 bg-slate-950/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300/60 backdrop-blur-md lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Precision Engineering System
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glowing Divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
}

/* ==========================================================
    HELPER COMPONENTS & SVG ICONS
========================================================== */

function TechMarker({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute z-[2] hidden items-center gap-1.5 lg:flex ${className}`}
    >
      <span className="h-px w-6 bg-cyan-400/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_6px_#38bdf8]" />
      <span className="h-px w-3 bg-cyan-400/20" />
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M14 3h7v18h-7V3ZM3 3h7v18H3V3Zm13 4v4h3V7h-3Zm-11 0v4h3V7H5Z" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <path d="M12 3s7 3 7 8c0 5.5-4 8.5-7 10-3-1.5-7-4.5-7-10 0-5 7-8 7-8Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <path d="M12 14l3-5" />
      <path d="M5 18a9 9 0 1 1 14 0" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 stroke-current"
      fill="none"
      strokeWidth="1.8"
    >
      <path d="M18 10a6 6 0 0 0-12 0v5a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6m12 0h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-5Z" />
    </svg>
  );
}

function ChevronSmallIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 stroke-current"
      fill="none"
      strokeWidth="2.5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="2"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
    </svg>
  );
}
