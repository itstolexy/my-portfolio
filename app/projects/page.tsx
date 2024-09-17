import React from "react";
import Header from "../components/header";
import ProjectCard from "../components/projectcard";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="text-tola-white md:mx-32 mx-5 pt-20 md:pt-40">
        <section>
          <h1 className="items-center font-bold md:text-6xl text-3xl roboto typing-effect">
            My <span className="text-tola-green underline">Projects.</span>
          </h1>
          <p className="text-base roboto animate-name mt-10">
            Here are some of the projects I&apos;ve worked on in the past.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 md:mt-20">
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
            description="Vira is a versatile platform that streamlines the process of hiring equipment for various needs, offering a wide selection of tools and gear with easy search and booking, flexible rental options, secure payments, and real-time availability to ensure you get the equipment you need efficiently and conveniently."
          />
          <ProjectCard
            imgSrc="/images/ear1.png"
            altText="Another Project"
            liveLink="https://ear1social.vercel.app/"
            githubLink="https://github.com/itstolexy/Ear1social"
            description=" Ear1 offers a platform where you can connect with professionals in your field for a small fee, enabling you to build valuable relationships and expand your network. With a focus on fostering genuine connections, Ear1 ensures you have the opportunity to engage with industry experts and enhance your career or business prospects, all while maintaining a straightforward and accessible approach to professional networking."
          />
          <ProjectCard
            imgSrc="/images/portfolio.png"
            altText="Another Project"
            liveLink="https://omotolaodusanya.vercel.app"
            githubLink="https://github.com/itstolexy/my-portfolio"
            description="This portfolio website showcases my skills, projects, and experiences. It is built using modern web technologies to provide a seamless and interactive experience.This portfolio is designed to highlight my work and provide a comprehensive overview of my professional background. It includes sections such as About Me, Projects, and Contact Information."
          />
          <ProjectCard
            imgSrc="/images/todo.png"
            altText="Another Project"
            liveLink="https://tolexy-todo-list-app.vercel.app/"
            githubLink="https://github.com/itstolexy/todo-list-app"
            description="This is a to-do list app built with HTML, CSS, and JavaScript. With this app, you can create, delete, and edit tasks efficiently. Tasks are automatically saved to local storage, so your list is preserved and readily available whenever you return."
          />
        </div>
      </div>
    </div>
  );
}
