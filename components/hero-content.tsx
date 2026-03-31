"use client"

import { WordFadeIn } from "@/components/ui/word-fade-in"

export function HeroContent() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <WordFadeIn
        as="h1"
        startDelay={0}
        delay={0.14}
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.15,
              delay: i * 0.14,
              ease: [0.16, 1, 0.3, 1],
            },
          }),
        }}
        words="Vantage Studio"
        className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      />

      <WordFadeIn
        as="p"
        startDelay={1.05}
        delay={0.07}
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.15,
              delay: 1.05 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            },
          }),
        }}
        words="Your brand, elevated. Your results, undeniable."
        className="mx-auto mb-10 max-w-2xl text-base text-zinc-300 md:text-lg"
      />

      <a
        href="#contact"
        className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black"
      >
        Start Your Project
      </a>
    </div>
  )
}