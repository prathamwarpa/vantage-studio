"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

type FeatureSpotlightProps = {
  src: string
  alt: string
  href: string
  indexLabel?: string
  heading?: string
  subheading?: string
  description?: string
  exploreLabel?: string
  className?: string
}

export function FeatureSpotlight({
  src,
  alt,
  href,
  indexLabel,
  heading,
  subheading,
  description,
  exploreLabel = "Explore",
  className = "",
}: FeatureSpotlightProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })
  const headingWords = (heading ?? "").split(" ")
  const headingFirst = headingWords[0] ?? ""
  const headingRest = headingWords.slice(1).join(" ")

  function handlePointerMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setSpotlight({ x, y })
  }

  return (
    <div
      className={`group relative grid gap-6 overflow-hidden border border-white/10 bg-zinc-950/70 p-4 md:grid-cols-12 md:gap-8 md:p-6 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? "rgba(244,244,245,0.55)" : "rgba(255,255,255,0.1)",
        boxShadow: isHovered
          ? "0 0 0 1px rgba(244,244,245,0.22), 0 18px 44px rgba(255,255,255,0.08)"
          : "0 0 0 0 rgba(255,255,255,0)",
        transition: "border-color 450ms cubic-bezier(0.16,1,0.3,1), box-shadow 450ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="md:col-span-4">
        <div className="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
          <div
            className="h-px bg-white transition-all duration-700"
            style={{
              width: isHovered ? 44 : 28,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          {subheading ? (
            <p
              className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 transition-all duration-700"
              style={{
                letterSpacing: isHovered ? "0.28em" : "0.24em",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {subheading}
            </p>
          ) : null}
        </div>

        {heading ? (
          <h3 className="mb-4 text-2xl font-black uppercase leading-[0.95] text-white md:text-3xl">
            <span
              className="block transition-all duration-700"
              style={{
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {headingFirst}
            </span>
            {headingRest ? (
              <span
                className="block transition-all duration-700"
                style={{
                  transform: isHovered ? "translateX(10px)" : "translateX(0)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {headingRest}
              </span>
            ) : null}
          </h3>
        ) : null}

        {description ? (
          <p
            className="text-sm leading-relaxed text-zinc-400 transition-all duration-700"
            style={{
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              color: isHovered ? "rgb(212 212 216)" : "rgb(161 161 170)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {description}
          </p>
        ) : null}

        <a href={href} className="mt-6 inline-flex items-center gap-4">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500"
            style={{
              borderColor: isHovered ? "rgba(244,244,245,1)" : "rgba(244,244,245,0.35)",
              backgroundColor: isHovered ? "rgba(244,244,245,1)" : "transparent",
              color: isHovered ? "rgb(0 0 0)" : "rgb(244 244 245)",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500"
              style={{
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </span>
          <span
            className="text-xs uppercase tracking-[0.2em] text-zinc-300 transition-all duration-700"
            style={{
              opacity: isHovered ? 1 : 0.65,
              transform: isHovered ? "translateX(0)" : "translateX(-6px)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {exploreLabel}
          </span>
        </a>
      </div>

      <a
        href={href}
        className="relative block overflow-hidden md:col-span-8"
        onMouseMove={handlePointerMove}
      >
        <div
          className="relative transition-all duration-700"
          style={{
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
        <div
          className="pointer-events-none absolute inset-0 border transition-all duration-700"
          style={{
            borderColor: isHovered ? "hsl(var(--foreground) / 0.15)" : "transparent",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="relative h-[280px] w-full overflow-hidden border border-white/10 md:h-[340px]">
          <div
            className="absolute -inset-1 transition-all duration-700"
            style={{
              boxShadow: isHovered ? "0 24px 64px hsl(var(--foreground) / 0.1)" : "0 0 0 transparent",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-all duration-1000"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              filter: isHovered ? "saturate(1.08) contrast(1.08) brightness(1.04)" : "none",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent transition-opacity duration-500"
            style={{ opacity: isHovered ? 0.25 : 0.75 }}
          />

          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.45), rgba(255,255,255,0.1) 38%, transparent 72%), radial-gradient(circle 320px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.16), transparent 72%)`,
            }}
          />

          {/* Corner accents */}
          <div
            className="absolute left-2 top-2 h-5 w-px bg-white/80 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "50ms",
            }}
          />
          <div
            className="absolute left-2 top-2 h-px w-5 bg-white/80 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "100ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-5 w-px bg-white/80 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "150ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-px w-5 bg-white/80 transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "right",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "200ms",
            }}
          />
        </div>

        {indexLabel ? (
          <span
            className="pointer-events-none absolute bottom-2 right-2 font-mono text-xs text-white/70 transition-all duration-700 md:text-sm"
            style={{
              opacity: isHovered ? 1 : 0.5,
              transform: "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {indexLabel}
          </span>
        ) : null}
        </div>
      </a>
    </div>
  )
}
