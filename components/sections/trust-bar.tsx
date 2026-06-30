"use client";

import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section
      id="trust-bar"
      className="border-y border-border-light bg-bg-surface"
      aria-label="Key metrics"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {t.trustBar.items.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 px-4 py-8 text-center"
          >
            <span className="text-3xl font-extrabold text-accent-blue sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-text-secondary">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
