import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <Header />
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
