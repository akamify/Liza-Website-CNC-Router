"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Crosshair,
  DraftingCompass,
  Factory,
  Gauge,
  Gem,
  Grid2X2,
  MoveRight,
  PencilLine,
  Phone,
  ScanLine,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

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
        min-h-[535px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        px-5
        py-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-cyan-400
        hover:shadow-xl
        sm:px-6
        sm:pb-6
      "
    >
      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-[260px]
          w-[260px]
          rounded-full
          bg-slate-50
          blur-[80px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/2
          h-[260px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-slate-50
          blur-[90px]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-20
          flex
          h-[56px]
          w-[56px]
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-200
          bg-cyan-50
          shadow-xs
          transition-all
          duration-300
          group-hover:border-cyan-400
          group-hover:bg-cyan-100
        "
      >
        <Icon
          size={26}
          strokeWidth={1.8}
          className="text-cyan-700"
        />
      </div>

      {/* Machine visual */}
      <div
        className="
          relative
          mt-[-20px]
          flex
          h-[265px]
          items-center
          justify-center
          sm:h-[285px]
          lg:h-[300px]
        "
      >
        {/* Tech grid */}
        <div
          className="
            absolute
            inset-x-4
            bottom-8
            h-[115px]
            opacity-[0.17]
            [background-image:linear-gradient(rgba(19,210,235,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(19,210,235,0.2)_1px,transparent_1px)]
            [background-size:28px_28px]
            [mask-image:linear-gradient(to_top,black,transparent)]
          "
        />

        <div
          className="
            absolute
            bottom-5
            left-1/2
            h-[50px]
            w-[78%]
            -translate-x-1/2
            rounded-[50%]
            bg-cyan-400/[0.08]
            blur-2xl
          "
        />

        <img
          src={product.image}
          alt={product.title}
          draggable={false}
          className="
            relative
            z-10
            max-h-[260px]
            w-full
            object-contain
            drop-shadow-[0_30px_35px_rgba(0,0,0,0.42)]
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.045]
            group-hover:drop-shadow-[0_35px_38px_rgba(0,0,0,0.5)]
            sm:max-h-[280px]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-auto">
        <h3
          className="
            text-[24px]
            font-black
            tracking-tight
            text-slate-900
            sm:text-[26px]
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
            mt-3.5
            max-w-[95%]
            text-[14px]
            font-medium
            leading-[1.65]
            text-slate-600
            sm:text-[15px]
          "
        >
          {product.description}
        </p>

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-2
            min-[470px]:grid-cols-3
          "
        >
          {product.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <div
                key={feature.label}
                className="
                  flex
                  min-h-[42px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-2
                  text-center
                  text-[12px]
                  font-semibold
                  text-slate-800
                  transition-all
                  duration-200
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  sm:text-[12.5px]
                "
              >
                <FeatureIcon
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-emerald-600"
                />

                <span>{feature.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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

      {/* Corner gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          bg-[linear-gradient(135deg,rgba(255,255,255,0.025),transparent_35%,transparent_70%,rgba(0,220,255,0.025))]
        "
      />
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
        sm:py-8
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
            gap-12
            lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.9fr)]
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
                py-2
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
                mt-6
                max-w-[850px]
                text-[38px]
                font-black
                leading-[1.05]
                tracking-tight
                text-slate-900
                sm:text-[50px]
                lg:text-[58px]
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
                mt-5
                max-w-[760px]
                text-[16px]
                font-medium
                leading-[1.6]
                text-slate-600
                sm:text-[17px]
              "
            >
              LIZA offers a complete range of CNC solutions — CNC Router
              Machine, Wood Carving Machine, and Wood Engraving Machine —
              engineered for precision manufacturing and woodworking
              excellence.
            </p>

            <div className="mt-6 h-[3px] w-[42px] rounded-full bg-cyan-600" />
          </div>

          {/* Right CTA panel */}
          <div
            className="
              relative
              flex
              min-h-[50px]
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* Tech circuit lines */}
            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                right-0
                hidden
                lg:block
              "
            >
              <div
                className="
                  absolute
                  left-[3%]
                  top-[5%]
                  h-[82%]
                  w-[78%]
                  rounded-l-[70px]
                  border-l
                  border-t
                  border-cyan-400/25
                "
              />

              <div
                className="
                  absolute
                  left-[7%]
                  top-[13%]
                  h-[68%]
                  w-[72%]
                  rounded-l-[58px]
                  border-l
                  border-t
                  border-cyan-400/20
                "
              />

              <div
                className="
                  absolute
                  left-[11%]
                  top-[21%]
                  h-[52%]
                  w-[65%]
                  rounded-l-[46px]
                  border-l
                  border-t
                  border-cyan-400/20
                "
              />

              <span className="absolute left-[1.8%] top-[44%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,220,255,1)]" />
              <span className="absolute left-[6.4%] top-[44%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,220,255,1)]" />
              <span className="absolute left-[10.5%] top-[44%] h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
            </div>

            {/* Dot pattern */}
            <div
              className="
                pointer-events-none
                absolute
                left-[25%]
                top-[26%]
                hidden
                h-[110px]
                w-[170px]
                opacity-25
                lg:block
                [background-image:radial-gradient(circle,#00dff0_1.5px,transparent_1.5px)]
                [background-size:15px_15px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                w-full
                max-w-[355px]
                flex-col
                gap-5
              "
            >
              <a
                href="#product-list"
                className="
                  group
                  flex
                  min-h-[58px]
                  items-center
                  justify-between
                  rounded-full
                  bg-[linear-gradient(90deg,#a8f000_0%,#22e4c4_48%,#09d6e7_100%)]
                  px-7
                  text-[#01131c]
                  shadow-[0_12px_40px_rgba(57,236,175,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_50px_rgba(55,240,180,0.3)]
                "
              >
                <span className="flex items-center gap-4 text-[15px] font-black sm:text-[16px]">
                  <Grid2X2 size={20} strokeWidth={2.3} />
                  Explore Products
                </span>

                <ArrowRight
                  size={21}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                data-enquiry-trigger="true"
                className="
                  group
                  flex
                  min-h-[58px]
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  border
                  border-cyan-400/50
                  bg-[#031620]/80
                  px-7
                  text-[15px]
                  font-bold
                  text-cyan-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-200
                  sm:text-[16px]
                "
                >
                  <Phone
                    size={21}
                  strokeWidth={1.9}
                  className="transition-transform duration-300 group-hover:rotate-6"
                  />

                  Get Quote
                </a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div
          id="product-list"
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-6
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

      {/* Bottom ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-1/2
          -z-10
          h-[340px]
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[110px]
        "
      />
    </section>
  );
}
