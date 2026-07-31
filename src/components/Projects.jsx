import Section, { Reveal } from './Section.jsx'
import { projects } from '../data/resume.js'

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          // Cards with a `link` render as a real anchor to the repo; others stay plain
          const Card = project.link ? 'a' : 'article'
          const linkProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}
          return (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
            <Card
              {...linkProps}
              className="card group flex h-full flex-col p-6 transition-all duration-300
                hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-600
                  dark:text-white dark:group-hover:text-cyan-300">
                  {project.title}
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
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </Card>
          </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
