"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Mail, Phone, MapPin, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"

const serviceOptions = [
  "Custom Rolling Tools",
  "Machine Construction",
  "Modification & Overhaul",
  "Other / Not sure",
]

export function RfqForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rfq" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Request a quote
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Send us your drawings — get a quote in 48 hours
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Share your blueprints, specifications, or a sample part. Our
              engineering team will review your requirements and respond with a
              detailed, made-to-order proposal.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-medium text-foreground">+66 2 000 0000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">sales@chprolling.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Workshop</p>
                  <p className="font-medium text-foreground">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-brand-red" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                  Thank you
                </h3>
                <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  Your request has been received. Our engineering team will get
                  back to you within two business days.
                </p>
                <Button
                  className="mt-6 bg-brand text-brand-foreground hover:bg-brand/90"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full name <span className="text-brand-red">*</span>
                    </label>
                    <input id="name" name="name" required className={fieldClass} placeholder="Jane Engineer" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company <span className="text-brand-red">*</span>
                    </label>
                    <input id="company" name="company" required className={fieldClass} placeholder="Acme Steel Co." />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Work email <span className="text-brand-red">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} placeholder="jane@acmesteel.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input id="phone" name="phone" className={fieldClass} placeholder="+66 ..." />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service needed
                  </label>
                  <select id="service" name="service" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="details" className="text-sm font-medium text-foreground">
                    Project details <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    className={fieldClass}
                    placeholder="Describe the part, quantity, material, dimensions, and any reference drawings."
                  />
                </div>

                <label
                  htmlFor="file"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-brand"
                >
                  <Paperclip className="size-4 text-brand" />
                  Attach blueprints or drawings (PDF, DWG, STEP)
                  <input id="file" name="file" type="file" className="hidden" />
                </label>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                >
                  Submit request
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We respect your confidentiality. Drawings are used only to
                  prepare your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
