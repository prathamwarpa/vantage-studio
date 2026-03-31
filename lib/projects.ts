export type Project = {
  slug: string
  title: string
  meta: string
  year: string
  image: string
  summary: string
  href: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "meghalaya-travel",
    title: "Meghalaya Travel",
    meta: "Brand Identity / Web Design",
    year: "2024",
    image: "/images/projects/lumen-studio/cover.png",
    summary: "Destination storytelling and conversion-focused layout for a modern travel brand.",
    href: "/project-lumen-studio.html",
    featured: true,
  },
  {
    slug: "gobblin-cafe",
    title: "Gobblin Cafe",
    meta: "Editorial / Architecture",
    year: "2024",
    image: "/images/projects/void-arch/cover.png",
    summary: "A textured brand story and visual menu journey for a design-forward cafe concept.",
    href: "/project-void-arch.html",
    featured: true,
  },
  {
    slug: "kshetri-industries",
    title: "Kshetri Industries",
    meta: "E-Commerce / Product",
    year: "2024",
    image: "/images/projects/noir-objects/cover.png",
    summary: "Product-first information architecture designed for trust and efficient buying flow.",
    href: "/project-noir-objects.html",
    featured: true,
  },
  {
    slug: "himalayan-rides",
    title: "Himalayan Rides",
    meta: "Interactive / Cinematography",
    year: "2024",
    image: "/images/projects/the-silence/cover.png",
    summary: "Immersive ride discovery with cinematic transitions and high-impact visual pacing.",
    href: "/project-the-silence.html",
    featured: false,
  },
  {
    slug: "kshetri-control",
    title: "Kshetri Control",
    meta: "Platform Design",
    year: "2024",
    image: "/images/projects/tide-digital/cover.png",
    summary: "A clean dashboard narrative that makes complex enterprise controls feel approachable.",
    href: "/project-tide-digital.html",
    featured: false,
  },
  {
    slug: "magic-mountain-adventures",
    title: "Magic Mountain Adventures",
    meta: "Editorial / Branding",
    year: "2024",
    image: "/images/projects/facade/cover.png",
    summary: "Campaign-ready editorial framework built for seasonal storytelling and quick updates.",
    href: "/project-facade.html",
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
