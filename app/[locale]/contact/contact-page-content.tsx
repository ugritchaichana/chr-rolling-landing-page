"use client";

import { useLanguage } from "@/lib/i18n";
import { RfqForm } from "@/components/sections/rfq-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export function ContactPageContent() {
  const { locale, t } = useLanguage();

  return (
    <>
      <section className="section-padding bg-bg-surface border-b border-border-light">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent-red">
                  {locale === "en" ? "Headquarters" : "สำนักงานใหญ่"}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text-primary">
                  {t.businessOffice.heading}
                </h2>
                <p 
                  className="mt-4 leading-relaxed text-text-secondary [&>strong]:text-accent-blue [&>strong]:font-bold"
                  dangerouslySetInnerHTML={{ __html: t.businessOffice.description1 }}
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{t.businessOffice.contactInfo.address}</h3>
                    <p className="mt-1 text-text-secondary">{t.businessOffice.contactInfo.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{t.businessOffice.contactInfo.phone}</h3>
                    <p className="mt-1 text-text-secondary">{t.businessOffice.contactInfo.phoneValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{t.businessOffice.contactInfo.email}</h3>
                    <p className="mt-1 text-text-secondary">{t.businessOffice.contactInfo.emailValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{locale === "en" ? "Business Hours" : "เวลาทำการ"}</h3>
                    <p className="mt-1 text-text-secondary">{locale === "en" ? "Mon - Sat: 8:00 AM - 5:00 PM" : "จันทร์ - เสาร์: 8:00 น. - 17:00 น."}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-4">
                 <a href="https://line.me/ti/p/@chprolling" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-[#06C755] px-6 py-4 font-bold text-white shadow-sm transition-all hover:bg-[#05b34c] active:scale-95">
                    <Image src="/images/line-icon.webp" alt="LINE" width={24} height={24} className="h-6 w-6 invert brightness-0" />
                    {locale === "en" ? "Chat on LINE" : "ติดต่อผ่าน LINE"}
                 </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-[400px] w-full overflow-hidden rounded-2xl border border-border-light shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.6534215286595!2d100.50503020000001!3d13.602206799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a6a5fa36dcd9%3A0x6b29d91f24d3ddf8!2sCHP%20ROLLING%20ENGINEERING!5e0!3m2!1sen!2sth!4v1709123456789!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </section>

      <RfqForm />
    </>
  );
}
