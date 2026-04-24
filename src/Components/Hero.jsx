import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="container-custom grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
      <div className="order-2 lg:order-1">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
          Full Stack Engineer
        </p>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          Building fast, scalable products with clean interfaces.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          I am Haris Shafi, a software engineer focused on reliable backend systems, practical frontend delivery,
          and product-minded execution for startups and SaaS teams.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(255,59,59,0.28)]"
          >
            My Services
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]"
          >
            Recent Works
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-4">
            <p className="text-2xl font-bold text-white">8+</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Years building production systems</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-4">
            <p className="text-2xl font-bold text-white">20+</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Projects shipped across web and SaaS</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-4">
            <p className="text-2xl font-bold text-white">AWS</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Scalable cloud-first architecture</p>
          </div>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative w-full max-w-[22rem] sm:max-w-[26rem]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,59,59,0.35),transparent_60%)] blur-2xl" />
          <div className="absolute -left-4 top-6 h-24 w-24 rounded-full border border-[var(--color-primary)]/25 sm:-left-6 sm:h-32 sm:w-32" />
          <div className="absolute -right-3 bottom-8 h-18 w-18 rounded-full border border-white/10 sm:-right-5 sm:h-24 sm:w-24" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <img
              src={heroImage}
              alt="Portrait illustration"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
