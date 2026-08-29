import Link from "next/link";

export default function InternalPageHero({
  badge,
  title,
  description,
  secondaryHref = "/products",
  secondaryLabel = "View Products",
}) {
  return (
    <section className="relative overflow-hidden bg-[#02070d] pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(8,223,241,0.12),transparent_22%),radial-gradient(circle_at_85%_75%,rgba(163,230,53,0.08),transparent_24%),linear-gradient(180deg,#02070d_0%,#04131d_60%,#031019_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(8,223,241,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,223,241,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            {badge}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.4rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              data-enquiry-trigger="true"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 px-7 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.3)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Get Enquiry
            </a>
            <Link
              href={secondaryHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-7 text-sm font-semibold text-cyan-200 transition-colors duration-300 hover:bg-cyan-400/[0.12]"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
