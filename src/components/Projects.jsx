import Section, { Reveal } from './Section.jsx'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
            {/* `relative` + a stretched link on the title makes the whole card
                clickable without nesting anchors, so the GitHub "Code" link can
                sit on top (z-10) as an independent target. */}
            <article
              className="card group relative flex h-full flex-col p-6 transition-all duration-300
                hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-600
                  dark:text-white dark:group-hover:text-cyan-300">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {/* Linked cards show an external-link arrow; others a chart glyph */}
                {project.link ? (
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="mt-1 shrink-0 text-violet-400 opacity-60 transition duration-300
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  >
                    <path d="M7 17 17 7m0 0H9m8 0v8" />
                  </svg>
                ) : (
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    className="mt-1 shrink-0 text-violet-400 opacity-60 transition group-hover:opacity-100"
                  >
                    <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
                  </svg>
                )}
              </div>
              <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed">{project.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
                {/* Secondary repo link, kept clickable above the stretched link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="relative z-10 ml-auto inline-flex items-center gap-1.5 font-mono text-[11px]
                      text-slate-500 transition hover:text-cyan-600
                      dark:text-slate-400 dark:hover:text-cyan-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.54-.01 2.77-.01 3.15 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
