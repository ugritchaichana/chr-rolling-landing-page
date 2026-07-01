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

        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Large Product Image Group */}
          <div className="w-full lg:w-1/2 relative flex justify-center p-4 mb-8 lg:mb-0">
            <div className="relative w-full">
              <Image
                src="/images/Product/Machine/custom-roll-forming-01.webp"
                alt={dict.items[0].imageAlt || "ออกแบบเครื่องจักรรีดท่อ หจก ซีเอชพี โรลลิ่ง วิศวกรรม"}
                width={1000}
                height={800}
                className="w-full h-auto rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-border-light/50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating Secondary Image (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-2/5 max-w-[280px] rounded-xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] ring-[6px] ring-bg-primary bg-bg-primary">
                <Image
                  src="/images/Product/Machine/custom-steel-roller-Part.webp"
                  alt={dict.items[2].imageAlt || "ชิ้นส่วนเครื่องจักรกล Modular Parts"}
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {dict.items.map((item: any, index: number) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-secondary text-accent-blue transition-colors group-hover:bg-accent-blue group-hover:text-white shadow-sm border border-border-light group-hover:border-accent-blue">
                  <span className="text-xl font-bold">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 transition-colors group-hover:text-accent-blue">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <a
                href="#rfq"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-text-primary px-8 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-blue hover:shadow-lg hover:shadow-accent-blue/25"
              >
                {t.nav.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
