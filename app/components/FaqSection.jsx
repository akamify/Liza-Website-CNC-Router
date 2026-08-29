const faqs = [
  {
    question: "Which materials can this CNC router work with?",
    answer:
      "It is commonly positioned for wood, MDF, plywood, acrylic, PVC, foam boards, and selected non-ferrous sheet-based work depending on tooling and setup.",
  },
  {
    question: "Is this machine suitable for production jobs?",
    answer:
      "Yes. The page positioning now supports both custom work and repeat production by highlighting accuracy, workflow, and support-focused messaging.",
  },
  {
    question: "Can I request a machine based on my workshop requirements?",
    answer:
      "Yes. A strong CNC website should encourage quote or consultation requests so buyers can discuss table size, application type, and material needs.",
  },
  {
    question: "Why add an FAQ section on a CNC router website?",
    answer:
      "It reduces hesitation, answers common buyer questions early, and supports better conversion for visitors comparing multiple machine suppliers.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#041822] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,34,1),rgba(2,12,18,1)),radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
            Questions buyers usually ask before they contact you
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            This section keeps the page helpful and conversion-ready without
            forcing every visitor to call first.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <summary className="cursor-pointer list-none text-left text-lg font-bold text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-cyan-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-6 text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
