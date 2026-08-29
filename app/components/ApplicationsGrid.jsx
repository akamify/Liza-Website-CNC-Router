import {
  Building2,
  Layers3,
  Package2,
  PenTool,
  Sofa,
  SquareStack,
} from "lucide-react";

const applications = [
  {
    title: "Sign Making",
    description:
      "Clean routing and engraving for brand signage, decorative boards, and commercial display work.",
    icon: PenTool,
  },
  {
    title: "Furniture Panels",
    description:
      "Accurate cutting for furniture parts, custom panels, and repeatable workshop production.",
    icon: Sofa,
  },
  {
    title: "Cabinet Work",
    description:
      "Consistent shaping, drilling, and trimming for modular cabinet and interior projects.",
    icon: SquareStack,
  },
  {
    title: "Architectural Elements",
    description:
      "Detailed router work for wall art, screen panels, partitions, and decorative components.",
    icon: Building2,
  },
  {
    title: "Acrylic and Plastic Jobs",
    description:
      "Smooth machining for acrylic sheets, plastic panels, and presentation-grade custom parts.",
    icon: Layers3,
  },
  {
    title: "Prototype and Batch Work",
    description:
      "Useful for one-off development jobs as well as repeat production with stable output.",
    icon: Package2,
  },
];

export default function ApplicationsGrid() {
  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-[#020c13] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_26%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Industries & Applications
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
              Where this CNC router creates the most value.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Leading CNC router brands highlight applications and industries
              early because buyers often identify themselves by job type first,
              then compare machine features later.
            </p>

            <div className="mt-8 rounded-[28px] border border-cyan-400/15 bg-[#051722]/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-300">
                Why This Section Matters
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                It helps visitors quickly answer: "Can this machine handle my
                kind of work?" That makes the page feel more relevant and more
                conversion-focused.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,22,31,0.96),rgba(3,14,22,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/25 ${
                    index === 0 ? "sm:translate-y-10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon size={21} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-black text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-white">
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
