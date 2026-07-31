import Section, { Reveal } from './Section.jsx'
import { education } from '../data/resume.js'

export default function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <div className="mt-12 space-y-4">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 0.08}>
            <div className="card flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 p-6
              transition hover:border-cyan-400/40">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{entry.school}</h3>
                <p className="mt-0.5 text-[15px]">{entry.degree}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{entry.period}</p>
                <p className="mt-1 font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  GPA {entry.gpa}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
