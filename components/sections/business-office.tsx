"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function BusinessOffice() {
  const { t } = useLanguage();
  const dict = t.businessOffice;

  return (
    <section
      id="about"
      className="section-padding bg-bg-surface"
      aria-label="สำนักงานนัดหมายเจรจาธุรกิจ"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {dict.heading}
          </h2>

          <div className="prose prose-lg text-text-secondary">
            <p 
              className="[&>strong]:text-accent-blue [&>strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: dict.description1 }}
            />
            <p className="font-bold text-accent-blue mt-4">
              "{dict.description2}"
            </p>
          </div>

          <div className="mt-4">
            <a
              href="#" // Placeholder for Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-blue py-4 px-6 text-lg font-bold text-white shadow-sm transition-all hover:bg-accent-blue-dark active:scale-95 sm:w-auto"
            >
              <MapPin className="h-6 w-6" />
              {dict.googleMap}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-card">
            <Image
              src="/images/mockup-business-office.png"
              alt={dict.imageAlt || "สำนักงานติดต่อ หจก ซีเอชพี โรลลิ่ง วิศวกรรม สถานที่นัดพบเจรจาธุรกิจและวิเคราะห์แบบ Drawing โรงงาน"}
              width={800}
              height={600}
              className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
