import { profile } from "./data/profile";
import { AboutSection } from "./components/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ScrollToTop } from "./components/ScrollToTop";
import { Seo } from "./components/Seo";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const sectionIds = ["top", "about", "experience", "projects", "contacts"];
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen">
      <Seo profile={profile} />

      {/* декоративный «грид» поверх фона */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <Header name={profile.person.name} activeId={activeId} />

      <main id="content">
        <Hero profile={profile} />
        <AboutSection profile={profile} />
        <ExperienceSection profile={profile} />
        <ProjectsSection profile={profile} />
        <ContactsSection profile={profile} />
      </main>

      <Footer profile={profile} />
      <ScrollToTop />
    </div>
  );
}

