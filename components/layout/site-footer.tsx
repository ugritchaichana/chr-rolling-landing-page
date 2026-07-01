"use client";

import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  const { locale, t } = useLanguage()

  const columns = [
    {
      heading: t.footer.capabilitiesHeading,
      links: [
        { label: t.footer.capabilitiesLinks[0], href: `/${locale}/capabilities` },
        { label: t.footer.capabilitiesLinks[1], href: `/${locale}/capabilities` },
        { label: t.footer.capabilitiesLinks[2], href: `/${locale}/capabilities` },
      ],
    },
    {
      heading: t.footer.companyHeading,
      links: [
        { label: t.footer.companyLinks[0].label, href: `/${locale}/about` },
        { label: t.footer.companyLinks[1].label, href: `/${locale}/process` },
        { label: t.footer.companyLinks[2].label, href: `/${locale}/industries` },
      ],
    },
    {
      heading: t.footer.contactHeading,
      links: [
        { label: t.footer.contactLinks[0].label, href: `/${locale}/contact` },
        { label: t.footer.contactLinks[1].label, href: "mailto:cholla_chat@hotmail.com" },
        { label: t.footer.contactLinks[2].label, href: "tel:+66882299088" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border-light bg-bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Image
              src="/images/logo-chp.webp"
              alt="CHP Rolling Engineering"
              width={200}
              height={60}
              className="h-12 sm:h-20"
              style={{ width: "auto" }}
            />
            <p className="mt-4 text-pretty leading-relaxed text-text-secondary font-semibold">
              ห้างหุ้นส่วนจำกัด ซีเอชพี โรลลิ่ง วิศวกรรม <br/>
              (CHP ROLLING ENGINEERING LIMITED PARTNERSHIP)
            </p>
            <p className="mt-2 text-pretty leading-relaxed text-text-secondary">
              ที่อยู่สำนักงานติดต่อนัดพบ: 790/77 หมู่ที่ 2 ซอยประชาอุทิศ 90 ถนนประชาอุทิศ ต.บ้านคลองสวน อ.พระสมุทรเจดีย์ จ.สมุทรปราการ 10290
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className=" text-sm font-bold uppercase tracking-wider text-text-primary">
                {col.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-accent-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-border-light pt-6 sm:flex-row">
          <p className="text-sm text-text-secondary text-center">
            © 2026 ห้างหุ้นส่วนจำกัด ซีเอชพี โรลลิ่ง วิศวกรรม. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
