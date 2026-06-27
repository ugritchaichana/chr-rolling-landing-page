import Image from "next/image"
import { ShieldCheck, Gauge, Users } from "lucide-react"

const points = [
  {
    icon: ShieldCheck,
    title: "Engineer-led quality",
    description:
      "Documented inspection on every part, with materials and tolerances verified to your specification.",
  },
  {
    icon: Gauge,
    title: "Precision finishing",
    description:
      "Mirror-finished, dimensionally accurate tooling that runs cleaner and lasts longer on the line.",
  },
  {
    icon: Users,
    title: "Partnership approach",
    description:
      "We work directly with your procurement and engineering teams from first drawing to final delivery.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              About CHP
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              CHP Rolling Engineering Limited Partnership
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We are a specialist rolling engineering workshop dedicated to
              custom, made-to-order solutions. Our team combines decades of
              hands-on forming experience with modern CNC manufacturing to build
              tooling and machinery that performs exactly as designed.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <Image
                src="/images/machined-dies.png"
                alt="Close-up of precision machined CHP rolling dies and rings showing mirror finish quality"
                width={1100}
                height={1400}
                className="h-full max-h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
