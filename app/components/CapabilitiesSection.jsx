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
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
              Materials & Capability
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Show what the machine can handle before buyers ask.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 font-medium">
              CNC buyers care about material range, consistency, and shop output. This section answers those points in a quick, easy-to-scan layout.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {materials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-cyan-700"
                    strokeWidth={2.2}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5.5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
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
