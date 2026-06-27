import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Reverse-engineered to your exact specs",
  "In-house CNC machining & finishing",
  "Tube, pipe & roll-forming lines",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="size-1.5 rounded-full bg-brand-red" />
            Made-to-Order Engineering
          </span>

          <h1 className="text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-brand">CHP Rolling Engineering</span> — 100%
            custom industrial rolling solutions
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We design, machine, and overhaul precision rolling tools and
            roll-forming machinery built to your drawings. From a single roller
            to a complete production line, every part is engineered to order.
          </p>

          <ul className="flex flex-col gap-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-5 shrink-0 text-brand-red" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              render={<a href="#rfq" />}
              nativeButton={false}
              size="lg"
              className="bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#capabilities" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-border bg-background text-foreground hover:bg-secondary"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-md">
            <Image
              src="/images/rolling-mill.png"
              alt="CHP blue roll-forming tube mill with polished stainless steel rollers shaping steel strip on the factory floor"
              width={1100}
              height={1400}
              priority
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background px-5 py-4 shadow-md sm:block">
            <p className="font-heading text-3xl font-extrabold text-brand">25+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Years forming steel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
