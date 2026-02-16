import { Icon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { interests } from "@/data/interests";

const interestIcon = (title: string) => {
  if (title.includes("Travel")) return "map" as const;
  if (title.includes("Culinary")) return "utensils" as const;
  if (title.includes("Badminton")) return "badminton" as const;
  return "star" as const;
};

export function Interests() {
  return (
    <section id="interests" className="section" data-reveal>
      <SectionHeader eyebrow="Outside Work" title="Interests" subtitle="What keeps me focused, creative, and energized." icon="map" />
      <div className="interests-grid">
        {interests.map((interest) => (
          <article key={interest.title} className="interest-card">
            <h3>
              <Icon name={interestIcon(interest.title)} className="inline-icon section-card-icon" />
              <span>{interest.title}</span>
            </h3>
            <p>{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
