import Link from 'next/link'

interface HeroProps {
  title: string
  lead: string
  bgImage: string
  buttons: { label: string; href: string; variant: 'primary' | 'secondary' | 'accent' }[]
  icon?: string
}

export default function Hero({ title, lead, bgImage, buttons, icon }: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${bgImage}')`,
      }}
    >
      <div className="container">
        <div className="hero-content">
          {icon && <div className="hero-icon">{icon}</div>}
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          <div className="btn-group">
            {buttons.map((b) => (
              <Link href={b.href} className={`btn btn-${b.variant}`} key={b.label}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
