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
      className="relative overflow-hidden bg-white py-10 sm:py-8 border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-900">
              Industries & Applications
            </span>

            <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Where this CNC router creates maximum value.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 font-medium">
              Explore how our CNC systems power sign making, custom furniture production, architectural panels, and acrylic fabrication with high efficiency and low maintenance.
            </p>

            <a
              href="#"
              data-enquiry-trigger="true"
              className="mt-5 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span className="text-white">Share Your Application</span>
            </a>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-xs">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">
                Production Advantage
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 font-medium">
                Optimized toolpaths, fast cutting speeds, and zero material wastage across solid wood, MDF, acrylic, and composite sheets.
              </p>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-200 hover:border-cyan-400 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-black text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 font-medium">
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
