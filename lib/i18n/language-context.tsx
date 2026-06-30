"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

const LOCALE_COOKIE = "chp-locale";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function storeLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

export function LanguageProvider({ 
  children,
  initialLocale = "en"
}: { 
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
    storeLocale(initialLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = initialLocale;
    }
  }, [initialLocale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    storeLocale(newLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }

    // Redirect to URL with updated locale prefix
    let newPath = pathname;
    if (pathname.startsWith("/en") || pathname.startsWith("/th")) {
      newPath = pathname.replace(/^\/(en|th)(\/|$)/, `/${newLocale}$2`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }
    router.push(newPath);
  }, [pathname, router]);

  const value: LanguageContextValue = {
    locale,
    t: dictionaries[locale],
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
