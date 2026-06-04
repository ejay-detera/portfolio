import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-base text-text-primary relative overflow-hidden">
      {/* Subtle Ambient Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Blob 1 (glowing accent shade in hero region) */}
        <div className="absolute top-[5%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-accent/5 blur-[80px] sm:blur-[120px] animate-blob" />
        {/* Blob 2 (glowing surface shade in projects region) */}
        <div className="absolute top-[35%] right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-surface/10 blur-[90px] sm:blur-[130px] animate-blob [animation-delay:6s]" />
        {/* Blob 3 (glowing accent shade in experience region) */}
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] rounded-full bg-accent/5 blur-[85px] sm:blur-[125px] animate-blob [animation-delay:12s]" />
      </div>

      {/* Navigation */}
      <Navbar />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        {/* About Me Section */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Work Experience Section */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
      </main>

      {/* Footer / Socials Section */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}


