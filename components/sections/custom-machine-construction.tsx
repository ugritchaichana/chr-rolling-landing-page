"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function CustomMachineConstruction() {
  const { t } = useLanguage();
  const dict = t.machineConstruction;

  return (
    <section
      id="custom-machine-construction"
      className="section-padding bg-bg-surface"
      aria-label="ออกแบบและสร้างเครื่องจักรรีดขึ้นรูปอุตสาหกรรม"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue">
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-bg-primary shadow-card transition-all hover:shadow-card-hover">
            <div className="overflow-hidden">
              <Image
                src="/images/Product/Machine/custom-roll-forming-01.webp"
                alt="ออกแบบเครื่องจักรรีดท่อ หจก ซีเอชพี โรลลิ่ง วิศวกรรม เครื่องรีดขึ้นรูปท่อระบบ Hybrid 4-Roll type Squeeze"
                width={800}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-8">
              <h3 className="text-2xl font-bold text-text-primary">
                {dict.items[0].title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {dict.items[0].description}
              </p>
              <a
                href="#rfq"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-red"
              >
                {t.nav.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </article>

          <article className="group flex flex-col overflow-hidden rounded-2xl border border-border-light bg-bg-primary shadow-card transition-all hover:shadow-card-hover">
            <div className="overflow-hidden">
              <Image
                src="/images/Product/Machine/custom-steel-roller-Part.webp"
                alt="ชิ้นส่วนเครื่องจักรกล Modular Parts"
                width={800}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-8">
              <h3 className="text-2xl font-bold text-text-primary">
                {dict.items[2].title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {dict.items[2].description}
              </p>
              <a
                href="#rfq"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-red"
              >
                {t.nav.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
