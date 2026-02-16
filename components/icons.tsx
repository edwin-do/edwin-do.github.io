import type { SVGProps } from "react";

export type IconName =
  | "user"
  | "briefcase"
  | "code"
  | "spark"
  | "mail"
  | "github"
  | "linkedin"
  | "download"
  | "map"
  | "star"
  | "wrench"
  | "database"
  | "book"
  | "utensils"
  | "badminton";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="m8 16-4-4 4-4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="m12 3 1.9 4.6L19 9.5l-4.3 3.1 1.6 5.2L12 14.8 7.7 17.8l1.6-5.2L5 9.5l5.1-1.9L12 3Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.6-1.4-1.6-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.8-2.7-.3-5.6-1.4-5.6-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1.1-.4 3.5 1.3a12 12 0 0 1 6.4 0c2.4-1.7 3.5-1.3 3.5-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.6 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4V9Z" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M4 21h16" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
          <path d="M9 4v14" />
          <path d="M15 6v14" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.2 6.8 19l1-5.8-4.2-4.1 5.8-.8L12 3Z" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.7-2.7 2-2.6Z" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M4 19a2 2 0 0 1 2-2h14" />
          <path d="M6 2h14v18H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "utensils":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M4 3v8" />
          <path d="M7 3v8" />
          <path d="M4 7h3" />
          <path d="M5.5 11v10" />
          <path d="M14 3c2 2.5 2 5.5 0 8v10" />
          <path d="M14 3c-2 2.5-2 5.5 0 8" />
        </svg>
      );
    case "badminton":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
          <path d="M12 4v4" />
          <path d="M9.5 5.2 12 8" />
          <path d="M14.5 5.2 12 8" />
          <path d="M7.5 7l4.5 4.5L16.5 7" />
          <path d="M6 9.2 12 15l6-5.8" />
          <circle cx="12" cy="18.2" r="2.2" />
        </svg>
      );
    default:
      return null;
  }
}
