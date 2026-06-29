"use client";

import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbLabel?: string;
}

export function PageHero({ title, description, breadcrumbLabel }: PageHeroProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="bg-bg-surface pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-border-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-64 w-64 rounded-full bg-accent-blue/5 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4">
        <div className="h-64 w-64 rounded-full bg-accent-red/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-text-secondary mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-blue transition-colors">
            {locale === "en" ? "Home" : "หน้าแรก"}
          </Link>
          <ChevronRight className="h-4 w-4 opacity-50" />
          <span className="text-text-primary">{breadcrumbLabel || title}</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
          {title}
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
