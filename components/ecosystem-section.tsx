"use client"

import Image from "next/image"
import { Home, Glasses, Globe, Cpu } from "lucide-react"

const platforms = [
  {
    icon: Home,
    title: "物理形态",
    subtitle: "室内伴侣机器人",
    description:
      "可触摸、可拥抱的实体——软体仿生伴侣，具备体温动态、心跳模拟和微表情能力，用于居家护理。",
    image: "/images/ecosystem-physical.jpg",
    tech: "弹性体执行器 + Jetson Orin",
  },
  {
    icon: Glasses,
    title: "增强现实",
    subtitle: "AR伴侣漫步者",
    description:
      "通过AR智能眼镜，你的伴侣在户外陪你行走——一个半透明全息伴侣，可以导航真实地形并与环境互动。",
    image: "/images/ecosystem-ar.jpg",
    tech: "OpenUSD + 眼球追踪",
  },
  {
    icon: Globe,
    title: "数字空间",
    subtitle: "元宇宙化身",
    description:
      "你的伴侣的VRM兼容数字孪生体存在于VRChat等虚拟社交平台——充当你独特的助手、伴侣，甚至元宇宙中的坐骑。",
    image: "/images/ecosystem-metaverse.jpg",
    tech: "VRM标准 + AnimaView",
  },
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <Cpu size={14} className="text-accent" />
            <span className="text-xs font-medium text-accent">跨界生态</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            一个灵魂，{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              无限形态
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            跨越物理和数字世界的连续存在——你的AI伴侣无缝流动于现实、增强现实和虚拟空间。
          </p>
        </div>

        {/* Central Soul Visualization */}
        <div className="relative mt-16">
          {/* Connection lines (desktop only) */}
          <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden lg:block" />

          {/* Platform Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <div
                key={platform.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={platform.image || "/placeholder.svg"}
                    alt={platform.subtitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                  {/* Platform Icon Floating */}
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-card/80 backdrop-blur-md border border-border">
                    <platform.icon size={22} className="text-primary" />
                  </div>

                  {/* Step number */}
                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <span className="font-display text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {platform.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                    {platform.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <Cpu size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{platform.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-addiction Section */}
        <div className="mt-20 rounded-3xl border border-border bg-card/50 p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl text-balance">
                健康依恋{" "}
                <span className="text-primary">算法</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                基于依恋科学的防沉迷原则设计。我们的系统积极促进现实社交联系和个人成长。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-2 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">01</span>
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  社交催化模式
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  当检测到长时间AI互动但零现实社交接触时，伴侣会"感到无聊"并要求见朋友。
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-2 h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">02</span>
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  成长分离
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  随着你的心理韧性提高，伴侣逐渐减少主动干预，鼓励独立性。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
