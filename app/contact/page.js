import InternalPageHero from "../components/InternalPageHero";
import { companyInfo } from "../data/siteContent";

export const metadata = {
  title: "Contact",
  description:
    "Contact LIZA Enterprise and Technology for CNC router enquiries, machine consultation, and production support.",
};

const supportCards = [
  {
    title: "Machine Consultation",
    description:
      "Discuss material type, workshop need, machine category, and recommended direction before buying.",
  },
  {
    title: "Custom Quote",
    description:
      "Use the enquiry popup to submit project details and get a machine-oriented follow-up conversation started.",
  },
  {
    title: "After-Sales Support",
    description:
      "Keep a path open for guidance, service help, and practical support after delivery or setup.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <InternalPageHero
        badge="Contact"
        title="Start the machine enquiry from the page or the popup."
        description="This page gives buyers a focused contact destination while keeping the popup enquiry form available across the whole site."
        secondaryHref="/about"
        secondaryLabel="About Company"
      />

      <section className="relative overflow-hidden bg-[#03111a] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]">
            <div className="rounded-[32px] border border-cyan-400/15 bg-[#051722]/90 p-6 sm:p-8">
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Direct Contact
              </span>

              <h2 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl">
                Reach the team quickly for machine-related decisions.
              </h2>

              <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                <p>Phone: {companyInfo.phone}</p>
                <p>Email: {companyInfo.email}</p>
                <p>Website: {companyInfo.website}</p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  data-enquiry-trigger="true"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 px-7 text-sm font-bold text-slate-950"
                >
                  Open Enquiry Popup
                </a>
                <a
                  href={companyInfo.phoneHref}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 px-7 text-sm font-semibold text-slate-200"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-black text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
