import { CustomRollingTools } from "@/components/sections/custom-rolling-tools"
import { CustomMachineConstruction } from "@/components/sections/custom-machine-construction"
import { MaintenanceOverhaul } from "@/components/sections/maintenance-overhaul"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Our Services | CHP Rolling Engineering" : "บริการของเรา (Our Services) | CHP Rolling Engineering",
    description: isEn
      ? "Design and manufacturing of pipe rolling tools, machine building, and comprehensive machine maintenance/overhaul services."
      : "บริการออกแบบและผลิตลูกกลิ้งรีดท่อ, สร้างเครื่องจักร, และบริการซ่อมบำรุงโมดิฟายเครื่องจักรอย่างครบวงจร",
  };
}

export default function ServicesPage() {
  return (
    <>
      <CustomRollingTools />
      <CustomMachineConstruction />
      <MaintenanceOverhaul />
    </>
  )
}
