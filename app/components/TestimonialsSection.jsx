import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Workshop Owner",
    role: "Furniture Production",
    text: "The machine gave us cleaner repeat work, better finish quality, and a much more confident production flow.",
  },
  {
    name: "Signage Business",
    role: "Custom Acrylic & Board Work",
    text: "We needed accuracy, clean edges, and reliable support. This setup felt practical for real jobs, not just showroom claims.",
  },
  {
    name: "Interior Contractor",
    role: "Decorative Panel Projects",
    text: "From carving patterns to panel cutting, the machine helped us deliver premium-looking pieces with less manual effort.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#021018] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(8,223,241,0.09),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(163,230,53,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Customer Trust
            </span>
            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
              Add proof that the machine works in real business use.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-300">
            Strong CNC websites often add testimonials or customer stories
            because buyers want confidence in support, output quality, and daily
            reliability.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,22,31,0.96),rgba(3,15,22,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-lime-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Quote size={18} />
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-200">
                "{item.text}"
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="text-base font-bold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
