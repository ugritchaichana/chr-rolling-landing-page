import { AboutPageContent } from "./about-page-content";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "About Us | CHP Rolling Engineering" : "เกี่ยวกับเรา (About Us) | CHP Rolling Engineering",
    description: isEn
      ? "Company profile and business coordination office of CHP Rolling Engineering."
      : "ประวัติความเป็นมาและข้อมูลสำนักงานนัดหมายเจรจาธุรกิจ ของ หจก ซีเอชพี โรลลิ่ง วิศวกรรม",
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
