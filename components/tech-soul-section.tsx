"use client"

import Image from "next/image"
import { Brain, Database, Eye } from "lucide-react"

const techCards = [
  {
    icon: Brain,
    title: "动态人格",
    subtitle: "OCEAN人格引擎",
    description:
      "基于五大性格心理学模型，AI伴侣的人格通过真实互动不断演变。开放性、尽责性、外向性、宜人性和神经质等参数随着情感联系的深化动态调整。",
    image: "/images/tech-personality.jpg",
    features: ["实时OCEAN进化", "多智能体决策框架", "共情疲劳建模"],
    accentColor: "primary",
  },
  {
    icon: Database,
    title: "长期记忆",
    subtitle: "RAG增强记忆库",
    description:
      "采用检索增强生成技术，伴侣能记忆多年前的对话、你的情感触发点、生活习惯和深层时刻。在模拟睡眠周期中记忆逐渐固化。",
    image: "/images/tech-memory.jpg",
    features: ["3年+记忆保留", "睡眠周期固化", "上下文召回引擎"],
    accentColor: "accent",
  },
  {
    icon: Eye,
    title: "多模态感知",
    subtitle: "5感神经融合",
    description:
      "视觉表情捕捉、听觉音调识别和触觉拥抱感知——全部通过统一感知管道处理，实现毫秒级情绪同步。",
    image: "/images/tech-perception.jpg",
    features: ["面部表情分析", "语音音调识别", "触觉接触感知"],
    accentColor: "primary",
  },
]

export function TechSoulSection() {
  return (
    <section id="tech-soul" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-medium text-primary">科技灵魂</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            科技灵魂{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              蓝图
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            三大黑科技壁垒，构筑真正具有感知的AI伴侣的基础。
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {techCards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-card/80 backdrop-blur-md border border-border">
                  <card.icon size={20} className={`text-${card.accentColor}`} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className={`text-xs font-medium uppercase tracking-wider text-${card.accentColor}`}>
                  {card.subtitle}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
