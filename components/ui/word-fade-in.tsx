"use client";

import { motion, Variants } from "framer-motion";
import type { ElementType } from "react";

import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  startDelay?: number;
  as?: ElementType;
  variants?: Variants;
}

function WordFadeIn({
  words,
  delay = 0.15,
  startDelay = 0,
  as = "h1",
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: startDelay + i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </MotionTag>
  );
}

export { WordFadeIn };