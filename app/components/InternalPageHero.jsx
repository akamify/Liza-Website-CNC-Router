import Link from "next/link";

export default function InternalPageHero({
  badge,
  title,
  description,
  secondaryHref = "/products",
  secondaryLabel = "View Products",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-sky-50/40 to-slate-50 pb-10 pt-24 sm:pb-14 sm:pt-28 border-b border-slate-200">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-900 shadow-xs">
            {badge}
          </span>

          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base font-medium">
            {description}
          </p>

          <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#"
              data-enquiry-trigger="true"
              className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-7 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <span className="text-white">Get Enquiry</span>
            </a>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-7 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 hover:border-slate-400"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
