import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Interests } from "@/components/interests";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
