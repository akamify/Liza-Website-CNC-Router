const faqs = [
  {
    question: "Which materials can this CNC router work with?",
    answer:
      "It is commonly positioned for wood, MDF, plywood, acrylic, PVC, foam boards, and selected non-ferrous sheet-based work depending on tooling and setup.",
  },
  {
    question: "Is this machine suitable for production jobs?",
    answer:
      "Yes. The machine supports both custom work and repeat production by highlighting accuracy, workflow, and support-focused engineering.",
  },
  {
    question: "Can I request a machine based on my workshop requirements?",
    answer:
      "Yes. We encourage quote or consultation requests so buyers can discuss table size, application type, and material needs.",
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
      className="relative overflow-hidden bg-white py-10 sm:py-8 border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-900">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Questions buyers usually ask before contacting
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">
            This section keeps the page helpful and conversion-ready without forcing every visitor to call first.
          </p>
        </div>

        <div className="mt-10 space-y-3.5">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs transition-colors hover:border-slate-300"
            >
              <summary className="cursor-pointer list-none text-left text-base font-bold text-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-cyan-700 font-black text-xl transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-600 font-medium">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
