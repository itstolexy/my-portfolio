import React from "react";
import Header from "../components/header";

export default function About() {
  const technologies = [
    "HTML 5",
    "CSS 3",
    "JAVASCRIPT",
    "REACT",
    "REACT",
    "NEXT.JS",
    "TAILWIND CSS",
    "GIT",
    "GITHUB",
    "BOOTSTRAP",
    "FIGMA",
    "AZURE",
    "MATERIA-UI",
    "REDUX",
    "TYPE SCRIPT",
  ]; 
  return (
    <div className="pb-20">
      <Header />
      <main className="mx-32 text-tola-white mt-10">
        <h1 className="items-center font-bold text-6xl roboto typing-effect">
          About <span className="text-tola-green underline">Me.</span>
        </h1>
        <div className="flex flex-row mt-11 space-x-8">
          <div className="w-1/2 space-y-6 animate-name outfit text-lg">
            <p>
              I am a dedicated Frontend developer with two years of intensive
              learning and more than six months hands-on work experience in
              software development industry. I excel at creating responsive and
              user-friendly web interfaces. I am enthusiastic about leveraging
              technology to simplify life and I’m trilled to develop
              applications with intuitive interface globally.
            </p>
            <p>
              I am committed to continuous learning and staying updated with the
              latest industry trends and technologies to enhance user experience
              and drive project success. I am not limited to a language, I am
              willing to learn and utilize the tool required to build great
              applications for you.
            </p>
            <p>
              In my journey as a frontend developer, I have had the opportunity
              to work with a diverse set of languages and tools that have
              significantly contributed to the success of my projects. Below is
              an overview of the key languages and tools I have experience with.
            </p>
          </div>
          <figure className="h-[35rem] figure-container w-1/2 rounded-3xl p-8 bg-[url('/images/tola.jpg')] bg-cover bg-center" />
        </div>

        <section className="mt-20">
          <h1 className="items-center text-center font-bold text-6xl roboto animate-pulse">
            <span className="text-tola-green underline">LANGUAGES</span> AND{" "}
            <span className="text-tola-green underline">TOOLS</span>
          </h1>

          <div className="flex flex-wrap mt-10 gap-8 items-center justify-center">
            {" "}
            {technologies.map((tech, index) => (
              <h1
                key={index}
                className="animate-fade-in-up transition-transform duration-500 hover:scale-110 flex items-center justify-center w-40 p-2 text-sm border-2 rounded-3xl bg-tola-green border-transparent text-tola-white zilla"
              >
                <p className="text-lg zilla">{tech}</p>
              </h1>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
