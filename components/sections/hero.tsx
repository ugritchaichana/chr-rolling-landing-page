"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { CheckCircle2, Factory } from "lucide-react";

// TODO: [Phase 2 Hardening] - Replace generated imagery with real factory photos via next/image + AVIF.
export function Hero() {
  const { t, locale } = useLanguage();

  const headline = locale === "en" ? t.hero.headlineControl : "หจก. ซีเอชพี โรลลิ่ง วิศวกรรม | ผู้เชี่ยวชาญด้านลูกกลิ้งรีดท่อ รีดเหล็ก และเครื่องจักรกลอุตสาหกรรมเฉพาะทาง";
  const subtitle = locale === "en" ? t.hero.subtitle : "ออกแบบ ผลิต โมดิฟาย และซ่อมบำรุงครบวงจรตั้งแต่ต้นน้ำยันปลายน้ำ โดยทีมวิศวกรประสบการณ์สูง รองรับงานสเปกพิเศษ Made-to-Order 100% มั่นใจได้ในความแม่นยำและการส่งมอบไลน์ผลิตตรงเวลา";
  const ctaPrimary = locale === "en" ? t.hero.ctaPrimary : "ส่งแบบ Drawing ประเมินราคาฟรี";

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg-primary"
      aria-label={t.nav.home}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        {/* Left: text content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-light bg-bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
            <span
              className="inline-block h-1.5 w-1.5 bg-accent-red"
              style={{ borderRadius: "50%" }}
              aria-hidden="true"
            />
            {t.hero.badge}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {headline}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            {subtitle}
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-2">
            {t.hero.highlights.map((item: any) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-text-primary"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-red" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a href="#rfq" className="btn-primary">
              {ctaPrimary}
            </a>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border-light bg-bg-surface shadow-card-hover">
            <Image
              src="/images/Machine/chp-industrial-rolling-machine-01.webp"
              alt="เครื่องกลึง CNC ขนาดใหญ่ในโรงงาน หจก ซีเอชพี โรลลิ่ง วิศวกรรม กระบวนการผลิตลูกกลิ้งรีดสเปกพิเศษความแม่นยำสูง"
              width={1100}
              height={1400}
              priority
              loading="eager"
              className="h-full max-h-[560px] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating "25+ years" badge */}
          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 sm:flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-blue-light text-white shadow-lg">
              <Factory className="h-7 w-7 drop-shadow-md" />
            </div>
            <div className="flex flex-col">
              <p className="bg-gradient-to-br from-accent-blue via-accent-blue to-accent-red bg-clip-text font-mono text-4xl font-black text-transparent">
                {t.hero.yearsValue}
              </p>
              <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary">
                {t.hero.yearsLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
