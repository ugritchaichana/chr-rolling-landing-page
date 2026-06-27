import { cn } from "@/lib/utils"

export function ChpLogo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative inline-flex shrink-0" aria-hidden="true">
        <span className="block size-6 rounded-full border-[3px] border-brand-red bg-background" />
        <span className="-ml-2.5 block size-6 rounded-full border-[3px] border-brand-red bg-background" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-lg font-extrabold tracking-tight text-brand">
            CHP
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Rolling Engineering
          </span>
        </span>
      )}
    </div>
  )
}
