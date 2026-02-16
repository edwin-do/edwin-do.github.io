import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "D2L",
    role: "Software Developer 2",
    period: "Jun 2023 - Present",
    summary:
      "Working on the Extensibility Experience team to build platforms that enable educator and administrator workflows in the Learning Management System.",
    isCurrent: true,
    skills: ["Lit", ".NET (C#)", "AWS", "MS SQL", "REST APIs", "Workato", "CloudWatch", "Kibana"],
    logoSrc: "/images/d2l_logo.png",
    logoAlt: "D2L logo",
    logoFallback: "D2L",
    impact: []
  },
  {
    company: "FreshBooks",
    role: "Software Engineering Intern",
    period: "May 2022 - Aug 2022",
    summary:
      "Built and improved backend API workflows for accounting report features using Flask and Django while collaborating with product and backend teams.",
    skills: ["Flask", "Django", "REST APIs", "Microservices", "Backend Development"],
    logoSrc: "/images/freshbooks.jpg",
    logoAlt: "FreshBooks logo",
    impact: [
      "Implemented REST API endpoints for accounting report retrieval and integration using Flask and Django, enabling timely delivery of key product features.",
      "Improved microservice error handling and messaging clarity, reducing troubleshooting overhead for engineering and support teams.",
      "Contributed to architecture discussions and PR reviews that strengthened maintainability, consistency, and code quality across services."
    ]
  },
  {
    company: "MenloLab",
    role: "Software Developer Intern",
    period: "May 2021 - Dec 2021",
    summary:
      "Delivered frontend features and shipped an installable desktop application with cross-platform IPC support.",
    skills: ["Vue.js", "Tauri", "TypeScript", "Desktop Apps", "IPC", "Concurrency"],
    logoSrc: "/images/menlolab.png",
    logoAlt: "MenloLab logo",
    impact: [
      "Built repository views, file-tree navigation, and supporting UI tooling that improved developer workflow speed and product usability.",
      "Evaluated and prototyped cross-platform desktop options, then helped implement the selected Tauri solution with lower execution risk.",
      "Resolved race-condition issues in concurrent status refresh logic by implementing synchronization controls, improving runtime stability."
    ]
  },
  {
    company: "RBC",
    role: "Technical Systems Analyst",
    period: "Dec 2019 - Aug 2020",
    summary:
      "Contributed at RBC by adapting to cross-team collaboration and remote work while supporting technical initiatives during a period of rapid organizational change.",
    skills: ["Python", "SQL", "Selenium WebDriver", "Cross-Team Collaboration", "Remote Delivery"],
    logoSrc: "/images/rbc.png",
    logoAlt: "RBC logo",
    impact: [
      "Partnered across multiple RBC teams with distinct workflows and stakeholders, improving cross-team handoffs and execution consistency in a large enterprise environment.",
      "Delivered Python- and SQL-based technical support and strengthened QA workflows with Selenium WebDriver automation to increase testing reliability.",
      "Maintained delivery momentum during the 2020 shift to remote operations by adopting structured virtual collaboration and clear communication routines."
    ]
  }
];
