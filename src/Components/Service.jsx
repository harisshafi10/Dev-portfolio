import { FiArrowUpRight, FiCode, FiLayout, FiSmartphone } from 'react-icons/fi'

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, production-ready web apps with React, modern CSS, and strong implementation detail.',
    icon: FiCode,
  },
  {
    title: 'App Development',
    description: 'Product-focused interfaces and backend integrations built for growth, stability, and maintainability.',
    icon: FiSmartphone,
  },
  {
    title: 'UX-Focused Design',
    description: 'Clear information hierarchy, conversion-aware layout, and mobile-first interaction patterns.',
    icon: FiLayout,
  },
]

export default function Services() {
  return (
    <section id="services" className="container-custom py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built to solve product problems, not add noise.</h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const ServiceIcon = service.icon

          return (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition hover:-translate-y-1 hover:border-[var(--color-primary)]/35"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/12 text-[var(--color-primary)]">
                <ServiceIcon size={22} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-[var(--color-primary)]"
              >
                Get this service
                <FiArrowUpRight />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
