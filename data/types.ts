export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  impact: string[];
  skills?: string[];
  isCurrent?: boolean;
  logoSrc?: string;
  logoAlt?: string;
  logoFallback?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Interest = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
