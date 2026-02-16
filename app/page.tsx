import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <Header />
      <section id="hero" aria-label="Hero">
        <Hero />
      </section>

      <section id="about" aria-label="About">
        <About />
      </section>

      <section id="projects" aria-label="Projects">
        <Projects />
      </section>
    </main>
  );
}
