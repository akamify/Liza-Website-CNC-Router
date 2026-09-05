import Image from "next/image";
import Link from "next/link";
import InternalPageHero from "../components/InternalPageHero";
import { productCatalog } from "../data/siteContent";

export const metadata = {
  title: "Products",
  description:
    "Browse the LIZA CNC product lineup including CNC router, wood carving, and wood engraving machines.",
};

export default function ProductsPage() {
  return (
    <main>
      <InternalPageHero
        badge="Products"
        title="Explore the current machine lineup in one place."
        description="This products page gives the site a proper catalog structure and creates room for deeper detail pages for each machine."
        secondaryHref="/gallery"
        secondaryLabel="View Gallery"
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {productCatalog.map((product) => (
              <article
                key={product.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.featureLabels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-900"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-5 text-sm font-bold text-white shadow-sm hover:shadow-md transition-all"
                    >
                      <span className="text-white">View Details</span>
                    </Link>
                    <a
                      href="#"
                      data-enquiry-trigger="true"
                      data-machine-type={product.title}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 cursor-pointer"
                    >
                      Get Enquiry
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
