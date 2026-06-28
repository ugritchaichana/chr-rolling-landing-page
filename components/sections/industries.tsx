"use client";

import { useLanguage } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

export function Industries() {
  const { t } = useLanguage();

  return (
    <section
      id="industries"
      className="section-padding bg-bg-primary"
      aria-label={t.industries.heading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
              {t.industries.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {t.industries.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              {t.industries.subheading}
            </p>
          </div>

          {/* Industry grid */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-light bg-border-light sm:grid-cols-2">
            {t.industries.items.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 bg-bg-surface px-5 py-4"
              >
                {/* Circle dot icon */}
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-accent-red"
                />
                <span className="font-medium text-text-primary">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
