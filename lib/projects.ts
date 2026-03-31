export type Project = {
  slug: string
  title: string
  meta: string
  year: string
  image: string
  summary: string
}

export const projects: Project[] = [
  {
    slug: "aether-lighting",
    title: "Aether Lighting",
    meta: "E-Commerce / Branding",
    year: "2024",
    image: "/images/projects/lumen-studio/cover.svg",
    summary: "A premium commerce experience with strong visual hierarchy and product storytelling.",
  },
  {
    slug: "brutalist-arch",
    title: "Brutalist Arch",
    meta: "Built Environment",
    year: "2023",
    image: "/images/projects/void-arch/cover.svg",
    summary: "A portfolio-first site for architectural work focused on atmosphere and clarity.",
  },
  {
    slug: "void-magazine",
    title: "Void Magazine",
    meta: "Editorial Design",
    year: "2024",
    image: "/images/projects/noir-objects/cover.svg",
    summary: "An editorial system for long-form storytelling, interviews, and curated features.",
  },
  {
    slug: "orbit-os",
    title: "Orbit OS",
    meta: "UI / UX Systems",
    year: "2023",
    image: "/images/projects/tide-digital/cover.svg",
    summary: "A product marketing experience aligned to enterprise workflows and feature discovery.",
  },
]
