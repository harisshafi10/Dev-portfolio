import { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="container-custom py-4">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--color-primary)]/60 bg-[var(--color-card)] text-lg font-black text-[var(--color-primary)] shadow-[0_0_30px_rgba(255,59,59,0.15)]">
            P
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Portfolio</p>
            <p className="text-base font-semibold text-white">Haris Shafi</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm tracking-wide text-white/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--color-primary)]">
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,59,59,0.28)]"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-[var(--color-card)] p-4 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-[var(--color-primary)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      )}
    </div>
  )
}
