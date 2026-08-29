"use client";

import Image from "next/image";
import { useState } from "react";
import { companyInfo } from "../data/siteContent";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
};

function validateForm(values) {
  const errors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your name.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (phoneDigits.length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.city.trim() || values.city.trim().length < 2) {
    errors.city = "Please enter your city.";
  }

  return errors;
}

function FieldError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-xs font-medium text-rose-300">{message}</p>;
}

export default function QuickEnquirySection() {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);
    setSubmitMessage("");
    setSubmitState("idle");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          machineType: "Homepage Quick Enquiry",
          message:
            "Quick homepage enquiry submitted. Please contact the customer for machine discussion.",
          company: "",
          material: "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit enquiry right now.");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Your enquiry has been submitted successfully. Our team will contact you soon."
      );
      setReferenceId(result.referenceId || "");
      setFormValues(initialForm);
      setErrors({});
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#03121b] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(6,24,35,0.98),rgba(2,11,18,1))] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <span className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-300">
                Quick Enquiry
              </span>

              <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Share your basic requirement and let us guide the right CNC
                router setup.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Simple form, faster response. Fill your details and our team
                can connect you for machine recommendation, pricing direction,
                and next-step discussion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Only essential details",
                  "Fast lead capture",
                  "Best for quick callbacks",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wide text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">
                      Name
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      value={formValues.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-2 w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/[0.04]"
                    />
                    <FieldError message={errors.fullName} />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-2 w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/[0.04]"
                    />
                    <FieldError message={errors.email} />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="mt-2 w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/[0.04]"
                    />
                    <FieldError message={errors.phone} />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-200">
                      City
                    </span>
                    <input
                      type="text"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="mt-2 w-full rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-cyan-400/[0.04]"
                    />
                    <FieldError message={errors.city} />
                  </label>
                </div>

                {submitMessage ? (
                  <div
                    className={`rounded-[22px] border px-4 py-3 text-sm ${
                      submitState === "success"
                        ? "border-lime-400/20 bg-lime-400/[0.08] text-lime-100"
                        : "border-rose-400/20 bg-rose-400/[0.08] text-rose-200"
                    }`}
                  >
                    <p>{submitMessage}</p>
                    {submitState === "success" && referenceId ? (
                      <p className="mt-1 font-semibold text-lime-300">
                        Reference ID: {referenceId}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 px-8 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(163,230,53,0.28)] transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>

                  <p className="max-w-xs text-sm leading-6 text-slate-400">
                    Prefer direct chat? Reach us on{" "}
                    <a
                      href={companyInfo.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>

            <div className="relative min-h-[360px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/cncImg/img1.jpg"
                alt="CNC router machine"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,18,0.12),rgba(2,11,18,0.75)),radial-gradient(circle_at_top,rgba(8,223,241,0.16),transparent_40%)]" />

              <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-white/10 bg-[#05131c]/82 p-5 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">
                      CNC Router
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Precision built for workshop and production work.
                    </h3>
                  </div>
                  <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">
                    Ready
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Machine Fit
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Wood, acrylic, PVC, signage
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Response
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Quick callback for next steps
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Guidance
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Practical help from enquiry to quote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
