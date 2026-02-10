import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to Meet Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Soulmate
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Join the early access program and be among the first to experience the future of AI companionship.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Book Early Access
              <ArrowUpRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary">
              View Full Technical Paper
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-display text-sm font-bold text-foreground">
                  SoulSync AI
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                The next generation of healing companions: physical warmth meets digital souls.
              </p>
            </div>

            {/* Technology */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Technology
              </h4>
              <ul className="mt-3 space-y-2">
                {["OCEAN Personality", "RAG Memory", "Haptic Engine", "Edge AI"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Clinical
              </h4>
              <ul className="mt-3 space-y-2">
                {["CBT Module", "Biofeedback", "Elder Care", "Privacy & Security"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Company
              </h4>
              <ul className="mt-3 space-y-2">
                {["About Us", "Research Papers", "Contact", "Careers"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              2026 SoulSync AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "FDA Compliance"].map((item) => (
                <a key={item} href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
