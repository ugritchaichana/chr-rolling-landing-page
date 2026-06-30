import { CustomRollingTools } from "@/components/sections/custom-rolling-tools"
import { CustomMachineConstruction } from "@/components/sections/custom-machine-construction"
import { MaintenanceOverhaul } from "@/components/sections/maintenance-overhaul"

export const metadata = {
  title: "บริการของเรา (Our Services) | CHP Rolling Engineering",
  description: "บริการออกแบบและผลิตลูกกลิ้งรีดท่อ, สร้างเครื่องจักร, และบริการซ่อมบำรุงโมดิฟายเครื่องจักรอย่างครบวงจร",
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
