import { Icon, type IconName } from "@/components/icons";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: IconName;
};

export function SectionHeader({ eyebrow, title, subtitle, icon }: SectionHeaderProps) {
  return (
    <header className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">
        {icon ? <Icon name={icon} className="section-title-icon" /> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
