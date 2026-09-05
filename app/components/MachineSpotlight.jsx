import Image from "next/image";
import { BadgeCheck, Gauge, Layers3, Wrench } from "lucide-react";

const machineStats = [
  {
    label: "Heavy-duty build",
    detail: "High-rigidity steel frame for vibration-free routing",
    icon: Layers3,
  },
  {
    label: "Precision output",
    detail: "±0.01mm accuracy for clean carving and trimming",
    icon: BadgeCheck,
  },
  {
    label: "Production ready",
    detail: "Engineered for 24/7 heavy workshop operation",
    icon: Gauge,
  },
  {
    label: "Service support",
    detail: "Complete setup guidance, maintenance & care",
    icon: Wrench,
  },
];

export default function MachineSpotlight() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 border-b border-slate-200"
    >
      <div className="relative mx-auto grid max-w-[1450px] gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Left: Machine Photo Container - Perfectly proportioned */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-900">
              <Image
                src="/cncImg/img1.jpg"
                alt="Liza CNC router machine in workshop setup"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Industrial Grade Setup
                </div>

                <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
                  {["Heavy Bed", "Servo Drive", "High Output"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-center text-[11px] font-semibold text-white backdrop-blur-md"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text & Details Column - Height perfectly aligned with Image */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-900 w-fit">
            Machine Spotlight
          </span>

          <h2 className="mt-3.5 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Built to perform like an industrial tool.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">
            Heavy-duty industrial build designed for high-precision carving, wood routing, acrylic shaping, and continuous workshop production.
          </p>

          {/* Action Buttons opening Enquiry Modal directly */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#"
              data-enquiry-trigger="true"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span className="text-white">Ask for Machine Fit</span>
            </a>
            <a
              href="#products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400"
            >
              Compare Lineup
            </a>
          </div>

          {/* Feature Grid */}
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {machineStats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs transition-all duration-200 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon size={17} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.label}
                      </h3>
                      <p className="text-[11px] leading-tight text-slate-500 font-medium mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
