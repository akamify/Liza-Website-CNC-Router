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
        title="Explore the current machine lineup in one focused place."
        description="This products page gives the site a proper catalog structure and creates room for deeper detail pages for each machine."
        secondaryHref="/gallery"
        secondaryLabel="View Gallery"
      />

      <section className="relative overflow-hidden bg-[#03111a] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {productCatalog.map((product) => (
              <article
                key={product.slug}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,22,31,0.96),rgba(3,14,22,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#08151e]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-black text-white">
                    {product.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {product.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.featureLabels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-xs font-semibold text-cyan-200"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-teal-400 px-6 text-sm font-bold text-slate-950"
                    >
                      View Details
                    </Link>
                    <a
                      href="/contact"
                      data-enquiry-trigger="true"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-slate-200"
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
