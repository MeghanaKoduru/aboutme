import { motion } from 'framer-motion'
import Section, { Reveal } from './Section.jsx'
import { profile } from '../data/resume.js'

// Decorative-but-thematic bar chart that grows in on scroll
const bars = [38, 62, 48, 80, 58, 92, 70, 100]

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-[17px] leading-relaxed">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* Animated ascending bar chart — echoes the hero's data motif */}
        <Reveal delay={0.2} className="hidden lg:block">
          <div className="card flex h-full min-h-[220px] items-end gap-3 p-8">
            {bars.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500/70 to-violet-500/70"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
