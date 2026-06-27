import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Capabilities } from "@/components/capabilities"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { About } from "@/components/about"
import { RfqForm } from "@/components/rfq-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <Process />
        <Industries />
        <About />
        <RfqForm />
      </main>
      <SiteFooter />
    </div>
  )
}
