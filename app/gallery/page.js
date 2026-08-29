import Image from "next/image";
import InternalPageHero from "../components/InternalPageHero";
import { productCatalog } from "../data/siteContent";

export const metadata = {
  title: "Gallery",
  description:
    "View CNC router machine visuals, workshop presentation, and product highlights from the LIZA lineup.",
};

const galleryItems = productCatalog.flatMap((product, index) => [
  {
    key: `${product.slug}-hero`,
    image: product.image,
    title: product.title,
    description: product.description,
    accent: index % 2 === 0 ? "lg:col-span-2" : "",
  },
  {
    key: `${product.slug}-detail`,
    image: product.image,
    title: `${product.shortTitle} Applications`,
    description:
      "A presentation block for machine-focused marketing, factory visibility, and product-led lead generation.",
    accent: "",
  },
]);

export default function GalleryPage() {
  return (
    <main>
      <InternalPageHero
        badge="Gallery"
        title="Machine visuals matter because CNC buyers want to see the setup."
        description="This gallery page gives the website a dedicated visual layer for machine presentation, workshop credibility, and product promotion."
        secondaryHref="/products"
        secondaryLabel="Browse Products"
      />

      <section className="relative overflow-hidden bg-[#021018] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.key}
                className={`overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,22,31,0.96),rgba(3,14,22,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.24)] ${item.accent}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#08151e]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-black text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
