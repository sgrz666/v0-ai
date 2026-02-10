"use client"

import Image from "next/image"
import { Shield, Brain, Activity, HeartPulse, Smile, Wind } from "lucide-react"

const therapyModules = [
  {
    icon: Smile,
    cbtStage: "Emotion Recording",
    gameTitle: "Mood Feeding",
    description:
      "The pet asks about your mood daily. You select colored 'emotion energy blocks' to feed it - the system auto-logs emotional patterns over time.",
    theory: "Emotion externalization technique",
  },
  {
    icon: Brain,
    cbtStage: "Cognitive Restructuring",
    gameTitle: "Nightmare Dispeller",
    description:
      "When you express anxious thoughts like 'I can't do anything right', the pet visualizes them as 'little monsters' you defeat with counter-evidence.",
    theory: "Socratic questioning method",
  },
  {
    icon: Shield,
    cbtStage: "Exposure Therapy",
    gameTitle: "Brave Quests",
    description:
      "For social anxiety, the pet assigns real-world missions ('Take me to the park for 10 minutes') with virtual badge rewards for completion.",
    theory: "Systematic desensitization",
  },
  {
    icon: Wind,
    cbtStage: "Mindfulness Meditation",
    gameTitle: "Synchronized Breathing",
    description:
      "The pet's body rises and falls to guide 4-7-8 breathing exercises, using haptic feedback to help you focus and achieve deep relaxation.",
    theory: "Biofeedback relaxation",
  },
]

const feedbackLoop = [
  {
    step: "SENSE",
    label: "Perception",
    description: "Sensors detect HRV decrease and EDA elevation",
    color: "text-primary",
  },
  {
    step: "ANALYZE",
    label: "Analysis",
    description: "AI identifies acute anxiety precursors",
    color: "text-accent",
  },
  {
    step: "DECIDE",
    label: "Decision",
    description: "Historical data: user responds best to deep-pressure touch",
    color: "text-primary",
  },
  {
    step: "ACT",
    label: "Execution",
    description: "Initiate embrace + 20-50Hz purring vibration for neural relaxation",
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
              <span className="text-xs font-medium text-primary">Clinical DTx</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Medical-Grade{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Healing Pathway
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Evidence-based digital Cognitive Behavioral Therapy (dCBT) seamlessly embedded into daily companion interactions, making mental healthcare feel like play.
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
              <span className="text-sm text-foreground">Active Therapy Session</span>
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
                  Theory: {module.theory}
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
            Adaptive Biofeedback Loop
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            A closed-loop feedback mechanism that senses, analyzes, decides, and acts in real-time.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {feedbackLoop.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="rounded-xl border border-border bg-card p-5 h-full">
                  <div className={`font-display text-xs font-bold uppercase tracking-widest ${item.color}`}>
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
                Multi-dimensional Physiological Monitoring
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Real-time EDA and HRV data analysis through smart wearable integration.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8">
            <Activity className="text-primary mb-4" size={32} />
            <h4 className="font-display text-xl font-bold text-foreground">
              Edge AI Privacy Shield
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              All visual analysis (gait recognition, fall detection) and voice wake-up run on local edge chips (NVIDIA Jetson Orin Nano). Only de-identified emotional feature vectors are uploaded to the cloud - maximum privacy protection.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["On-device Processing", "HIPAA-Ready", "FDA Cybersecurity", "Medicare Digital Health"].map((tag) => (
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
