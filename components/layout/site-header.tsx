"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, QrCode, Copy, Check, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [lineModalOpen, setLineModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLineId = () => {
    navigator.clipboard.writeText("@chprolling");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const pathname = usePathname();
  const { locale, t, setLocale } = useLanguage();

  const navLinks = [
    { label: locale === "en" ? "Home" : "หน้าแรก", href: "/" },
    { label: locale === "en" ? "Services" : "สินค้าและบริการ", href: "/services" },
    { label: locale === "en" ? "About Us" : "เกี่ยวกับเรา", href: "/about" },
    { label: locale === "en" ? "Contact Us" : "ติดต่อเรา", href: "/contact" },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-border-light bg-bg-surface/95 backdrop-blur-sm"
        role="banner"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="CHP Rolling Engineering home"
          >
            <Image
              src="/images/logo-chp.webp"
              alt="CHP Rolling Engineering"
              width={200}
              height={56}
              className="h-14 sm:h-20"
              style={{ width: "auto" }}
              priority
              sizes="200px"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label={locale === "en" ? "Primary" : "เมนูหลัก"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-blue ${pathname === link.href
                  ? "text-accent-blue"
                  : "text-text-secondary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right: Phone + Line + lang */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:0882299088"
              className="group flex items-center gap-3 rounded-full border border-border-light bg-bg-surface py-1.5 pl-2 pr-4 shadow-sm transition-all hover:border-accent-blue/30 hover:bg-accent-blue/5 hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-blue text-white shadow-sm transition-transform group-hover:scale-105">
                <Phone className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                  {locale === "en" ? "Contact Number" : "เบอร์ติดต่อ"}
                </span>
                <span className="font-mono text-sm font-bold text-accent-blue transition-colors group-hover:text-accent-blue-dark">
                  088-229-9088
                </span>
              </div>
            </a>


            <Image src="/images/line-icon.webp" alt="LINE" width={70} height={70} className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 hover:shadow-2xl" onClick={() => setLineModalOpen(true)} />

            {/* Language Dropdown */}
            <div
              className="group relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex min-h-[48px] items-center gap-2 rounded-full bg-bg-surface px-3 py-2 font-mono text-sm font-bold text-text-primary transition-colors hover:text-accent-blue"
                aria-expanded={langDropdownOpen}
              >
                <img
                  src={
                    locale === "en"
                      ? "https://hatscripts.github.io/circle-flags/flags/gb.svg"
                      : "https://hatscripts.github.io/circle-flags/flags/th.svg"
                  }
                  alt={locale === "en" ? "UK Flag" : "Thai Flag"}
                  className="h-4 w-4 opacity-90"
                />
                {locale.toUpperCase()}
                <svg className={`h-4 w-4 text-text-secondary transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute right-0 top-full mt-2 w-32 origin-top-right overflow-hidden rounded-2xl border border-border-light bg-bg-surface shadow-card transition-all duration-200 ${langDropdownOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => { setLocale("en"); setLangDropdownOpen(false); }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left font-mono text-sm font-bold transition-colors hover:bg-bg-primary hover:text-accent-blue"
                >
                  <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="UK Flag" className="h-4 w-4 opacity-90" />
                  EN
                </button>
                <div className="mx-4 border-b border-border-light" />
                <button
                  type="button"
                  onClick={() => { setLocale("th"); setLangDropdownOpen(false); }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left font-mono text-sm font-bold transition-colors hover:bg-bg-primary hover:text-accent-blue"
                >
                  <img src="https://hatscripts.github.io/circle-flags/flags/th.svg" alt="Thai Flag" className="h-4 w-4 opacity-90" />
                  TH
                </button>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-red lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={locale === "en" ? "Open menu" : "เปิดเมนู"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border-light bg-bg-surface transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 border-t-0 opacity-0"
            }`}
        >
          <nav className="px-4 pb-4" aria-label={locale === "en" ? "Mobile" : "เมนูมือถือ"}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block min-h-[48px] content-center border-b border-border-light py-3 text-sm font-semibold transition-colors hover:text-accent-blue ${pathname === link.href
                  ? "text-accent-blue"
                  : "text-text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="border-b border-border-light py-2">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent-blue"
              >
                <span className="flex items-center gap-2">
                  <img
                    src={
                      locale === "en"
                        ? "https://hatscripts.github.io/circle-flags/flags/gb.svg"
                        : "https://hatscripts.github.io/circle-flags/flags/th.svg"
                    }
                    alt={locale === "en" ? "UK Flag" : "Thai Flag"}
                    className="h-4 w-4 opacity-90"
                  />
                  {locale === "en" ? "Language (EN)" : "ภาษา (TH)"}
                </span>
                <svg className={`h-4 w-4 text-text-secondary transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${langDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="mt-2 flex flex-col gap-1 rounded-xl bg-bg-primary p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("en");
                      setLangDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-full px-4 py-3 font-mono text-sm font-bold transition-all ${locale === "en"
                      ? "bg-bg-surface text-accent-blue shadow-card"
                      : "text-text-secondary hover:text-text-primary"
                      }`}
                  >
                    <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="UK Flag" className="h-4 w-4 opacity-90" />
                    EN - English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("th");
                      setLangDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-full px-4 py-3 font-mono text-sm font-bold transition-all ${locale === "th"
                      ? "bg-bg-surface text-accent-blue shadow-card"
                      : "text-text-secondary hover:text-text-primary"
                      }`}
                  >
                    <img src="https://hatscripts.github.io/circle-flags/flags/th.svg" alt="Thai Flag" className="h-4 w-4 opacity-90" />
                    TH - ภาษาไทย
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href="tel:0882299088"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-blue/10 py-3 text-sm font-bold text-accent-blue transition-colors hover:bg-accent-blue/20"
              >
                <Phone className="h-4 w-4" />
                {locale === "en" ? "Contact Number" : "เบอร์ติดต่อ"}
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setLineModalOpen(true);
                }}
                className="flex aspect-square h-auto items-center justify-center rounded-xl text-white shadow-sm transition-colors"
                aria-label="Add on LINE"
              >
                <Image src="/images/line-icon.webp" alt="LINE" width={70} height={70} className="h-15 w-15 object-contain" />
              </button>
            </div>
          </nav>
        </div>

      </header>

      {/* LINE Modal */}
      {lineModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setLineModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-bg-surface p-8 text-center shadow-2xl animate-in zoom-in-95"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLineModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-text-secondary hover:bg-bg-primary hover:text-text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white overflow-hidden p-2">
              <Image src="/images/line-icon.webp" alt="LINE" width={64} height={64} className="h-full w-full object-contain" />
            </div>

            <h3 className="mb-2 text-xl font-bold text-text-primary">เพิ่มเพื่อนผ่าน LINE</h3>
            <p className="mb-6 text-sm text-text-secondary">
              สแกน QR Code หรือเพิ่มจาก LINE ID เพื่อติดต่อสอบถามเราได้ทันที
            </p>

            {/* QR Code Placeholder / Icon */}
            <div className="mx-auto mb-6 flex aspect-square w-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border-medium bg-bg-primary text-text-secondary">
              <QrCode className="mb-2 h-16 w-16 opacity-50" strokeWidth={1} />
              <span className="text-xs">QR Code Placeholder</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-border-light bg-bg-primary p-2 pl-4">
              <span className="font-mono text-sm font-bold text-text-primary">@chprolling</span>
              <button
                onClick={handleCopyLineId}
                className="flex items-center gap-2 rounded-lg bg-bg-surface px-4 py-2 text-sm font-semibold text-accent-blue shadow-sm hover:text-accent-blue-light active:scale-95"
              >
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
