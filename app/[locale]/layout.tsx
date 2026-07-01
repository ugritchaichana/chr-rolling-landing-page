import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Thai, JetBrains_Mono } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/lib/i18n/language-context'
import en from '@/lib/i18n/locales/en.json'
import th from '@/lib/i18n/locales/th.json'

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-sans-thai',
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const siteUrl = 'https://chp-rolling.com'
  return {
    metadataBase: new URL(siteUrl),
    title: isEn ? 'Industrial Rollers & Machine Parts | CHP Rolling Engineering' : 'ลูกกลิ้งอุตสาหกรรมและชิ้นส่วนเครื่องจักร | CHP Rolling Engineering',
    description: isEn
      ? 'Experts in custom manufacturing of industrial rollers, machine parts, and CNC turning/milling for private and public sectors.'
      : 'ผู้เชี่ยวชาญด้านการผลิตลูกกลิ้งอุตสาหกรรม ชิ้นส่วนเครื่องจักร งาน CNC สำหรับภาครัฐและเอกชน มาตรฐาน TIS/มอก. และ ISO',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en': `${siteUrl}/en`,
        'th': `${siteUrl}/th`,
      },
    },
    openGraph: {
      title: isEn ? 'Industrial Rollers & Machine Parts | CHP Rolling Engineering' : 'ลูกกลิ้งอุตสาหกรรมและชิ้นส่วนเครื่องจักร | CHP Rolling Engineering',
      description: isEn
        ? 'Design and manufacture of custom industrial rollers and machine parts.'
        : 'ออกแบบและผลิตลูกกลิ้งอุตสาหกรรม ชิ้นส่วนเครื่องจักร งาน CNC ตามมาตรฐานวิศวกรรม',
      type: 'website',
      locale: isEn ? 'en_US' : 'th_TH',
      url: `${siteUrl}/${locale}`,
      siteName: 'CHP Rolling Engineering',
    },
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

const JSON_LD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CHP Rolling Engineering Co., Ltd.",
  alternateName: "บริษัท ซีเอชพี โรลลิ่ง วิศวกรรม จำกัด",
  url: "https://chp-rolling.com",
  description:
    "ผู้เชี่ยวชาญด้านการผลิตลูกกลิ้งอุตสาหกรรม ชิ้นส่วนเครื่องจักร และงาน CNC",
  email: "cholla_chat@hotmail.com",
  telephone: "+66882299088",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khlong Luang",
    addressRegion: "Pathum Thani",
    postalCode: "12120",
    addressCountry: "TH",
  },
}

const JSON_LD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "CHP Rolling ผลิตลูกกลิ้งขนาดเท่าไหร่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เส้นผ่านศูนย์กลาง 50-1,200 mm ความยาวสูงสุด 6,000 mm ด้วยค่าความเที่ยงตรง +/- 0.01 mm",
      },
    },
    {
      "@type": "Question",
      name: "ใช้วัสดุอะไรในการผลิต?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SCM440, S45C, SUS304, SUS316 ความแข็ง HRC 45-62 ค่าความเรียบผิว Ra 0.4-3.2 um",
      },
    },
    {
      "@type": "Question",
      name: "ระยะเวลาส่งมอบกี่วัน?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7-30 วันทำการ ขึ้นอยู่กับความซับซ้อนของชิ้นงาน กำลังการผลิต 500+ ชิ้นต่อเดือน",
      },
    },
  ],
}

import { SentryLoader } from '../SentryLoader'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'th' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const initialLocale = (locale === 'th' || locale === 'en') ? locale : 'th'
  const dictionary = initialLocale === 'th' ? th : en

  return (
    <html
      lang={initialLocale}
      className={`${ibmPlexSansThai.variable} ${jetbrainsMono.variable} bg-background`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_ORGANIZATION),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_FAQ),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SentryLoader />
        <LanguageProvider initialLocale={initialLocale as any} dictionary={dictionary}>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
