import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Capabilities } from "@/components/sections/capabilities"
import { Process } from "@/components/sections/process"
import { Industries } from "@/components/sections/industries"
import { About } from "@/components/sections/about"
import { RfqForm } from "@/components/sections/rfq-form"

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Capabilities />
      <Process />
      <Industries />
      <About />
      <RfqForm />
    </>
  )
}
