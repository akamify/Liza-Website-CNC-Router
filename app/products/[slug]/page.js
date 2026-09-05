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

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">
                Machine Highlights
              </span>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.featureLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-900"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-xs"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-800">
                      {spec.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-800 font-semibold">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  data-enquiry-trigger="true"
                  data-machine-type={product.title}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span className="text-white">Get Enquiry</span>
                </a>
                <a
                  href="#"
                  data-enquiry-trigger="true"
                  data-machine-type={product.title}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 cursor-pointer"
                >
                  Contact Team
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">
                Common Applications
              </h2>
              <div className="mt-4 grid gap-2.5">
                {product.applications.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900">
                Material Suitability
              </h2>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {product.materials.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xs"
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
