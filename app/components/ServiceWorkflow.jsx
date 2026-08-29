import React from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your goals, audience, and exact service requirements before starting.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A clear structure is created so the work stays organized, transparent, and on time.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "The service is delivered with focused updates, practical milestones, and quality checks.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After delivery, we continue with improvements, guidance, and ongoing assistance.",
  },
];

export default function ServiceWorkflow() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-[#04101a] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(8,223,241,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(163,230,53,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
            Work Process
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            How the next section works for your services
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            This new section explains your process clearly so visitors can
            understand how you work from first contact to final support.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(5,25,36,0.96),rgba(3,18,28,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/35"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/10 text-lg font-black text-lime-300">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {step.description}
              </p>

              <div className="mt-6 h-1.5 w-14 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
