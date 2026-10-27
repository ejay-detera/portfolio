import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import ShapeGrid from "./components/ShapeGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Global Background Animated ShapeGrid across the entire portfolio */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShapeGrid
          speed={0.25}
          squareSize={36}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.05)"
          hoverFillColor="rgba(229, 169, 60, 0.16)"
          shape="square"
          hoverTrailAmount={3}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-grow">
          <div className="animate-enter">
            <Hero />
          </div>

          <div className="animate-enter delay-1">
            <Projects />
          </div>

          <div className="animate-enter delay-2">
            <Experience />
          </div>

          <div className="animate-enter delay-3">
            <Certificates />
          </div>
        </main>

        <div className="animate-enter delay-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
