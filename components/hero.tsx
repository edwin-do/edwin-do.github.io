import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import { socialLinks } from "@/data/interests";

const highlights = [
  { text: "3 years building and shipping production software", icon: "briefcase" as IconName },
  { text: "Full-stack delivery across UI, APIs, and cloud platforms", icon: "code" as IconName },
  { text: "Known for a keen eye for detail and engineering quality", icon: "spark" as IconName }
];

const metrics = [
  { label: "Countries Traveled", value: "9+" },
  { label: "AI Tool Adoption", value: "Active" },
  { label: "Years Experience", value: "3+" }
];

export function Hero() {
  return (
    <section className="hero" id="top" data-reveal>
      <div className="hero-inner">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow">Software Developer 2 - Full-Stack Engineer - Toronto</p>
            <h1>Edwin Do</h1>
            <p className="hero-copy">
              I build maintainable full-stack software that improves reliability, reduces operational friction, and delivers
              measurable outcomes for users and internal teams.
            </p>
            <ul className="hero-highlights" aria-label="Career highlights">
              {highlights.map((item) => (
                <li key={item.text}>
                  <Icon name={item.icon} className="inline-icon" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="hero-metrics" aria-label="Impact metrics">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                </article>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#experience" className="button button-primary">
                <Icon name="briefcase" className="inline-icon button-icon" />
                View Experience
              </a>
              <a href="/downloads/EdwinDoResume.pdf" className="button button-secondary" target="_blank" rel="noreferrer">
                <Icon name="download" className="inline-icon button-icon" />
                Resume
              </a>
            </div>
            <ul className="social-links" aria-label="Social links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <Icon
                      name={link.label === "GitHub" ? "github" : link.label === "LinkedIn" ? "linkedin" : "mail"}
                      className="inline-icon"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-media">
            <Image
              src="/images/profile_picture.jpg"
              alt="Portrait of Edwin Do"
              width={360}
              height={360}
              className="hero-image"
              sizes="(max-width: 640px) 65vw, (max-width: 1020px) 40vw, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
