import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalPageHero from "../../components/InternalPageHero";
import { productCatalog } from "../../data/siteContent";

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }) {
  const product = productCatalog.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = productCatalog.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <InternalPageHero
        badge={product.shortTitle}
        title={product.title}
        description={product.description}
        secondaryHref="/products"
        secondaryLabel="Back to Products"
      />

      <section className="relative overflow-hidden bg-[#03111a] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#08151e] shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-cyan-400/15 bg-[#051722]/90 p-6 sm:p-8">
              <span className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
                Machine Highlights
              </span>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.featureLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-xs font-semibold text-cyan-200"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  data-enquiry-trigger="true"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-teal-400 px-6 text-sm font-bold text-slate-950"
                >
                  Get Enquiry
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-slate-200"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-black text-white">
                Common Applications
              </h2>
              <div className="mt-5 grid gap-3">
                {product.applications.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#061923]/80 px-4 py-3 text-sm font-medium text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-black text-white">
                Material Suitability
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.materials.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#061923]/80 px-4 py-3 text-sm font-medium text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
