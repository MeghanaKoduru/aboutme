import Section, { Reveal } from './Section.jsx'
import { experience } from '../data/resume.js'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      {/* Vertical timeline: gradient spine on the left, one node per role */}
      <div className="relative mt-12 space-y-12 before:absolute before:inset-y-1 before:left-[7px]
        before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-transparent">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="relative pl-10">
            {/* Timeline node — pulses on the current role */}
            <span
              className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2
                ${job.current
                  ? 'animate-pulse border-cyan-400 bg-cyan-400/30'
                  : 'border-violet-400 bg-white dark:bg-ink-950'}`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {job.role}
                <span className="text-cyan-600 dark:text-cyan-400"> · {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
