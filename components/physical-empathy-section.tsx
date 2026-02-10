"use client"

import Image from "next/image"
import { Thermometer, Heart, Activity, Hand } from "lucide-react"

const empathyFeatures = [
  {
    icon: Heart,
    title: "Heartbeat Simulation",
    description:
      "Multi-layer elastomer actuators produce delicate vibrations mimicking real heartbeats at 60-100 BPM, creating a living, breathing companion experience.",
  },
  {
    icon: Thermometer,
    title: "Thermal Dynamics",
    description:
      "Micro thermal arrays adjust body temperature between 36-39 C based on emotional state - warming with excitement, cooling during rest.",
  },
  {
    icon: Hand,
    title: "Haptic Touch",
    description:
      "Programmable elastic materials produce sub-50V fine deformations, simulating breathing rhythms, muscle tension, and deep-pressure embrace.",
  },
  {
    icon: Activity,
    title: "Micro-expression Engine",
    description:
      "GAN-trained motion engine generates nuanced micro-expressions and body language - head tilts, nuzzles, and ear movements in real-time.",
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
                  <div className="font-display text-2xl font-bold text-primary">37.2 C</div>
                  <div className="text-xs text-muted-foreground">Core temperature</div>
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
                <span>36 C</span>
                <span>39 C</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <span className="text-xs font-medium text-accent">Physical Empathy</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Not a Cold Screen,{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                But Warm Presence
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Through affective haptics and soft-body bionic engineering, we transcend the uncanny valley to deliver genuine warmth and touch.
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
