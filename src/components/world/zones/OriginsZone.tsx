import { about } from '../../../content/portfolioContent'

export function OriginsZone() {
  return (
    <section className="zone zone--origins">
      <h1 className="hero-name">
        <span>{about.name}</span>
      </h1>
      <p className="zone-lead">{about.title}</p>

      <div className="origins-layout">
        <div className="origins-bio">
          <p className="origins-objective">{about.objective}</p>
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="conditions" aria-labelledby="conditions-heading">
          <h2 id="conditions-heading">Current conditions</h2>
          <dl>
            {about.stats.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
