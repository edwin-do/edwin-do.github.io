import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edwin-do.github.io"),
  title: {
    default: "Edwin Do | Full-Stack Software Developer",
    template: "%s | Edwin Do"
  },
  description:
    "Full-stack software developer portfolio showcasing production experience, projects, skills, and contact details.",
  keywords: [
    "Edwin Do",
    "Full-stack developer",
    "Software developer Toronto",
    "React",
    "Lit",
    ".NET",
    "AWS",
    "Portfolio"
  ],
  alternates: {
    canonical: "/"
  },
  authors: [{ name: "Edwin Do" }],
  openGraph: {
    title: "Edwin Do | Full-Stack Software Developer",
    description: "Portfolio website with experience, skills, and featured full-stack work.",
    url: "https://edwin-do.github.io",
    siteName: "Edwin Do Portfolio",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/profile_picture.jpg",
        width: 1200,
        height: 630,
        alt: "Edwin Do full-stack software developer portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Do | Full-Stack Software Developer",
    description: "Full-stack engineer sharing experience, projects, and ideas.",
    images: ["/images/profile_picture.jpg"]
  },
  icons: {
    icon: "/icons/brand-mark.svg",
    shortcut: "/icons/brand-mark.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
