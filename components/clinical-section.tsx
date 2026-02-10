"use client"

import Image from "next/image"
import { Shield, Brain, Activity, HeartPulse, Smile, Wind } from "lucide-react"

const therapyModules = [
  {
    icon: Smile,
    cbtStage: "情绪记录",
    gameTitle: "心情喂养",
    description:
      "伴侣每天询问你的心情。你选择彩色'情绪能量块'来喂它——系统自动记录随时间变化的情绪模式。",
    theory: "情绪外化技巧",
  },
  {
    icon: Brain,
    cbtStage: "认知重构",
    gameTitle: "噩梦消除器",
    description:
      "当你表达焦虑思想如'我什么都做不好'时，伴侣将其视觉化为'小怪物'，你用反证来击败它们。",
    theory: "苏格拉底式提问法",
  },
  {
    icon: Shield,
    cbtStage: "暴露疗法",
    gameTitle: "勇敢任务",
    description:
      "针对社交焦虑，伴侣分配现实任务（'带我去公园10分钟'），完成后获得虚拟徽章奖励。",
    theory: "系统脱敏法",
  },
  {
    icon: Wind,
    cbtStage: "正念冥想",
    gameTitle: "呼吸同步",
    description:
      "伴侣身体上下起伏引导4-7-8呼吸法，使用触觉反馈帮助你专注并实现深度放松。",
    theory: "生物反馈放松",
  },
]

const feedbackLoop = [
  {
    step: "感知",
    label: "感知层",
    description: "传感器检测心率变异性下降和皮肤电活动升高",
    color: "text-primary",
  },
  {
    step: "分析",
    label: "分析层",
    description: "AI识别急性焦虑前兆",
    color: "text-accent",
  },
  {
    step: "决策",
    label: "决策层",
    description: "历史数据：用户对深压触感反应最好",
    color: "text-primary",
  },
  {
    step: "执行",
    label: "执行层",
    description: "启动拥抱+20-50Hz呼噜振动以实现神经放松",
    color: "text-accent",
  },
]

export function ClinicalSection() {
  return (
    <section id="clinical-dtx" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <HeartPulse size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary">医疗级DTx</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              医疗级{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                治愈路径
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              循证数字认知行为疗法（dCBT）无缝融入日常伴侣互动，让心理健康护理变成游戏。
            </p>
          </div>

          {/* Clinical Image */}
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/clinical-dtx.jpg"
              alt="Digital therapeutics interface showing CBT intervention with AI companion"
              width={640}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-foreground">活跃治疗课程</span>
            </div>
          </div>
        </div>

        {/* Therapy Modules Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {therapyModules.map((module, index) => (
            <div
              key={module.gameTitle}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <module.icon size={20} className="text-primary" />
              </div>

              <div className="mb-1 text-xs font-medium text-primary">
                {module.cbtStage}
              </div>
              <h4 className="font-display text-base font-semibold text-foreground">
                {module.gameTitle}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {module.description}
              </p>

              <div className="mt-4 rounded-lg border border-border bg-secondary/50 px-3 py-2">
                <span className="text-xs text-muted-foreground">
                  理论：{module.theory}
                </span>
              </div>

              {/* Step number */}
              <div className="absolute top-4 right-4 font-display text-4xl font-bold text-muted/30">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Biofeedback Loop */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-foreground">
            自适应生物反馈环
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            一个实时感知、分析、决策和执行的闭环反馈机制。
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {feedbackLoop.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="rounded-xl border border-border bg-card p-5 h-full">
                  <div className={`font-display text-xs font-bold tracking-widest ${item.color}`}>
                    {item.step}
                  </div>
                  <h4 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {item.label}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {/* Arrow connector */}
                {index < feedbackLoop.length - 1 && (
                  <div className="absolute top-1/2 -right-2 z-10 hidden h-4 w-4 -translate-y-1/2 text-primary lg:block">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0l8 8-8 8V0z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Biofeedback Image Row */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/biofeedback.jpg"
              alt="Smartwatch biometric data connected to AI companion pet for real-time health monitoring"
              width={640}
              height={360}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs">
              <h4 className="font-display text-lg font-bold text-foreground">
                多维生理监测
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                通过智能穿戴整合进行实时皮肤电和心率变异性数据分析。
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8">
            <Activity className="text-primary mb-4" size={32} />
            <h4 className="font-display text-xl font-bold text-foreground">
              边缘AI隐私盾
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              所有视觉分析（步态识别、跌倒检测）和语音唤醒都在本地边缘芯片（NVIDIA Jetson Orin Nano）上运行。仅将去识别化的情感特征向量上传到云端——最大隐私保护。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["本地处理", "HIPAA就绪", "FDA网安", "医保数字健康"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
