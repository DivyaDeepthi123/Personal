import HeroSection from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <main className="container min-h-screen py-20 vertical-rhythm">
      <HeroSection />
      <Projects />
      <Experience />
      <TechStack />
      <Connect />
    </main>
  );
}
