import HeroSection from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <main className="container min-h-screen py-20 vertical-rhythm">
      <HeroSection />
      <About />
      <Education />
      <Projects />
      <Experience />
      <TechStack />
      <Connect />
    </main>
  );
}
