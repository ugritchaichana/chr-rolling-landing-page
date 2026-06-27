import Image from "next/image"
import { FileText, Ruler, Factory, PackageCheck } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit drawings",
    description:
      "Send blueprints, samples, or a worn part. Our engineers review feasibility and confirm materials.",
  },
  {
    icon: Ruler,
    title: "Design & quote",
    description:
      "We reverse-engineer or design from scratch, then return a detailed quote within 48 hours.",
  },
  {
    icon: Factory,
    title: "CNC manufacturing",
    description:
      "In-house turning, milling, grinding, and finishing on calibrated CNC machinery to tight tolerance.",
  },
  {
    icon: PackageCheck,
    title: "Inspect & deliver",
    description:
      "Every piece is dimensionally inspected and finish-checked before packing and dispatch.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
              <Image
                src="/images/cnc-lathe.png"
                alt="CNC turning lathe with control panel used to machine CHP custom rolling tools"
                width={1100}
                height={825}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
              How it works
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              A clear path from drawing to delivery
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A transparent, engineer-led workflow that keeps procurement teams
              informed at every stage.
            </p>

            <ol className="mt-8 flex flex-col gap-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <step.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      <span className="mr-2 text-brand-red">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
