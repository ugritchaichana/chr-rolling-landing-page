"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const images = [
  "/images/Service/chp-machinery-repair-service-01.webp",
  "/images/Service/chp-machinery-repair-service-02.webp",
  "/images/Service/chp-machinery-repair-service-03.webp",
];

export function MaintenanceOverhaul() {
  const { t } = useLanguage();
  const dict = t.maintenanceOverhaul;

  return (
    <section
      id="maintenance-overhaul"
      className="section-padding bg-bg-primary"
      aria-label="บริการซ่อมบำรุงและโมดิฟาย"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
            {dict.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {dict.heading}
          </h2>
          <p 
            className="mt-4 text-lg leading-relaxed text-text-secondary [&>strong]:text-accent-blue [&>strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: dict.description }}
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {dict.items.map((item: any, i: number) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-bg-surface shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="overflow-hidden">
                <Image
                  src={images[i]}
                  alt={item.title}
                  width={600}
                  height={400}
                  priority={i <= 2}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <a
                  href="#rfq"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-red"
                >
                  {t.nav.cta}
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
