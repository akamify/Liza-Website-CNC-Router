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
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-8 border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Proven results in real workshop production.
            </h2>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 font-medium">
            Strong CNC websites add customer stories because buyers want confidence in support, output quality, and daily reliability.
          </p>
          </div>

        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                  <Quote size={18} />
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-700 font-medium">
                "{item.text}"
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                <p className="mt-0.5 text-xs text-slate-500 font-medium">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
