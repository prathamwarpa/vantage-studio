import { BackgroundPaths } from "@/components/ui/background-paths"
import { PhilosophySection } from "@/components/philosophy-section"
import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import { SpecialText } from "@/components/ui/special-text"
import { HeroContent } from "@/components/hero-content"
import { projects } from "@/lib/projects"
import Link from "next/link"

const services = [
  {
    name: "Brand Strategy",
    description: "Positioning frameworks, messaging systems, and narrative direction for premium brands.",
  },
  {
    name: "Web Design",
    description: "High-contrast digital experiences with conversion-focused layouts and sharp visual hierarchy.",
  },
  {
    name: "Editorial Systems",
    description: "Scalable content architecture, publishing cadence, and typographic standards for consistency.",
  },
  {
    name: "Creative Direction",
    description: "Art direction across campaigns, identity extensions, and launch-ready visual execution.",
  },
]

const testimonials = [
  {
    text:
      "Minimalism at its peak. Every page feels considered, sharp, and unmistakably premium.",
    author: {
      name: "Mina Patel",
      handle: "Product Lead, Northline",
      avatar: "https://placehold.co/96x96/151515/555555",
    },
  },
  {
    text:
      "They translated our positioning into a digital system that is both refined and high-performing.",
    author: {
      name: "Julian Reeve",
      handle: "Founder, Atelier 11",
      avatar: "https://placehold.co/96x96/151515/555555",
    },
  },
  {
    text:
      "The team brought clarity to our message and gave us a visual direction that feels timeless.",
    author: {
      name: "Aria Chen",
      handle: "Marketing Director, Lumen",
      avatar: "https://placehold.co/96x96/151515/555555",
    },
  },
  {
    text:
      "A rare mix of strategic rigor and editorial taste. The execution exceeded every expectation.",
    author: {
      name: "Noah Bell",
      handle: "Creative Lead, Void Arch",
      avatar: "https://placehold.co/96x96/151515/555555",
    },
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="relative z-10">
        {/* Hero (separate animated section) */}
        <section id="hero" className="relative isolate min-h-screen overflow-hidden border-b border-white/10 bg-black">
          <BackgroundPaths />

          {/* Navbar */}
          <header className="relative z-20">
            <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
              <p className="text-sm font-semibold tracking-[0.2em] text-white">Vantage Studio</p>
              <nav aria-label="Primary navigation" className="hidden gap-10 md:flex">
                <a href="#work" className="text-xs tracking-[0.22em] text-zinc-300">
                  WORK
                </a>
                <a href="#services" className="text-xs tracking-[0.22em] text-zinc-300">
                  SERVICES
                </a>
                <a href="#about" className="text-xs tracking-[0.22em] text-zinc-300">
                  ABOUT
                </a>
                <a href="#contact" className="text-xs tracking-[0.22em] text-zinc-300">
                  CONTACT
                </a>
              </nav>
              <a
                href="#contact"
                className="border border-white/35 px-4 py-2 text-[11px] tracking-[0.2em] text-white"
              >
                INQUIRY
              </a>
            </div>
          </header>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[1280px] items-center justify-center px-5 py-20 md:px-8">
            <HeroContent />
          </div>
        </section>

        {/* Main content (separate black background) */}
        <main className="relative z-10 bg-black">
          {/* Services */}
          <section id="services" className="border-y border-white/10 bg-black">
            <div className="mx-auto w-full max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">Services</h2>
                <p className="text-xs tracking-[0.2em] text-zinc-400">01 — 04</p>
              </div>
              <ul className="border-y border-white/15">
                {services.map((service, index) => (
                  <li
                    key={service.name}
                    className="group border-b border-white/15 last:border-b-0"
                  >
                    <button
                      type="button"
                      className="w-full px-0 py-5 text-left md:py-7"
                      aria-label={`Service ${index + 1}: ${service.name}`}
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="w-8 text-[11px] tracking-[0.2em] text-zinc-500 md:w-10">{String(index + 1).padStart(2, "0")}</span>
                        <div className="min-w-0 flex-1">
                          <SpecialText
                            inView
                            speed={22}
                            className="h-auto text-sm uppercase tracking-[0.2em] text-zinc-100 md:text-base"
                          >
                            {service.name}
                          </SpecialText>
                        </div>
                        <span className="text-lg text-zinc-500">→</span>
                      </div>

                      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                        <div className="h-px w-full bg-white/15" />
                        <span className="text-[10px] tracking-[0.2em] text-zinc-600">EXPAND</span>
                      </div>

                      <p className="max-h-0 overflow-hidden pr-10 text-sm leading-relaxed text-zinc-400 transition-all duration-300 group-hover:mt-3 group-hover:max-h-20 group-focus-within:mt-3 group-focus-within:max-h-20">
                        {service.description}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Portfolio */}
          <section id="work" className="mx-auto w-full max-w-[1280px] bg-black px-5 py-16 md:px-8 md:py-24">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-4xl">
                All Projects
              </h2>
              <p className="text-xs tracking-[0.2em] text-zinc-400">{`01 — ${String(projects.length).padStart(2, "0")}`}</p>
            </div>

            <div className="space-y-6">
              {projects.map((project) => (
                <article key={project.slug} className="border border-white/10 p-5 md:p-6">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
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

            <div className="mt-10 flex justify-end">
              <Link
                href="/projects"
                className="border border-white/35 px-5 py-3 text-[11px] tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          </section>

          <PhilosophySection />

          <TestimonialsSection
            title="Testimonials"
            description="Feedback from founders and teams we have partnered with."
            testimonials={testimonials}
            className="mx-auto w-full max-w-[1280px] border-y border-white/10 !bg-black px-0 py-16 md:py-24"
          />

          {/* Contact */}
          <section id="contact" className="border-y border-white/10 bg-black">
            <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24">
              <div className="md:col-span-5">
                <p className="mb-4 text-[10px] tracking-[0.24em] text-zinc-500">READY TO SCALE?</p>
                <h2 className="mb-4 text-4xl font-black uppercase leading-[0.9] text-white md:text-6xl">
                  Start A New Conversation
                </h2>
                <a href="mailto:hello@obsidian.gallery" className="text-xl text-zinc-100 underline md:text-3xl">
                  hello@obsidian.gallery
                </a>
              </div>

              <div className="md:col-span-7">
                <form
                  className="grid gap-4 border border-white/12 bg-zinc-950 p-5 md:grid-cols-2 md:p-6"
                  action="mailto:hello@obsidian.gallery"
                  method="post"
                  encType="text/plain"
                >
                  <label className="flex flex-col gap-2 text-xs tracking-[0.12em] text-zinc-400">
                    NAME
                    <input
                      type="text"
                      name="name"
                      required
                      className="border border-white/20 bg-black px-3 py-3 text-sm text-white outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs tracking-[0.12em] text-zinc-400">
                    EMAIL
                    <input
                      type="email"
                      name="email"
                      required
                      className="border border-white/20 bg-black px-3 py-3 text-sm text-white outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs tracking-[0.12em] text-zinc-400 md:col-span-2">
                    PROJECT TYPE
                    <select
                      name="service"
                      className="border border-white/20 bg-black px-3 py-3 text-sm text-white outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-xs tracking-[0.12em] text-zinc-400 md:col-span-2">
                    MESSAGE
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="border border-white/20 bg-black px-3 py-3 text-sm text-white outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full border border-white bg-white px-4 py-3 text-xs font-semibold tracking-[0.18em] text-black md:col-span-2 md:w-auto"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 px-5 py-6 text-center md:flex-row md:justify-between md:gap-6 md:px-8 md:py-5 md:text-left">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">OBSIDIAN</p>
            <nav
              aria-label="Social links"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] tracking-[0.2em] text-zinc-400 md:justify-start"
            >
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">TWITTER</a>
              <a href="#">PRIVACY</a>
            </nav>
            <p className="text-[11px] tracking-[0.14em] text-zinc-500">
              © 2026 OBSIDIAN GALLERY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
