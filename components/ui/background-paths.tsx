"use client"

import { motion } from "framer-motion"

type BackgroundPathsProps = {
    className?: string
}

function AnimatedPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 34 }, (_, index) => ({
        id: index,
        d: `M-${380 - index * 5 * position} -${189 + index * 6}C-${
            380 - index * 5 * position
        } -${189 + index * 6} -${312 - index * 5 * position} ${216 - index * 6} ${
            152 - index * 5 * position
        } ${343 - index * 6}C${616 - index * 5 * position} ${470 - index * 6} ${
            684 - index * 5 * position
        } ${875 - index * 6} ${684 - index * 5 * position} ${875 - index * 6}`,
        width: 0.6 + index * 0.025,
        opacity: 0.03 + index * 0.008,
        duration: 18 + (index % 8),
    }))

    return (
        <svg className="h-full w-full text-white" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
            <title>Background Paths</title>
            {paths.map((path) => (
                <motion.path
                    key={path.id}
                    d={path.d}
                    stroke="currentColor"
                    strokeWidth={path.width}
                    strokeOpacity={path.opacity}
                    initial={{ pathLength: 0.4, pathOffset: 0, opacity: path.opacity }}
                    animate={{ pathLength: [0.4, 1, 0.4], pathOffset: [0, 1, 0], opacity: [path.opacity * 0.7, path.opacity, path.opacity * 0.7] }}
                    transition={{ duration: path.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
            ))}
        </svg>
    )
}

export function BackgroundPaths({ className = "" }: BackgroundPathsProps) {
    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
            <div className="absolute inset-0 opacity-70">
                <AnimatedPaths position={1} />
            </div>
            <div className="absolute inset-0 opacity-50">
                <AnimatedPaths position={-1} />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_45%)]" />
        </div>
    )
}
