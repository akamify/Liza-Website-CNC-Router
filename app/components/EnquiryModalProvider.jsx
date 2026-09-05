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

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
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

  return <p className="mt-1 text-xs font-semibold text-rose-600">{message}</p>;
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
    const openModal = (selectedMachine = "") => {
      if (submissionState === "success") {
        resetForm();
      }

      if (selectedMachine) {
        setFormValues((current) => ({
          ...current,
          machineType: selectedMachine,
        }));
        setErrors((current) => ({
          ...current,
          machineType: "",
        }));
      }

      setIsOpen(true);
    };

    const handleTriggerClick = (event) => {
      const trigger = event.target.closest("[data-enquiry-trigger]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      const machineType = trigger.getAttribute("data-machine-type") || "";
      openModal(machineType);
    };

    const handleCustomEvent = (event) => {
      const machineType = event?.detail?.machineType || "";
      openModal(machineType);
    };

    document.addEventListener("click", handleTriggerClick);
    window.addEventListener("open-enquiry-modal", handleCustomEvent);

    return () => {
      document.removeEventListener("click", handleTriggerClick);
      window.removeEventListener("open-enquiry-modal", handleCustomEvent);
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
        <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={closeModal}
          />

          <div className="relative z-[1] my-auto flex max-h-[92dvh] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl lg:max-h-[85vh] lg:grid lg:grid-cols-[290px_minmax(0,1fr)]">
            {/* Sidebar / Top Banner Header */}
            <div className="relative shrink-0 border-b border-slate-200 bg-slate-50 p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between lg:block">
                <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800">
                  Get Enquiry
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-700 shadow-xs hover:bg-slate-100 lg:hidden"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <h2 className="mt-2 text-lg font-black leading-tight text-slate-900 sm:mt-4 sm:text-2xl">
                Tell us your machine requirement.
              </h2>

              <p className="mt-1.5 hidden text-xs leading-relaxed text-slate-600 font-medium sm:block">
                Share job type, material, and machine need to guide quote and setup.
              </p>
            </div>

            {/* Form Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white max-h-[calc(92dvh-120px)] lg:max-h-[85vh]">
              <div className="hidden lg:flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-slate-900">
                    Enquiry Form
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 font-medium">
                    Fill the required details and submit.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-lg font-bold text-slate-700 transition-colors hover:bg-slate-200"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {submissionState === "success" ? (
                <div className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="text-xl font-black text-slate-900">
                    Enquiry submitted successfully
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">
                    Your request has been saved and emailed to our team. A confirmation email has also been sent to you.
                  </p>
                  {referenceId ? (
                    <p className="mt-3 text-sm font-bold text-emerald-800">
                      Reference ID: {referenceId}
                    </p>
                  ) : null}
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-6 text-sm font-bold text-white shadow-md"
                    >
                      <span className="text-white">Submit Another Enquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        closeModal();
                      }}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form className="mt-2 lg:mt-5 space-y-3" onSubmit={handleSubmit}>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
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
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
                      />
                      <FieldError message={errors.phone} />
                    </label>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
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
                        placeholder="Business name"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
                      />
                    </label>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        City
                      </span>
                      <input
                        type="text"
                        name="city"
                        value={formValues.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
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
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-600"
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
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
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
                      rows={3}
                      placeholder="Tell us about your material, machine size, job type, or custom requirement."
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-600"
                    />
                    <FieldError message={errors.message} />
                  </label>

                  {submissionState === "error" && submitError ? (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium text-rose-800">
                      {submitError}
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-7 text-sm font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-70"
                    >
                      <span className="text-white">{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
