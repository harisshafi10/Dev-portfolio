import heroImage from '../assets/hero.png'

export default function About() {
  const skills = [
    { name: 'System Design', value: 88 },
    { name: 'React Frontends', value: 82 },
    { name: 'Node.js APIs', value: 91 },
    { name: 'Cloud Delivery', value: 86 },
  ]

  return (
    <section id="about" className="container-custom grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute inset-x-8 bottom-0 h-20 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-card)] p-3">
          <img src={heroImage} alt="Developer workspace illustration" className="w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">About Me</p>
        <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          I focus on shipping useful software, not decorative complexity.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
          My work centers on backend reliability, pragmatic architecture, and frontend interfaces that are easy to use
          across devices. I care about performance, maintainability, and clear product outcomes.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
            <p className="text-lg font-semibold text-white">Product mindset</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              I translate technical decisions into business impact and ship with clear priorities.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
            <p className="text-lg font-semibold text-white">Execution speed</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              From infrastructure to UI polish, I keep the implementation path direct and practical.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-[var(--color-muted)]">{skill.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/8">
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,#ff3b3b,#ff7a59)]"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
