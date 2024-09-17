import React from "react";
import Header from "../components/header";
import ProjectCard from "../components/projectcard";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="text-tola-white mx-32 mt-10 pb-20">
        <section>
          <h1 className="items-center font-bold text-6xl roboto typing-effect">
            My <span className="text-tola-green underline">Projects.</span>
          </h1>
          <p className="text-base roboto animate-name mt-10">
            Here are some of the projects I've worked on in the past.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
          {/* Reuse ProjectCard component */}
          <ProjectCard
            imgSrc="/images/skillup.png"
            altText="SkillUp Project"
            liveLink="https://skill-up-mu.vercel.app"
            githubLink="https://github.com/itstolexy/skill-up"
            description={
              "An edutech platform where prospective learners have access to numerous tech course ranging from design to development to data analytics etc. Learners also gets opportunity of meeting and interacting with seasoned tutors and industry experts. They also have access to a community of learners and tech enthusiast."
            }
          />
          <ProjectCard
            imgSrc="/images/vira.png"
            altText="Vira Project"
            liveLink="https://vira-alpha.vercel.app/"
            githubLink="https://github.com/itstolexy/vira"
            description={""}
          />
          <ProjectCard
            imgSrc="/images/ear1.png"
            altText="Another Project"
            liveLink="https://ear1social.vercel.app/"
            githubLink="https://github.com/itstolexy/Ear1social"
            description={""}
          />
          <ProjectCard
            imgSrc="/images/portfolio.png"
            altText="Another Project"
            liveLink="https://vira-alpha.vercel.app/"
            githubLink="https://github.com/itstolexy/vira"
            description={""}
          />
        </div>
      </div>
    </div>
  );
}
