import { SectionHeader } from "@/components/section-header";

export function About() {
  return (
    <section id="about" className="section card-section" data-reveal>
      <SectionHeader
        eyebrow="Profile"
        title="About"
        subtitle="Full-stack engineer focused on outcomes, reliability, and team velocity."
        icon="user"
      />
      <div className="about-card">
        <p>
          I have 3 years of professional experience delivering production features across frontend, backend APIs, and cloud
          services. I collaborate effectively across teams, take ownership of my work end-to-end, and stay committed to high
          quality delivery.
        </p>
        <p>
          I&apos;m always open to chatting about full-stack product work, engineering best practices, and collaboration on meaningful
          software problems.
        </p>
      </div>
    </section>
  );
}
