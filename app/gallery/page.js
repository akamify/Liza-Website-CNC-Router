import Image from "next/image";
import InternalPageHero from "../components/InternalPageHero";

export const metadata = {
  title: "Gallery",
  description:
    "View LIZA CNC router machines, product details, and workshop installations.",
};

const galleryItems = [
  { image: "/galleryImages/img1.jpg", alt: "LIZA ENT 1325 NS CNC router machine", width: 1194, height: 880 },
  { image: "/galleryImages/img2.jpg", alt: "LIZA 2D and 3D CNC router feature overview", width: 1031, height: 1525 },
  { image: "/galleryImages/img3.jpg", alt: "LIZA Technology CNC router machine", width: 472, height: 421 },
  { image: "/galleryImages/img4.jpg", alt: "LIZA double head CNC router machine", width: 1176, height: 1338 },
  { image: "/galleryImages/img5.jpg", alt: "LIZA double head CNC router product details", width: 1175, height: 1338 },
  { image: "/galleryImages/img6.jpg", alt: "LIZA CNC router showroom display", width: 1364, height: 1153 },
  { image: "/galleryImages/img7.jpg", alt: "LIZA LET 1525 CNC router machine", width: 1266, height: 1243 },
  { image: "/galleryImages/img8.jpg", alt: "CNC router installed in a workshop", width: 1079, height: 773 },
  { image: "/galleryImages/img9.jpg", alt: "CNC router in a production workshop", width: 1280, height: 963 },
  { image: "/galleryImages/img10.jpg", alt: "LIZA CNC router showroom display with control box", width: 1584, height: 993 },
  { image: "/galleryImages/img11.jpg", alt: "LIZA ENT 1325 NS CNC router machine with accessories", width: 1290, height: 1197 },
  { image: "/galleryImages/img12.jpg", alt: "LIZA LET 1525 MS Pro Plus CNC router machine", width: 1265, height: 1244 },
  { image: "/galleryImages/img13.jpg", alt: "LIZA ENT 1325 NS CNC router product details", width: 1049, height: 1499 },
  { image: "/galleryImages/img14.jpg", alt: "LIZA ENT 1525 SS Plus CNC router machine", width: 1346, height: 1169 },
  { image: "/galleryImages/img15.jpg", alt: "LIZA CNC router machine product image", width: 1920, height: 1920 },
  { image: "/galleryImages/img16.jpg", alt: "LIZA ENT 1325 NS CNC router machine with accessories", width: 1460, height: 1077 },
];

export default function GalleryPage() {
  return (
    <main>
      <InternalPageHero
        badge="Gallery"
        title="See the machines, details, and workshop setups."
        description="Explore LIZA CNC router models, product highlights, and real installation visuals."
        secondaryHref="/products"
        secondaryLabel="Browse Products"
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-900">
              CNC Router Gallery
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Built for the shop floor.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">
              Product views and on-site machine setups from the LIZA range.
            </p>
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <article
                key={item.image}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
