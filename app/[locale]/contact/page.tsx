import { ContactPageContent } from "./contact-page-content";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Contact Us | CHP Rolling Engineering" : "ติดต่อเรา (Contact Us) | CHP Rolling Engineering",
    description: isEn
      ? "Contact CHP Rolling Engineering for inquiries, roller design services, and custom quotes."
      : "ติดต่อ หจก ซีเอชพี โรลลิ่ง วิศวกรรม เพื่อสอบถามข้อมูล บริการออกแบบลูกกลิ้ง และขอใบเสนอราคา",
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
