import heroImage from '../assets/hero.png'

export default function Contact() {
  return (
    <section id="contact" className="container-custom py-16 sm:py-20">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:p-10">
        <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/8 bg-[var(--color-card)] p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let’s build something useful.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
              If you need a reliable engineer for SaaS architecture, frontend delivery, or product implementation, send a message.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/20 p-3">
            <img src={heroImage} alt="Contact illustration" className="w-full rounded-[1.2rem] object-cover" />
          </div>
        </div>

        <form className="space-y-4 rounded-[1.75rem] border border-white/8 bg-black/20 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/75">Name</label>
            <input
              id="name"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-card)] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-primary)]/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/75">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-card)] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-primary)]/50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white/75">Message</label>
            <textarea
              id="message"
              rows="6"
              className="w-full rounded-2xl border border-white/10 bg-[var(--color-card)] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-primary)]/50"
              placeholder="Tell me about your project."
            />
          </div>

          <button className="inline-flex w-full items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,59,59,0.28)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
