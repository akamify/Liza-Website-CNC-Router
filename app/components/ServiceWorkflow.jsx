import React from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your goals, workshop space, and exact machine requirements before suggesting.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A clear machine configuration is selected so production expectations stay realistic and transparent.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Machine delivery, setup guidance, and initial trial runs are handled with practical care.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After installation, we continue with operational guidance, maintenance tips, and engineer care.",
  },
];

export default function ServiceWorkflow() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-900">
            Work Process
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            How we guide your CNC purchase
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">
            This simple 4-step process ensures you get the right machine configuration from initial enquiry to production support.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-base font-black text-emerald-800">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                {step.description}
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
