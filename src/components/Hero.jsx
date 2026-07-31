import { motion } from 'framer-motion'
import { profile } from '../data/resume.js'
import profileImg from '../assets/profile.jpg'

/** Circular avatar with a slow-spinning gradient ring and soft glow. */
function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      className="group relative mx-auto h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
    >
      {/* Soft glow behind the photo */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-400/25 to-violet-500/25 blur-2xl" />
      {/* Spinning conic-gradient border */}
      <div
        className="absolute -inset-1 animate-[spin_10s_linear_infinite] rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, transparent 65%, #22d3ee)',
        }}
      />
      <img
        src={profileImg}
        alt="Portrait of Meghana Koduru"
        className="relative h-full w-full rounded-full border-4 border-ink-950 object-cover
          transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      {/* Faint grid backdrop — reads as chart paper without stealing attention */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          [background-image:linear-gradient(to_right,rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.07)_1px,transparent_1px)]
          [background-size:56px_56px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-cyan-400"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              Meghana Koduru
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
            >
              {profile.title} · {profile.location}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mt-5 max-w-xl text-lg text-slate-400 lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2.5 text-sm
                  font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold
                  text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Contact
              </a>
              <a
                href={profile.resumeFile}
                download="Meghana_Koduru_Resume.pdf"
                className="group inline-flex items-center gap-2 px-3 py-2.5 text-sm font-semibold
                  text-slate-300 transition hover:text-cyan-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          <Avatar />
        </div>
      </div>
    </section>
  )
}
