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
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-red/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32 relative z-10">
        <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-brand-red"></span>
            </span>
            Precision Made-to-Order
          </div>

          <h1 className="text-balance font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
            <span className="bg-gradient-to-br from-brand via-brand to-brand/70 bg-clip-text text-transparent drop-shadow-sm">
              CHP Rolling
            </span>
            <br />
            Industrial Solutions
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground/90 font-medium">
            We design, machine, and overhaul precision rolling tools and
            roll-forming machinery built to your exact drawings. From a single roller
            to a complete production line, every part is engineered for endurance.
          </p>

          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base font-semibold text-foreground/80">
                <div className="flex items-center justify-center rounded-full bg-brand/10 p-1">
                  <CheckCircle2 className="size-4 shrink-0 text-brand" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              render={<a href="#rfq" />}
              nativeButton={false}
              size="lg"
              className="group bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              render={<a href="#capabilities" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-border/60 bg-background/50 backdrop-blur-sm text-foreground hover:bg-secondary hover:border-border transition-all duration-300"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none animate-in slide-in-from-right-8 duration-1000 fade-in">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-background shadow-2xl ring-1 ring-black/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent z-10 pointer-events-none mix-blend-overlay" />
            <Image
              src="/images/rolling-mill-hero.jpg"
              alt="High-tech CNC rolling mill machinery"
              width={1200}
              height={1600}
              priority
              className="h-[500px] sm:h-[600px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl p-6 shadow-xl sm:flex items-center gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300 fade-in">
            <div className="flex flex-col">
              <p className="font-heading text-4xl font-black bg-gradient-to-br from-brand-red to-brand-red/70 bg-clip-text text-transparent">
                25+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                Years of <br /> Engineering
              </p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col">
              <p className="font-heading text-xl font-bold text-foreground">
                100%
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                Custom Built
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
