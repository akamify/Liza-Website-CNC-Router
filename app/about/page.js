import InternalPageHero from "../components/InternalPageHero";
import { companyInfo, productCatalog } from "../data/siteContent";

export const metadata = {
  title: "About",
  description:
    "Learn about LIZA Enterprise and Technology, our CNC router focus, applications, support approach, and machine lineup.",
};

const strengths = [
  {
    title: "Industrial machine focus",
    description:
      "The brand positioning is centered around practical CNC router solutions for production, carving, and workshop use.",
  },
  {
    title: "Application-driven support",
    description:
      "Buyers often choose based on the work they do, so the site now supports machine decisions through use cases and materials.",
  },
  {
    title: "Lead-first conversion flow",
    description:
      "With the enquiry popup in place, visitors now have a direct path to request quotes and machine consultation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <InternalPageHero
        badge="About LIZA"
        title="A CNC router website should feel credible, clear, and production-ready."
        description="This page explains the company direction, the machine categories, and the support-first approach behind the product presentation."
        secondaryHref="/contact"
        secondaryLabel="Contact Team"
      />

      <section className="relative overflow-hidden bg-[#03111a] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Company Direction
              </span>
              <h2 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl">
                Positioned for real workshop and machine buyers.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {companyInfo.name} is presented here as a CNC router-focused
                business serving routing, carving, engraving, and related
                production needs. The website is structured to support trust,
                product discovery, and enquiry generation.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                Current Product Categories
              </p>
              <div className="mt-5 space-y-4">
                {productCatalog.map((product, index) => (
                  <div
                    key={product.slug}
                    className="rounded-2xl border border-white/10 bg-[#061923]/80 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-bold text-white">
                        {product.title}
                      </h3>
                      <span className="text-xs font-black text-cyan-300">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,23,33,0.96),rgba(3,15,22,0.98))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
              >
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400" />
                <h3 className="mt-5 text-2xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
