import { ChpLogo } from "@/components/chp-logo"

const columns = [
  {
    heading: "Capabilities",
    links: [
      { label: "Custom Rolling Tools", href: "#capabilities" },
      { label: "Machine Construction", href: "#capabilities" },
      { label: "Modification & Overhaul", href: "#capabilities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About CHP", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Request a Quote", href: "#rfq" },
      { label: "sales@chprolling.com", href: "mailto:sales@chprolling.com" },
      { label: "+66 2 000 0000", href: "tel:+6620000000" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <ChpLogo />
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              CHP Rolling Engineering Limited Partnership — 100% custom,
              made-to-order rolling tools, machinery, and overhaul services for
              steel forming lines.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CHP Rolling Engineering Limited Partnership. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Made-to-order industrial solutions</p>
        </div>
      </div>
    </footer>
  )
}
