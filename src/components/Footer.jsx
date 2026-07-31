import { profile } from '../data/resume.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/5">
      <div className="section-shell flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  )
}
