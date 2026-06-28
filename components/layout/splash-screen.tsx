"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function SplashScreen() {
  const [stage, setStage] = useState<"loading" | "opening" | "done">("loading");
  const { locale } = useLanguage();

  useEffect(() => {
    // Start opening curtain after 1.2s
    const timer1 = setTimeout(() => {
      setStage("opening");
    }, 600);

    // Remove from DOM after animation finishes (1.2s + 0.8s)
    const timer2 = setTimeout(() => {
      setStage("done");
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Left Curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-bg-surface transition-transform duration-700 ease-in-out ${
          stage === "opening" ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      
      {/* Right Curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-bg-surface transition-transform duration-700 ease-in-out ${
          stage === "opening" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Logo Wrapper */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-500 ease-in-out ${
          stage === "opening" ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <Image
          src="/images/logo-chp.png"
          alt="CHP Rolling Engineering"
          width={240}
          height={68}
          className="h-32 sm:h-24 drop-shadow-sm animate-pulse"
          style={{ width: "auto" }}
          priority
        />
        <p className="mt-6 font-heading text-sm font-medium tracking-[0.2em] text-text-secondary animate-pulse text-center">
          {locale === "en" ? "PRECISION - STRENGTH - RELIABILITY" : "แม่นยำ - แข็งแกร่ง - เชื่อถือได้"}
        </p>
      </div>
    </div>
  );
}
