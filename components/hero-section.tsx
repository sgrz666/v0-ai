"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:gap-16 lg:pt-40 lg:pb-32">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">下一代AI伴侣</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">
              智驭灵宠：
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                科技有了心跳
              </span>
              <br />
              温暖有了灵魂
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            深度融合多模态AI与仿生科技，打造新一代治愈伴侣——融合物理温度和永恒数字灵魂的终极体验。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Play size={16} />
              观看演示
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary">
              预约体验
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { value: "5+", label: "感知模式" },
              { value: "36-39\u00B0C", label: "体温范围" },
              { value: "3年+", label: "记忆保留" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto w-full max-w-lg">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px] animate-breathe" />
            <div className="absolute inset-0 rounded-full bg-accent/5 blur-[60px] animate-breathe" style={{ animationDelay: "2s" }} />
            
            <div className="relative animate-float">
              <Image
                src="/images/hero-pet.jpg"
                alt="SoulSync AI Companion Pet - A futuristic bionic companion with aurora green accents"
                width={600}
                height={600}
                className="relative z-10 rounded-3xl"
                priority
              />
            </div>

            {/* Floating info cards */}
            <div className="absolute -left-4 top-1/4 z-20 rounded-xl border border-border bg-card/80 backdrop-blur-md px-4 py-3 shadow-xl animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-foreground">心跳活跃</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">72 次/分 | 37.2 °C</div>
            </div>

            <div className="absolute -right-4 top-2/3 z-20 rounded-xl border border-border bg-card/80 backdrop-blur-md px-4 py-3 shadow-xl animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-foreground">情绪同步</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">平静且满足</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave/divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
