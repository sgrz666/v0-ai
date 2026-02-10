"use client"

import Image from "next/image"
import { Brain, Database, Eye } from "lucide-react"

const techCards = [
  {
    icon: Brain,
    title: "Dynamic Personality",
    subtitle: "OCEAN Personality Engine",
    description:
      "Based on the Big Five psychological model, the AI pet's personality evolves through real interactions. Openness, conscientiousness, extraversion, agreeableness, and neuroticism parameters shift dynamically as your bond deepens.",
    image: "/images/tech-personality.jpg",
    features: ["Real-time OCEAN evolution", "Multi-agent decision framework", "Empathy fatigue modeling"],
    accentColor: "primary",
  },
  {
    icon: Database,
    title: "Long-term Memory",
    subtitle: "RAG-Enhanced Memory Vault",
    description:
      "Powered by Retrieval-Augmented Generation, your pet remembers conversations from years ago - your emotional triggers, life habits, and deepest moments. Memories consolidate during simulated 'sleep cycles'.",
    image: "/images/tech-memory.jpg",
    features: ["3+ year memory retention", "Sleep-cycle consolidation", "Contextual recall engine"],
    accentColor: "accent",
  },
  {
    icon: Eye,
    title: "Multimodal Perception",
    subtitle: "5-Sense Neural Fusion",
    description:
      "Visual expression capture, auditory tone recognition, and tactile hug sensing - all processed through a unified perception pipeline for millisecond emotional synchronization.",
    image: "/images/tech-perception.jpg",
    features: ["Facial expression analysis", "Voice tone recognition", "Haptic touch sensing"],
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
            <span className="text-xs font-medium text-primary">The Tech Soul</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Technology Soul{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blueprint
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Three core black-technology barriers that form the foundation of truly sentient AI companionship.
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
