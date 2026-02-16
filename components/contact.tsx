import { Icon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="section contact-section" data-reveal>
      <h2 className="section-title">
        <Icon name="mail" className="section-title-icon" />
        <span>Open to Chat</span>
      </h2>
      <p>
        I&apos;m always happy to connect about software, product ideas, and engineering challenges.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="mailto:doe@mcmaster.ca">
          <Icon name="mail" className="inline-icon button-icon" />
          Send Email
        </a>
        <a className="button button-secondary" href="https://www.linkedin.com/in/edwin-do/" target="_blank" rel="noreferrer">
          <Icon name="linkedin" className="inline-icon button-icon" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
