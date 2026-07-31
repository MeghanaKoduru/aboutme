import { motion } from 'framer-motion'

/**
 * Shared scroll-reveal wrapper: children fade in and slide up the first time
 * they enter the viewport. Keeps motion consistent across every section.
 */
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Section shell with a numbered mono kicker ("02 · Experience") and title.
 * Every page section shares this skeleton so spacing/typography stay uniform.
 */
export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">
            {index} · {title}
          </p>
          <h2 className="section-title">{title}</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-cyan-400 to-violet-500" />
        </Reveal>
        {children}
      </div>
    </section>
  )
}
