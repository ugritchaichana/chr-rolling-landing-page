"use client";

import { useLanguage } from "@/lib/i18n";
import { About } from "@/components/sections/about";
import { BusinessOffice } from "@/components/sections/business-office";

export function AboutPageContent() {
  const { locale, t } = useLanguage();

  return (
    <>
      <About />
      <BusinessOffice />
    </>
  );
}
