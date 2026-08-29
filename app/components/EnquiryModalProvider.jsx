"use client";

import { useEffect, useMemo, useState } from "react";

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

function validateForm(values) {
  const errors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (phoneDigits.length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.machineType.trim()) {
    errors.machineType = "Please select the machine you need.";
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

  return <p className="mt-1.5 text-xs font-medium text-rose-300">{message}</p>;
}

export default function EnquiryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState("idle");
  const [referenceId, setReferenceId] = useState("");
  const [submitError, setSubmitError] = useState("");

  const machineOptions = useMemo(
    () => [
      "CNC Router Machine",
      "Wood Carving Machine",
      "Wood Engraving Machine",
      "Custom Requirement",
    ],
    []
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormValues(initialForm);
    setErrors({});
    setIsSubmitting(false);
    setSubmissionState("idle");
    setReferenceId("");
    setSubmitError("");
  };

  useEffect(() => {
    const openModal = () => {
      if (submissionState === "success") {
        resetForm();
      }

      setIsOpen(true);
    };

    const handleTriggerClick = (event) => {
      const trigger = event.target.closest("[data-enquiry-trigger]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      openModal();
    };

    document.addEventListener("click", handleTriggerClick);
    window.addEventListener("open-enquiry-modal", openModal);

    return () => {
      document.removeEventListener("click", handleTriggerClick);
      window.removeEventListener("open-enquiry-modal", openModal);
    };
  }, [submissionState]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

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
    setSubmitError("");

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

      setSubmissionState("success");
      setReferenceId(result.referenceId || "");
      setFormValues(initialForm);
      setErrors({});
    } catch (error) {
      setSubmissionState("error");
      setSubmitError(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {children}

      {isOpen ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 sm:py-10">
          <button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-[#01070d]/82 backdrop-blur-md"
            onClick={closeModal}
          />

          <div className="relative z-[1] my-auto w-full max-w-[1120px] overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(5,22,31,0.99),rgba(3,13,20,1))] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="grid max-h-[82vh] lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(8,223,241,0.14),transparent_40%),linear-gradient(180deg,rgba(4,20,29,0.98),rgba(3,13,20,1))] p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-lime-300">
                  Get Enquiry
                </div>

                <h2 className="mt-5 text-2xl font-black leading-[1.1] text-white sm:text-[2rem]">
                  Tell us your machine or production requirement.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Share the job type, material, and machine need. We will use
                  that to guide quote and machine selection.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Quick response flow for quote requests",
                    "Useful for custom router and workshop enquiries",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-h-[82vh] overflow-y-auto p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-cyan-300">
                      Enquiry Form
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Fill the required details and submit.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg font-bold text-slate-200 transition-colors hover:border-cyan-400/30 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                {submissionState === "success" ? (
                  <div className="mt-6 rounded-[24px] border border-lime-400/20 bg-lime-400/[0.08] p-5">
                    <h3 className="text-2xl font-black text-white">
                      Enquiry submitted successfully
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Your request has been saved. We can now follow up on your
                      machine requirement.
                    </p>
                    {referenceId ? (
                      <p className="mt-4 text-sm font-semibold text-lime-300">
                        Reference ID: {referenceId}
                      </p>
                    ) : null}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-teal-400 px-6 text-sm font-bold text-slate-950"
                      >
                        Submit Another Enquiry
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          resetForm();
                          closeModal();
                        }}
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-slate-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="mt-6 space-y-3.5" onSubmit={handleSubmit}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-200">
                          Full Name
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          value={formValues.fullName}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                        />
                        <FieldError message={errors.fullName} />
                      </label>

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
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                        />
                        <FieldError message={errors.phone} />
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-200">
                          Email Address
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          placeholder="Enter email"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                        />
                        <FieldError message={errors.email} />
                      </label>

                      <label className="block">
                        <span className="text-sm font-semibold text-slate-200">
                          Company / Workshop
                        </span>
                        <input
                          type="text"
                          name="company"
                          value={formValues.company}
                          onChange={handleChange}
                          placeholder="Business name"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                        />
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-slate-200">
                          City
                        </span>
                        <input
                          type="text"
                          name="city"
                          value={formValues.city}
                          onChange={handleChange}
                          placeholder="Your city"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-semibold text-slate-200">
                          Machine Type
                        </span>
                        <select
                          name="machineType"
                          value={formValues.machineType}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-[#08151e] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/40"
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
                      <span className="text-sm font-semibold text-slate-200">
                        Material / Application
                      </span>
                      <input
                        type="text"
                        name="material"
                        value={formValues.material}
                        onChange={handleChange}
                        placeholder="Wood, acrylic, PVC, signage, carving..."
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-slate-200">
                        Requirement Details
                      </span>
                      <textarea
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your material, machine size, job type, or custom requirement."
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
                      />
                      <FieldError message={errors.message} />
                    </label>

                    {submissionState === "error" && submitError ? (
                      <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.08] px-4 py-3 text-sm text-rose-200">
                        {submitError}
                      </div>
                    ) : null}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 px-7 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(163,230,53,0.3)] transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                      </button>

                      <p className="text-xs leading-6 text-slate-400">
                        We can extend this later to WhatsApp, email, or admin
                        dashboard notifications.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
