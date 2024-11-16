import React from "react";
import Header from "../components/header";

export default function About() {
  const technologies = [
    "HTML 5",
    "CSS 3",
    "JAVASCRIPT",
    "REACT JS",
    "NEXT.JS",
    "TAILWIND CSS",
    "GIT",
    "GITHUB",
    "BOOTSTRAP",
    "FIGMA",
    "AZURE",
    "MATERIA-UI",
    "REDUX",
    "REDUX TKT",
    "TYPESCRIPT",
  ];
  return (
    <div className="md:py-20 py-10">
      <Header />
      <main className="md:mx-32 mx-5 text-tola-white mt-10">
        <h1 className="items-center font-bold md:text-6xl text-3xl roboto typing-effect">
          About <span className="text-tola-green underline">Me.</span>
        </h1>
        <div className="flex md:flex-row-reverse flex-col md:mt-11 mt-5">
          <div className="relative w-1/2 mx-auto md:mx-0 group">
            <img
              src="/images/tola.jpg"
              alt="tola"
              className="transition-opacity duration-300"
            />
            <img
              src="/images/tola1.jpg"
              alt="tola1"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="md:w-1/2 w-full space-y-6 animate-name outfit text-lg border border-tola-green rounded-3xl p-4 md:mr-16 md:ml-0 ml-0 mt-7 md:mt-0">
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
        </div>

        <section className="mt-20">
          <h1 className="items-center text-center font-bold md:text-6xl text-2xl roboto animate-pulse">
            <span className="text-tola-green underline">LANGUAGES</span> AND{" "}
            <span className="text-tola-green underline">TOOLS</span>
          </h1>

          <div className="flex flex-wrap mt-10 md:gap-8 gap-2 items-center justify-center">
            {" "}
            {technologies.map((tech, index) => (
              <h1
                key={index}
                className="animate-fade-in-up transition-transform duration-500 hover:scale-110 flex items-center justify-center md:w-40 w-32 p-2 text-sm border-2 rounded-3xl bg-tola-green border-transparent text-tola-white zilla"
              >
                <p className="md:text-lg text-base zilla">{tech}</p>
              </h1>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
