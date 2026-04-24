const items = [
  {
    title: 'SaaS Billing Dashboard',
    tag: 'React + Node.js',
    summary: 'Analytics-rich admin surface with clean navigation, payment workflows, and responsive dashboards.',
  },
  {
    title: 'Developer Portfolio',
    tag: 'Design + Frontend',
    summary: 'Bold portfolio experience focused on mobile readability, clear hierarchy, and strong visual rhythm.',
  },
  {
    title: 'Cloud Operations Portal',
    tag: 'AWS Architecture',
    summary: 'Operational tooling for monitoring deployments, reviewing services, and handling incident workflows.',
  },
  {
    title: 'Client Project Tracker',
    tag: 'Full Stack',
    summary: 'Task, timeline, and collaboration tooling designed for fast-moving client delivery teams.',
  },
  {
    title: 'Commerce Experience',
    tag: 'UI Engineering',
    summary: 'High-conversion storefront layouts with reusable sections and device-conscious performance tuning.',
  },
  {
    title: 'Internal Reporting Tool',
    tag: 'Data Interfaces',
    summary: 'Readable reporting surfaces with filtering, summaries, and information-dense yet usable layouts.',
  },
]

export default function Portfolio() {
  return (
    <section id="projects" className="container-custom py-16 sm:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">Projects</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work across product, platform, and frontend delivery.</h2>
        </div>
        <a href="#contact" className="text-sm font-medium text-white/70 transition hover:text-[var(--color-primary)]">
          Start a project
        </a>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--color-card)]"
          >
            <div className="flex min-h-56 items-end bg-[linear-gradient(135deg,rgba(255,59,59,0.18),rgba(255,255,255,0.03))] p-6">
              <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                0{index + 1}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">{item.tag}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
