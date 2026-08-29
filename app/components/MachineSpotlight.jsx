import Image from "next/image";
import { BadgeCheck, Gauge, Layers3, Wrench } from "lucide-react";

const machineStats = [
  {
    label: "Heavy-duty build",
    detail: "Stable frame for consistent industrial routing",
    icon: Layers3,
  },
  {
    label: "Precision output",
    detail: "Clean carving, cutting, and repeatable results",
    icon: BadgeCheck,
  },
  {
    label: "Production ready",
    detail: "Built for workshop throughput and day-long jobs",
    icon: Gauge,
  },
  {
    label: "Service support",
    detail: "Setup guidance, maintenance help, and follow-up care",
    icon: Wrench,
  },
];

export default function MachineSpotlight() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[#031019] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,223,241,0.11),transparent_22%),radial-gradient(circle_at_88%_72%,rgba(163,230,53,0.08),transparent_24%),linear-gradient(180deg,#031019_0%,#041723_50%,#03111a_100%)]" />

      <div className="relative mx-auto grid max-w-[1450px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:items-center lg:px-8">
        <div className="relative">
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-xl lg:block" />
          <div className="absolute -bottom-10 right-10 hidden h-36 w-36 rounded-full bg-lime-400/10 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[34px] border border-cyan-400/15 bg-white/[0.03] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071a24]">
              <Image
                src="/cncImg/img1.jpg"
                alt="Liza CNC router machine in a polished workshop setup"
                width={1365}
                height={1120}
                className="h-auto w-full object-cover"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04131d]/95 via-[#04131d]/18 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-lime-300">
                  Real Machine Setup
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Router bed", "Servo control", "Workshop ready"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-center text-xs font-semibold text-slate-100 backdrop-blur-md"
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

        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Machine Spotlight
          </span>

          <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.6rem]">
            Built to look premium and perform like an industrial tool.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            This section uses your real machine image to build trust fast. For
            CNC router websites, strong photo-led sections work well because
            buyers want to see the machine, the environment, and the level of
            finish they can expect.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {machineStats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
