import Section, { Reveal } from './Section.jsx'
import { skillGroups } from '../data/resume.js'

export default function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.08}>
            <div className="card h-full p-6 transition hover:border-violet-400/40">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
