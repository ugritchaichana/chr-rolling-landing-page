import Image from "next/image"
import { Wrench, Cog, RefreshCw, ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    icon: Wrench,
    title: "Custom Rolling Tools",
    description:
      "Precision-machined rollers, dies, and forming tools cut to your profile and material, finished to mirror tolerance for tube and pipe mills.",
    image: "/images/rolling-tools.png",
    alt: "Stacked polished stainless steel custom rolling tools and forming rollers on a workshop pallet",
  },
  {
    icon: Cog,
    title: "Machine Construction",
    description:
      "Complete roll-forming and tube mill machinery built from the ground up — stands, drives, and tooling integrated into a ready-to-run line.",
    image: "/images/rolling-mill.png",
    alt: "Blue CHP roll-forming machine line with stainless steel rollers under assembly",
  },
  {
    icon: RefreshCw,
    title: "Modification & Overhaul",
    description:
      "Re-machining, refurbishment, and upgrades that restore worn tooling and ageing lines to original spec — extending the life of your equipment.",
    image: "/images/machined-dies.png",
    alt: "Array of machined steel rolling dies and bearing rings ready for overhaul",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            What we do
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Engineering capabilities, built around your drawings
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three core services that take your project from concept to a
            running production line.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <Image
                  src={cap.image || "/placeholder.svg"}
                  alt={cap.alt}
                  width={600}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <cap.icon className="size-5" />
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {cap.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
                <a
                  href="#rfq"
                  className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-brand transition-colors hover:text-brand-red"
                >
                  Discuss your project
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
