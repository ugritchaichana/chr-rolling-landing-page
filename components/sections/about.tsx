"use client";

import { useLanguage } from "@/lib/i18n";
import { ShieldCheck, Gauge, Users } from "lucide-react";
import { ImageCarousel } from "@/components/ui/image-carousel";

const POINT_ICONS = [
  <ShieldCheck key="shield" className="h-5 w-5" strokeWidth={1.5} />,
  <Gauge key="gauge" className="h-5 w-5" strokeWidth={1.5} />,
  <Users key="users" className="h-5 w-5" strokeWidth={1.5} />,
];

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-padding bg-bg-surface"
      aria-label={t.about.heading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {t.about.heading}
            </h2>
            <p 
              className="mt-4 leading-relaxed text-text-secondary [&>strong]:text-accent-blue [&>strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: t.about.description }}
            />

            <div className="mt-8 flex flex-col gap-6">
              {t.about.points.map((point, i) => (
                <div key={point.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                    {POINT_ICONS[i]}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-text-secondary">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border-light shadow-card">
              <ImageCarousel
                images={[
                  { src: "/images/machined-dies.webp", alt: "Precision CNC machined rollers for tube mill machinery" },
                  { src: "/images/cnc-lathe.webp", alt: "CNC Lathe manufacturing" },
                  { src: "/images/Product/Roller/steel-roller-01.webp", alt: "Steel roller products" }
                ]}
                className="h-full max-h-[520px] min-h-[520px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
