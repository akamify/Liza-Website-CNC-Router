"use client";

import { useState } from "react";
import { companyInfo } from "../data/siteContent";
import { WhatsAppIcon } from "./FloatingWhatsAppButton";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  city: "",
  machineType: "",
  material: "",
  message: "",
};

const machineOptions = [
  "CNC Router Machine",
  "Wood Carving Machine",
  "Wood Engraving Machine",
  "Custom Requirement",
];

function validateForm(values) {
  const errors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your name.";
  }

  if (!values.phone.trim() || phoneDigits.length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.machineType.trim()) {
    errors.machineType = "Please select a machine type.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please share a few details about your requirement.";
  }

  return errors;
}

function FieldError({ message }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1 text-xs font-semibold text-rose-600">{message}</p>;
}

export default function ContactEnquiryFormSection() {
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
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit enquiry right now.");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Your enquiry has been submitted successfully. Confirmation has been emailed to you."
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
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-900">
                Enquiry Form
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Submit your CNC machine requirement.
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                Fill the details here. Owner and customer confirmation emails
                are sent through the enquiry system.
              </p>
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
                <span className="text-white">Chat on WhatsApp</span>
              </a>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name *
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <FieldError message={errors.fullName} />
                </label>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number *
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <FieldError message={errors.phone} />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <FieldError message={errors.email} />
                </label>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Company / Workshop
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                    placeholder="Business / workshop name"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    City
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Machine Type *
                  </span>
                  <select
                    name="machineType"
                    value={formValues.machineType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select machine type</option>
                    {machineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.machineType} />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Material / Application
                </span>
                <input
                  type="text"
                  name="material"
                  value={formValues.material}
                  onChange={handleChange}
                  placeholder="Wood, acrylic, PVC, signage, carving..."
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Requirement Details *
                </span>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about machine size, material, job type, or custom requirement."
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                />
                <FieldError message={errors.message} />
              </label>

              {submitMessage ? (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    submitState === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-rose-200 bg-rose-50 text-rose-900"
                  }`}
                >
                  <p>{submitMessage}</p>
                  {submitState === "success" && referenceId ? (
                    <p className="mt-1 font-bold text-emerald-800">
                      Reference ID: {referenceId}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-9 text-sm font-bold text-white shadow-md transition-transform duration-200 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <span className="text-white">
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
