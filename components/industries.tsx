import { CircleDot } from "lucide-react"

const industries = [
  "Steel tube & pipe mills",
  "Roll-forming & profile lines",
  "Stainless steel fabrication",
  "Furniture & frame tubing",
  "Automotive components",
  "Construction & scaffolding",
  "HVAC & ducting",
  "Agricultural equipment",
]

export function Industries() {
  return (
    <section id="industries" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              Industries served
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Trusted by manufacturers who form steel every day
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Wherever metal is rolled, formed, or shaped, our tooling keeps the
              line running. We supply OEMs and production facilities across a
              broad range of sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 bg-card px-5 py-4"
              >
                <CircleDot className="size-4 shrink-0 text-brand-red" />
                <span className="font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
