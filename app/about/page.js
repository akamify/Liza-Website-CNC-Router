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
      "Buyers often choose based on the work they do, so the site supports machine decisions through use cases and materials.",
  },
  {
    title: "Lead-first conversion flow",
    description:
      "With the enquiry popup in place, visitors have a direct path to request quotes and machine consultation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <InternalPageHero
        badge="About LIZA"
        title="A CNC router website built for credibility, clarity, and production-fit."
        description="This page explains the company direction, machine categories, and the support-first approach behind our product presentation."
        secondaryHref="/products"
        secondaryLabel="Explore Machines"
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-900">
                Company Direction
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Positioned for real workshop and machine buyers.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 font-medium">
                {companyInfo.name} is presented here as a CNC router-focused
                business serving routing, carving, engraving, and related
                production needs. The website is structured to support trust,
                product discovery, and enquiry generation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                Current Product Categories
              </p>
              <div className="mt-4 space-y-3">
                {productCatalog.map((product, index) => (
                  <div
                    key={product.slug}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-bold text-slate-900">
                        {product.title}
                      </h3>
                      <span className="text-xs font-black text-cyan-700">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 font-medium">
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
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
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
