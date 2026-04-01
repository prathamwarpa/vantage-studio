import { projects } from "@/lib/projects"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-3 text-xs tracking-[0.24em] text-zinc-500">OUR WORK</p>
            <h1 className="text-4xl font-black uppercase leading-[0.9] text-white md:text-6xl">
              All Projects
            </h1>
          </div>
          <Link
            href="/"
            className="border border-white/35 px-4 py-2 text-[11px] tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            BACK HOME
          </Link>
        </div>

        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          All the projects we have published. Explore here to find ideas for your own business!
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.slug} className="border border-white/10 p-5 md:p-6">
              <h2 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {project.summary}
              </p>
              <Link
                href={project.href}
                className="mt-4 inline-block text-xs tracking-[0.18em] text-zinc-100 underline underline-offset-4 transition hover:text-white"
              >
                VISIT WEBSITE
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
