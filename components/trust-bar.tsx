const stats = [
  { value: "100%", label: "Custom made-to-order" },
  { value: "±0.01mm", label: "Machining tolerance" },
  { value: "48h", label: "Quote turnaround" },
  { value: "ISO", label: "Quality processes" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-8 text-center">
            <span className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">
              {s.value}
            </span>
            <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
