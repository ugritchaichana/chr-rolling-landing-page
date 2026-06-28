"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

import { Wrench, Cog, RefreshCw, ArrowRight } from "lucide-react";

const CAPABILITY_ICONS = [
  <Wrench key="wrench" className="h-5 w-5" strokeWidth={1.5} />,
  <Cog key="cog" className="h-5 w-5" strokeWidth={1.5} />,
  <RefreshCw key="refresh" className="h-5 w-5" strokeWidth={1.5} />,
];

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section
      id="capabilities"
      className="section-padding bg-bg-primary"
      aria-label={t.capabilities.heading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {t.capabilities.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {t.capabilities.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.capabilities.items.map((cap, i) => (
            <article
              key={cap.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-bg-surface shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="overflow-hidden">
                <Image
                  src={cap.image}
                  alt={cap.imageAlt}
                  width={600}
                  height={400}
                  priority={i <= 2}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-blue/20 bg-accent-blue/10 text-accent-blue">
                  {CAPABILITY_ICONS[i]}
                </span>
                <h3 className="text-xl font-bold text-text-primary">
                  {cap.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {cap.description}
                </p>
                <a
                  href="#rfq"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-red"
                >
                  {t.capabilities.cta}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
