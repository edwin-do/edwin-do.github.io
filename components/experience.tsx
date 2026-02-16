import Image from "next/image";
import { Icon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section" data-reveal>
      <SectionHeader eyebrow="Career" title="Experience" subtitle="Selected roles and outcomes." icon="briefcase" />
      <div className="timeline" role="list">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-item" role="listitem">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="experience-company-row">
                {item.logoSrc ? (
                  <div className="company-logo">
                    <Image src={item.logoSrc} alt={item.logoAlt ?? `${item.company} logo`} width={44} height={44} />
                  </div>
                ) : (
                  <div className="company-logo company-logo-fallback" aria-label={`${item.company} logo fallback`}>
                    <span>{item.logoFallback ?? item.company.slice(0, 3).toUpperCase()}</span>
                  </div>
                )}
                <p className="experience-company-name">{item.company}</p>
              </div>
              <p className="timeline-period">{item.period}</p>
              <h3>
                {item.role}
                {item.isCurrent ? <span className="current-badge">Present</span> : null}
              </h3>
              {item.skills?.length ? (
                <div className="experience-skills" aria-label={`${item.company} relevant skills`}>
                  {item.skills.map((skill) => (
                    <span key={`${item.company}-${skill}`} className="experience-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
              <p>{item.summary}</p>
              {item.impact.length > 0 ? (
                <details className="impact-toggle">
                  <summary>Show impact highlights</summary>
                  <ul>
                    {item.impact.map((point) => (
                      <li key={point}>
                        <Icon name="star" className="inline-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
