import React from "react";
import Header from "../components/header";

export default function About() {
  return (
    <div>
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
              applications for you. PROFESSIONAL EXPERIENCE
            </p>
          </div>
          <div className="border-2 border-md border-tola-green">
            <img src="./images/tola.jpg" alt="tola" />
          </div>
        </div>

        <section className="mt-20">
          <h1 className="items-center text-center font-bold text-6xl roboto animate-pulse">
            <span className="text-tola-green underline">LANGUAGES</span> AND{" "}
            <span className="text-tola-green underline">TOOLS</span>
          </h1>
        </section>
      </main>
    </div>
  );
}
