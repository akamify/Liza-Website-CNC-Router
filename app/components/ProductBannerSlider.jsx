"use client";

import Image from "next/image";
import { productCatalog } from "../data/siteContent";

const productBanners = [
  {
    id: "banner-1",
    badge: "Heavy Duty Router",
    title: "Industrial CNC Router Machine",
    subtitle: "Heavy steel frame, high precision & 24/7 continuous workshop production.",
    image: "/cncImg/img1.jpg",
    tags: ["High Precision", "6.0KW Spindle", "Heavy Body"],
    machineType: "CNC Router Machine",
  },
  {
    id: "banner-2",
    badge: "3D Carving Master",
    title: "Wood Carving CNC Machine",
    subtitle: "Designed for intricate 3D woodwork, temple panels & decorative art.",
    image: "/cncImg/img2.jpg",
    tags: ["Wood Detail", "Smooth Edge", "3D Carving"],
    machineType: "Wood Carving Machine",
  },
  {
    id: "banner-3",
    badge: "Fine Detailing",
    title: "Wood Engraving CNC Machine",
    subtitle: "High precision etching for text, logos, nameplates & fine branding.",
    image: "/cncImg/img3.jpg",
    tags: ["Fine Engraving", "Logo Detailing", "Sharp Finish"],
    machineType: "Wood Engraving Machine",
  },
  {
    id: "banner-4",
    badge: "High Output Series",
    title: "Production Workshop Router",
    subtitle: "High speed travel & vacuum table for fast sheet cutting & panel work.",
    image: "/cncImg/img1.jpg",
    tags: ["24m/min Speed", "Vacuum Bed", "DSP Control"],
    machineType: "CNC Router Machine",
  },
  {
    id: "banner-5",
    badge: "Craftsmanship Edition",
    title: "Decorative Panel Carver",
    subtitle: "Clean carving finish for furniture, wall partitions & interior decor.",
    image: "/cncImg/img2.jpg",
    tags: ["Interior Decor", "MDF & Wood", "Repeat Fit"],
    machineType: "Wood Carving Machine",
  },
  {
    id: "banner-6",
    badge: "Signage & Branding",
    title: "Acrylic & Wood Engraver",
    subtitle: "Versatile engraver for acrylic display, PVC sheets & wooden plaques.",
    image: "/cncImg/img3.jpg",
    tags: ["Acrylic & PVC", "Branding Plates", "Zero Vibration"],
    machineType: "Wood Engraving Machine",
  },
];

export default function ProductBannerSlider() {
  // Duplicate array once for seamless 0-gap loop (-50% translation back to 0%)
  const doubleBanners = [...productBanners, ...productBanners];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-8 text-slate-900 border-b border-slate-200">
      {/* Background ambient glow effects */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Section Header */}
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left sm:flex sm:items-end sm:justify-between">
        <div>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Featured Machine Lineup & Capabilities
          </h2>
        </div>

      </div>

      {/* Outer Slider Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] py-2">
        {/* Continuous Track */}
        <div className="animate-marquee-smooth flex gap-5 px-3">
          {doubleBanners.map((banner, idx) => (
            <article
              key={`${banner.id}-${idx}`}
              className="group relative flex w-[340px] sm:w-[420px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-md"
            >
              {/* Left Side: Product Image - Full card height with 0 Y-axis empty space */}
              <div className="relative w-[130px] sm:w-[160px] shrink-0 overflow-hidden border-r border-slate-100 bg-slate-100">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 640px) 130px, 160px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Right Side: Details & CTA */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <span className="inline-block rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-800">
                    {banner.badge}
                  </span>

                  <h3 className="mt-2 text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                    {banner.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600 font-medium line-clamp-2">
                    {banner.subtitle}
                  </p>
                </div>

                <div className="mt-3">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {banner.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Direct Enquiry Button */}
                  <button
                    type="button"
                    data-enquiry-trigger="true"
                    data-machine-type={banner.machineType}
                    className="w-full inline-flex min-h-[36px] items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-4 text-xs font-bold text-white shadow-xs hover:shadow-md transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <span className="text-white">Get Machine Quote</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
