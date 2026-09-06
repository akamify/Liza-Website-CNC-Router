"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Crosshair,
  DraftingCompass,
  Factory,
  Gauge,
  Gem,
  Grid2X2,
  MessageSquareQuote,
  PencilLine,
  Phone,
  ScanLine,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export function EnquiryIcon({ size = 18, className = "", strokeWidth = 1.9 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </svg>
  );
}

const products = [
  {
    slug: "cnc-router-machine",
    title: "CNC Router Machine",
    description:
      "Heavy-duty CNC routers for cutting, shaping and profiling a wide range of materials with unmatched accuracy and speed.",
    image: "/cncImg/img1.jpg",
    icon: Settings,
    features: [
      {
        label: "High Precision",
        icon: Target,
      },
      {
        label: "Heavy Duty",
        icon: ShieldCheck,
      },
      {
        label: "Industrial Use",
        icon: Factory,
      },
      {
        label: "Production Ready",
        icon: BadgeCheck,
      },
    ],
  },
  {
    slug: "wood-carving-machine",
    title: "Wood Carving Machine",
    description:
      "Precision carving machines designed for intricate woodwork, 3D designs and fine detailing with smooth, consistent results.",
    image: "/cncImg/img2.jpg",
    icon: PencilLine,
    features: [
      {
        label: "Wood Detail",
        icon: DraftingCompass,
      },
      {
        label: "Smooth Finish",
        icon: Sparkles,
      },
      {
        label: "Creative Design",
        icon: PencilLine,
      },
      {
        label: "3D Relief Work",
        icon: Gem,
      },
    ],
  },
  {
    slug: "wood-engraving-machine",
    title: "Wood Engraving Machine",
    description:
      "High-precision engraving machines for fine etching, text, logos and artistic designs on wood and various surfaces.",
    image: "/cncImg/img3.jpg",
    icon: ScanLine,
    features: [
      {
        label: "Fine Engraving",
        icon: DraftingCompass,
      },
      {
        label: "Sharp Output",
        icon: Crosshair,
      },
      {
        label: "High Speed Bit",
        icon: Gauge,
      },
      {
        label: "Production Ready",
        icon: BadgeCheck,
      },
    ],
  },
];

function ProductCard({ product, index }) {
  const Icon = product.icon;

  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-cyan-400
        hover:shadow-lg
        sm:p-5
      "
    >
      {/* Machine visual */}
      <div
        className="
          relative
          mt-1
          flex
          h-[220px]
          items-center
          justify-center
          sm:h-[250px]
        "
      >
        <img
          src={product.image}
          alt={product.title}
          draggable={false}
          className="
            relative
            z-10
            max-h-[210px]
            w-full
            object-contain
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.03]
            sm:max-h-[240px]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-auto flex flex-col justify-between flex-1">
        <div>
          <h3
            className="
              text-[22px]
              font-black
              tracking-tight
              text-slate-900
              sm:text-[24px]
            "
          >
            {product.title}
          </h3>

          <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-[25px] rounded-full bg-emerald-500" />
            <span className="h-[3px] w-[15px] rounded-full bg-cyan-500" />
          </div>

          <p
            className="
              mt-3
              text-[13.5px]
              font-medium
              leading-[1.6]
              text-slate-600
              sm:text-[14px]
            "
          >
            {product.description}
          </p>

          {/* 4 Feature Badges — 2 per line on mobile */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {product.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="
                    flex
                    min-h-[38px]
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-2
                    py-1.5
                    text-center
                    text-[11px]
                    font-semibold
                    text-slate-800
                    transition-all
                    duration-200
                    hover:border-emerald-300
                    hover:bg-emerald-50
                    sm:text-[12px]
                  "
                >
                  <FeatureIcon
                    size={14}
                    strokeWidth={1.8}
                    className="shrink-0 text-emerald-600"
                  />

                  <span className="truncate">{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons — 2 per line on mobile */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:shadow-md transition-all text-center"
          >
            <span className="text-white">View Details</span>
          </Link>
          <a
            href="#"
            data-enquiry-trigger="true"
            data-machine-type={product.title}
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400 cursor-pointer text-center"
          >
            <EnquiryIcon size={15} className="text-cyan-700 shrink-0" />
            <span>Get Enquiry</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductRange() {
  return (
    <section
      id="products"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-12
        sm:py-16
        border-b
        border-slate-200
      "
    >
      {/* Main background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-slate-50" />

      <div className="mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)]
            lg:gap-10
          "
        >
          {/* Left */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-cyan-200
                bg-cyan-50
                px-4
                py-1.5
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-500
                "
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-cyan-900
                  sm:text-[12px]
                "
              >
                Our Product Range
              </span>
            </div>

            <h2
              className="
                mt-4
                max-w-[850px]
                text-[32px]
                font-black
                leading-[1.1]
                tracking-tight
                text-slate-900
                sm:text-[46px]
                lg:text-[54px]
              "
            >
              Solutions Built for
              <span
                className="
                  mt-1
                  block
                  bg-gradient-to-r
                  from-cyan-700
                  via-teal-600
                  to-emerald-700
                  bg-clip-text
                  text-transparent
                "
              >
                Modern Production.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[760px]
                text-[15px]
                font-medium
                leading-[1.6]
                text-slate-600
                sm:text-[16.5px]
              "
            >
              LIZA offers a complete range of CNC solutions — CNC Router
              Machine, Wood Carving Machine, and Wood Engraving Machine —
              engineered for precision manufacturing and woodworking
              excellence.
            </p>

            <div className="mt-5 h-[3px] w-[42px] rounded-full bg-cyan-600" />
          </div>

          {/* Right CTA panel — 2 per line on mobile */}
          <div className="relative flex w-full justify-start lg:justify-end">
            <div className="grid grid-cols-2 gap-3 w-full max-w-[360px]">
              <a
                href="/products"
                className="
                  group
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[linear-gradient(90deg,#a8f000_0%,#22e4c4_48%,#09d6e7_100%)]
                  px-4
                  text-[#01131c]
                  shadow-xs
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <span className="flex items-center gap-2 text-xs font-black sm:text-sm">
                  <Grid2X2 size={16} strokeWidth={2.3} />
                  Products
                </span>
              </a>

              <a
                href="#"
                data-enquiry-trigger="true"
                className="
                  group
                  flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-500/40
                  bg-slate-900
                  px-4
                  text-xs
                  font-bold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  sm:text-sm
                "
              >
                <EnquiryIcon
                  size={16}
                  strokeWidth={1.9}
                />
                Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          id="product-list"
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
