import InternalPageHero from "../components/InternalPageHero";
import ContactEnquiryFormSection from "../components/ContactEnquiryFormSection";
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
        badge="Contact Us"
        title="Start your machine enquiry from the page or popup."
        description="This page gives buyers a focused contact destination while keeping the popup enquiry form available across the whole site."
        secondaryHref="/about"
        secondaryLabel="About Company"
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-900">
                Direct Contact
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Reach out for machine guidance & quotes.
              </h2>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700 font-semibold sm:text-base">
                <p>Phone: <span className="text-slate-900 font-bold">{companyInfo.phone}</span></p>
                <p>Email: <span className="text-slate-900 font-bold">{companyInfo.email}</span></p>
                <p>Website: <span className="text-cyan-700 font-bold">{companyInfo.website}</span></p>
              </div>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href="#"
                  data-enquiry-trigger="true"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-7 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span className="text-white">Get Enquiry</span>
                </a>
                <a
                  href={companyInfo.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-300 bg-white px-7 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5.5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactEnquiryFormSection />
    </main>
  );
}
