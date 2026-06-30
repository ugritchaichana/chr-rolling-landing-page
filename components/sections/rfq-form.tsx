"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-border-medium bg-bg-primary px-4 py-2.5 text-sm text-text-primary shadow-sm outline-none transition-colors placeholder:text-text-secondary/50 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20";

// TODO: [Phase 2 Hardening] - Wire to react-hook-form + @hookform/resolvers + zod leadFormSchema.
// TODO: [Phase 2 Hardening] - Add Turnstile widget and submitLead Server Action.
export function RfqForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    // TODO: [Phase 2 Hardening] - Replace with actual submitLead Server Action.
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  }

  return (
    <section
      id="rfq"
      className="section-padding bg-bg-primary"
      aria-label={t.rfqForm.heading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
              {t.rfqForm.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {t.rfqForm.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              {t.rfqForm.description}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-text-secondary">
                    {t.rfqForm.contactPhoneLabel}
                  </p>
                  <p className="font-medium text-text-primary">
                    {t.rfqForm.contactPhone}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-text-secondary">
                    {t.rfqForm.contactEmailLabel}
                  </p>
                  <p className="font-medium text-text-primary">
                    {t.rfqForm.contactEmail}
                  </p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-text-secondary">
                    {t.rfqForm.contactLocationLabel}
                  </p>
                  <p className="font-medium text-text-primary">
                    {t.businessOffice.contactInfo.addressValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border-light bg-bg-surface p-6 shadow-card sm:p-8">
            {formState === "success" ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <svg className="h-14 w-14 text-accent-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-2xl font-bold text-text-primary">
                  {t.rfqForm.success.heading}
                </h3>
                <p className="mt-2 max-w-sm leading-relaxed text-text-secondary">
                  {t.rfqForm.success.message}
                </p>
                <button
                  type="button"
                  className="btn-primary mt-6"
                  onClick={() => setFormState("idle")}
                >
                  {t.rfqForm.success.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {formState === "error" && (
                  <div
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    role="alert"
                  >
                    {t.rfqForm.error}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name and Company */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label
                      htmlFor="rfq-name"
                      className="text-sm font-medium text-text-primary"
                    >
                      {t.rfqForm.fields.name.label} <span className="text-accent-red">*</span>
                    </label>
                    <input
                      id="rfq-name"
                      name="name"
                      required
                      disabled={formState === "submitting"}
                      className={fieldClass}
                      placeholder={t.rfqForm.fields.name.placeholder}
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="rfq-phone"
                      className="text-sm font-medium text-text-primary"
                    >
                      {t.rfqForm.fields.phone.label} <span className="text-accent-red">*</span>
                    </label>
                    <input
                      id="rfq-phone"
                      name="phone"
                      required
                      disabled={formState === "submitting"}
                      className={fieldClass}
                      placeholder={t.rfqForm.fields.phone.placeholder}
                    />
                  </div>
                  {/* Line/Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="rfq-email"
                      className="text-sm font-medium text-text-primary"
                    >
                      {t.rfqForm.fields.email.label}
                    </label>
                    <input
                      id="rfq-email"
                      name="email"
                      disabled={formState === "submitting"}
                      className={fieldClass}
                      placeholder={t.rfqForm.fields.email.placeholder}
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="rfq-service"
                    className="text-sm font-medium text-text-primary"
                  >
                    {t.rfqForm.fields.service.label} <span className="text-accent-red">*</span>
                  </label>
                  <select
                    id="rfq-service"
                    name="service"
                    required
                    disabled={formState === "submitting"}
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- {t.rfqForm.fields.service.placeholder} --
                    </option>
                    {t.rfqForm.fields.service.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* File upload */}
                <label
                  htmlFor="rfq-file"
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border-medium bg-bg-primary px-4 py-3 text-sm text-text-secondary transition-colors hover:border-accent-blue"
                >
                  <svg className="h-4 w-4 text-accent-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                  </svg>
                  {t.rfqForm.fields.file.label}
                  <input
                    id="rfq-file"
                    name="file"
                    type="file"
                    className="hidden"
                    accept=".pdf,.dwg,.dxf"
                    disabled={formState === "submitting"}
                  />
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {formState === "submitting" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {t.rfqForm.submitting}
                    </span>
                  ) : (
                    t.rfqForm.submit
                  )}
                </button>

                <p className="text-center text-xs text-text-secondary">
                  {t.rfqForm.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
