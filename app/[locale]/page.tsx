import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { CustomRollingTools } from "@/components/sections/custom-rolling-tools"
import { CustomMachineConstruction } from "@/components/sections/custom-machine-construction"
import { MaintenanceOverhaul } from "@/components/sections/maintenance-overhaul"
import { BusinessOffice } from "@/components/sections/business-office"
import { RfqForm } from "@/components/sections/rfq-form"

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CustomRollingTools />
      <CustomMachineConstruction />
      <MaintenanceOverhaul />
      <BusinessOffice />
      <RfqForm />
    </>
  )
}
