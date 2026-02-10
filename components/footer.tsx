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
            准备好迎接你的{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI灵魂伴侣
            </span>
            了吗？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            加入抢先体验计划，成为首批体验AI伴侣未来的人。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              预约体验
              <ArrowUpRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary">
              查看完整技术论文
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
                  智驭灵宠
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                下一代治愈伴侣：物理温度与数字灵魂的完美相遇。
              </p>
            </div>

            {/* Technology */}
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-foreground">
                科技
              </h4>
              <ul className="mt-3 space-y-2">
                {["OCEAN人格", "RAG记忆", "触觉引擎", "边缘AI"].map((item) => (
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
              <h4 className="text-xs font-semibold tracking-wider text-foreground">
                医疗
              </h4>
              <ul className="mt-3 space-y-2">
                {["CBT模块", "生物反馈", "老年护理", "隐私与安全"].map((item) => (
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
              <h4 className="text-xs font-semibold tracking-wider text-foreground">
                公司
              </h4>
              <ul className="mt-3 space-y-2">
                {["关于我们", "研究论文", "联系方式", "加入我们"].map((item) => (
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
              2026 智驭灵宠。版权所有。
            </p>
            <div className="flex items-center gap-6">
              {["隐私政策", "服务条款", "FDA合规"].map((item) => (
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
