"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import TextBlockAnimation from "@/components/text-block-animation"

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" })
  const [headlineStarted, setHeadlineStarted] = useState(false)
  const [descriptionVisible, setDescriptionVisible] = useState(false)

  const handleHeadlineComplete = useCallback(() => {
    window.setTimeout(() => {
      setDescriptionVisible((current) => (current ? current : true))
    }, 420)
  }, [])

  useEffect(() => {
    if (isInView) {
      setHeadlineStarted(true)
    }
  }, [isInView])

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [36, -36])

  return (
    <section id="about" ref={sectionRef} className="border-y border-white/10 bg-black">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24">
        <div className="md:col-span-6">
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-[10px] tracking-[0.24em] text-zinc-400"
          >
            THE PHILOSOPHY
          </motion.p>

          <div className="mb-6">
            {headlineStarted ? (
              <TextBlockAnimation
                animateOnScroll={false}
                playOnce
                delay={0.1}
                blockColor="#3f3f46"
                stagger={0.86}
                duration={0.72}
                onComplete={handleHeadlineComplete}
              >
                <h2 className="text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                  Precision Over
                  <br />
                  Promiscuity.
                </h2>
              </TextBlockAnimation>
            ) : (
              <h2 className="text-4xl font-black uppercase leading-[0.95] text-white opacity-0 md:text-6xl">
                Precision Over
                <br />
                Promiscuity.
              </h2>
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={descriptionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base"
          >
            In an age of digital noise, we choose the path of intentionality. Every pixel is a decision.
            Every interaction is a conversation. We don&apos;t just build websites; we curate environments.
          </motion.p>
        </div>

        <div className="md:col-span-6">
          <div ref={imageRef} className="relative overflow-hidden border border-white/10">
            <motion.div
              style={{ y: imageParallaxY }}
              initial={{ opacity: 0, filter: "blur(16px)", scale: 1.04 }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <img
                src="/images/logo.png"
                alt="Monochrome architectural interior"
                className="h-full min-h-[300px] w-full object-cover grayscale"
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0">
              <motion.span
                className="absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                animate={{ x: ["-20%", "420%"] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.span
                className="absolute right-0 w-px h-24 bg-gradient-to-b from-transparent via-white/90 to-transparent"
                animate={{ y: ["-20%", "420%"] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 0.8 }}
              />
              <motion.span
                className="absolute bottom-0 h-px w-24 bg-gradient-to-l from-transparent via-white/90 to-transparent"
                animate={{ x: ["420%", "-20%"] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1.6 }}
              />
              <motion.span
                className="absolute left-0 w-px h-24 bg-gradient-to-t from-transparent via-white/90 to-transparent"
                animate={{ y: ["420%", "-20%"] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
