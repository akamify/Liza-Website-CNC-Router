import { CheckCircle2, Gauge, Layers2, ShieldCheck, Sparkles } from "lucide-react";

const materials = [
  "Solid wood",
  "MDF boards",
  "Plywood sheets",
  "Acrylic panels",
  "PVC sheets",
  "Foam boards",
  "Composite panels",
  "Non-ferrous material work",
];

const capabilities = [
  {
    title: "Clean engraving",
    description: "For logos, carving patterns, text work, and decorative cuts.",
    icon: Sparkles,
  },
  {
    title: "Stable accuracy",
    description: "Consistent output for repeating parts and production jobs.",
    icon: Gauge,
  },
  {
    title: "Multi-material flexibility",
    description: "Useful across wood, acrylic, PVC, and sheet-based jobs.",
    icon: Layers2,
  },
  {
    title: "Workshop-ready reliability",
    description: "Built for routine use with service support and practical upkeep.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#04141d] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,29,1),rgba(2,12,18,1)),radial-gradient(circle_at_80%_15%,rgba(8,223,241,0.09),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
          <div className="rounded-[34px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(5,22,31,0.95),rgba(2,12,18,0.96))] p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            <span className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
              Materials & Capability
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
              Show what the machine can handle before buyers ask.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              CNC buyers care about material range, consistency, and shop
              output. This section answers those points in a quick, easy-to-scan
              layout.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {materials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-cyan-300"
                    strokeWidth={2.2}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
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
