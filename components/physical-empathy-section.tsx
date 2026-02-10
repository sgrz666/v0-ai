"use client"

import Image from "next/image"
import { Thermometer, Heart, Activity, Hand } from "lucide-react"

const empathyFeatures = [
  {
    icon: Heart,
    title: "心跳模拟",
    description:
      "多层弹性体执行器产生精细振动，模拟60-100次/分的真实心跳，创造活生生、呼吸着的伴侣体验。",
  },
  {
    icon: Thermometer,
    title: "体温动态",
    description:
      "微型热阵列根据情绪状态调节体温在36-39°C之间——兴奋时升温，休息时降温。",
  },
  {
    icon: Hand,
    title: "触觉反馈",
    description:
      "可编程的弹性材料产生50V以下的精细变形，模拟呼吸节奏、肌肉张力和深度拥抱感。",
  },
  {
    icon: Activity,
    title: "微表情引擎",
    description:
      "GAN训练的动作引擎实时生成细微的微表情和肢体语言——头部转动、蹭蹭和耳朵摇晃。",
  },
]

export function PhysicalEmpathySection() {
  return (
    <section id="physical-empathy" className="relative py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/physical-empathy.jpg"
                alt="Thermal heat map showing bionic pet warmth distribution and heartbeat simulation"
                width={640}
                height={480}
                className="w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-card/30 to-transparent" />
            </div>

            {/* Floating temperature card */}
            <div className="absolute -bottom-6 -right-6 z-10 rounded-2xl border border-primary/20 bg-card/90 backdrop-blur-xl px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Thermometer className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-primary">37.2 °C</div>
                  <div className="text-xs text-muted-foreground">核心体温</div>
                </div>
              </div>
              {/* Temp bar */}
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: "65%" }}
                />
              </div>
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>36 °C</span>
                <span>39 °C</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <span className="text-xs font-medium text-accent">物理共鸣</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              不是冰冷屏幕，{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                而是温暖陪伴
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              通过情感触觉和软体仿生工程，超越不可信谷效应，传递真正的温暖和触感。
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {empathyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
