import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Initial Page Load / Refresh Loading Screen */}
      <LoadingScreen />

      {/* Editorial Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        {/* About Me & Bento Grid Section */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* What I can do for you (Services 4-column row) */}
        <ScrollReveal>
          <Services />
        </ScrollReveal>

        {/* Selected Work / Featured Projects Grid */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Career Experience & Education Timeline */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* Verified Credentials & Certificate Gallery */}
        <ScrollReveal>
          <Certificates />
        </ScrollReveal>

        {/* Have a Project in Mind? (Yellow Ochre Banner) */}
        <ScrollReveal>
          <CallToAction />
        </ScrollReveal>
      </main>

      {/* Footer / Contact Section */}
      <Footer />
    </div>
  );
}
