import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalPageHero from "../../components/InternalPageHero";
import ProductImageGallery from "../../components/ProductImageGallery";
import { productCatalog } from "../../data/siteContent";
import { Sparkles, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return productCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

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

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Filter output images for dedicated showcase section
  const outputImages = (product.images || []).filter((img) => img.isOutput);

  // Filter remaining products for similar suggestions section
  const remainingProducts = productCatalog.filter((item) => item.slug !== slug);

  return (
    <main>
      <InternalPageHero
        badge={product.shortTitle}
        title={product.title}
        description={product.description}
        secondaryHref="/products"
        secondaryLabel="Back to Products"
      />

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            {/* Interactive Image Gallery */}
            <ProductImageGallery
              images={product.images || [{ url: product.image, title: product.title, tag: "Machine View" }]}
              title={product.title}
            />

            {/* Machine Specs & Highlights */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm h-fit">
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
                  href="/contact"
                  data-enquiry-trigger="true"
                  data-machine-type={product.title}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 cursor-pointer"
                >
                  Contact Team
                </a>
              </div>
            </div>
          </div>

          {/* Machine Output Showcase Section */}
          {outputImages.length > 0 && (
            <div className="mt-16 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-slate-50 to-emerald-50/40 p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Machine Output Results
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Real Wood Carvings & Products Created by {product.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 font-medium">
                    Check out the real-world finished carvings, doors, and furniture panels crafted using this machine.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {outputImages.map((img, idx) => {
                  const isFinal = idx === outputImages.length - 1;
                  return (
                    <div
                      key={img.url + idx}
                      className={`group relative overflow-hidden rounded-2xl border bg-white p-3 shadow-xs transition-all hover:shadow-md ${
                        isFinal ? "border-amber-400/80 ring-2 ring-amber-400/20" : "border-slate-200"
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                        <Image
                          src={img.url}
                          alt={img.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {isFinal && (
                          <div className="absolute top-2 right-2 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 px-3 py-1 text-[10px] font-black uppercase text-white shadow-md">
                            Final Output ✨
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                          {img.tag}
                        </span>
                        <h3 className="mt-0.5 text-sm font-bold text-slate-800 leading-snug">
                          {img.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Applications and Material Suitability */}
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

          {/* Remaining Product Suggestions / Similar Products */}
          <div className="mt-16 border-t border-slate-200/80 pt-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-900">
                  Explore More Machines
                </span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Similar CNC Router Machines
                </h2>
                <p className="mt-1 text-sm text-slate-600 font-medium">
                  Compare with other high-performance machines in the LIZA catalog.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {remainingProducts.map((item) => (
                <div
                  key={item.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white border border-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5">
                      <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-cyan-800">
                        {item.shortTitle}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#"
                      data-enquiry-trigger="true"
                      data-machine-type={item.title}
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Get Enquiry
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
