import { Icon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/data/skills";

const categoryIcon = (category: string) => {
  if (category.includes("Languages")) return "book" as const;
  if (category.includes("Frameworks")) return "code" as const;
  if (category.includes("DevOps")) return "wrench" as const;
  return "database" as const;
};

export function Skills() {
  return (
    <section id="skills" className="section card-section" data-reveal>
      <SectionHeader eyebrow="Capabilities" title="Skills" subtitle="Production-ready stack across full-stack delivery." icon="code" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.category} className="skills-card">
            <h3>
              <Icon name={categoryIcon(group.category)} className="inline-icon section-card-icon" />
              <span>{group.category}</span>
            </h3>
            <div className="skills-pill-list" role="list" aria-label={group.category}>
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill" role="listitem">
                  <Icon name="spark" className="inline-icon skill-chip-icon" />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
