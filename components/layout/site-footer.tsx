"use client";

import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  const { t } = useLanguage()

  const columns = [
    {
      heading: t.footer.capabilitiesHeading,
      links: [
        { label: t.footer.capabilitiesLinks[0], href: "/capabilities" },
        { label: t.footer.capabilitiesLinks[1], href: "/capabilities" },
        { label: t.footer.capabilitiesLinks[2], href: "/capabilities" },
      ],
    },
    {
      heading: t.footer.companyHeading,
      links: [
        { label: t.footer.companyLinks[0].label, href: "/about" },
        { label: t.footer.companyLinks[1].label, href: "/process" },
        { label: t.footer.companyLinks[2].label, href: "/industries" },
      ],
    },
    {
      heading: t.footer.contactHeading,
      links: [
        { label: t.footer.contactLinks[0].label, href: "/contact" },
        { label: t.footer.contactLinks[1].label, href: "mailto:sales@chprolling.com" },
        { label: t.footer.contactLinks[2].label, href: "tel:+6620000000" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border-light bg-bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Image
              src="/images/logo-chp.png"
              alt="CHP Rolling Engineering"
              width={200}
              height={60}
              className="h-12 sm:h-20"
              style={{ width: "auto" }}
            />
            <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
              {t.footer.description}
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border-light pt-6 sm:flex-row">
          <p className="text-sm text-text-secondary">
            {t.footer.copyright}
          </p>
          <p className="text-sm text-text-secondary">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
