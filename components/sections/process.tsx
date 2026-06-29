"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

import { FileText, Ruler, Factory, PackageCheck } from "lucide-react";

const STEP_ICONS = [
  <FileText key="file" className="h-5 w-5" strokeWidth={1.5} />,
  <Ruler key="ruler" className="h-5 w-5" strokeWidth={1.5} />,
  <Factory key="factory" className="h-5 w-5" strokeWidth={1.5} />,
  <PackageCheck key="check" className="h-5 w-5" strokeWidth={1.5} />,
];

export function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="section-padding bg-bg-surface"
      aria-label={t.process.heading}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image - left on desktop, bottom on mobile */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border-light shadow-card">
              <Image
                src="/images/cnc-lathe.webp"
                alt="CNC turning lathe with control panel used to machine CHP custom rolling tools"
                width={1100}
                height={825}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Steps - right on desktop, top on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
              {t.process.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {t.process.heading}
            </h2>
            <p 
              className="mt-4 leading-relaxed text-text-secondary [&>strong]:text-accent-blue [&>strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: t.process.subheading }}
            />

            <ol className="mt-8 flex flex-col gap-6">
              {t.process.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white">
                    {STEP_ICONS[i]}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">
                      <span className="mr-2 text-accent-red">
                        0{i + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
