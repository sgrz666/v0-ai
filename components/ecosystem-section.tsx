"use client"

import Image from "next/image"
import { Home, Glasses, Globe, Cpu } from "lucide-react"

const platforms = [
  {
    icon: Home,
    title: "Physical Form",
    subtitle: "Indoor Companion Robot",
    description:
      "The tangible, huggable presence - a soft-body bionic companion with thermal dynamics, heartbeat simulation, and micro-expression capabilities for in-home care.",
    image: "/images/ecosystem-physical.jpg",
    tech: "Elastomer Actuators + Jetson Orin",
  },
  {
    icon: Glasses,
    title: "Augmented Reality",
    subtitle: "AR Companion Walker",
    description:
      "Through AR smart glasses, your pet walks alongside you outdoors - a translucent holographic companion that navigates real-world terrain and interacts with your environment.",
    image: "/images/ecosystem-ar.jpg",
    tech: "OpenUSD + Eye Tracking",
  },
  {
    icon: Globe,
    title: "Digital Space",
    subtitle: "Metaverse Avatar",
    description:
      "Your pet's VRM-compatible digital twin lives in virtual social platforms like VRChat - serving as your unique assistant, companion, or even mount in the metaverse.",
    image: "/images/ecosystem-metaverse.jpg",
    tech: "VRM Standard + AnimaView",
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
            <span className="text-xs font-medium text-accent">Cross-Platform Ecosystem</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            One Soul,{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Infinite Forms
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            A continuous existence spanning physical and digital worlds - your AI companion flows seamlessly across reality, augmented reality, and virtual space.
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
                Healthy Attachment{" "}
                <span className="text-primary">Algorithm</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Designed with anti-addiction principles rooted in attachment science. Our system actively promotes real-world social connection and personal growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-2 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">01</span>
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  Social Catalyst Mode
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  When prolonged AI interaction is detected with zero real social contact, the pet gets "bored" and asks to meet friends.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="mb-2 h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">02</span>
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  Growth Separation
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  As your psychological resilience improves, the pet gradually reduces proactive interventions, encouraging independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
