import { Icon, type IconName } from "@/components/icons";

const navItems = [
  { href: "#about", label: "About", icon: "user" as IconName },
  { href: "#experience", label: "Experience", icon: "briefcase" as IconName },
  { href: "#skills", label: "Skills", icon: "code" as IconName },
  { href: "#interests", label: "Interests", icon: "map" as IconName },
  { href: "#contact", label: "Contact", icon: "mail" as IconName }
];

export function SiteNav() {
  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Primary">
        <a className="brand" href="#top">
          edwin do.
        </a>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <Icon name={item.icon} className="nav-icon" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
