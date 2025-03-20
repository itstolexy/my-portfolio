"use client";

import React, { useRef } from "react";
import ProjectCard from "../projectcard";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import { useIntersectionObserver } from "@/app/intersection";

export default function Projects() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isTitleVisible = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const isDescriptionVisible = useIntersectionObserver(descriptionRef, {
    threshold: 0.1,
  });
  const areProjectsVisible = useIntersectionObserver(projectsRef, {
    threshold: 0.1,
  });
  const isContactVisible = useIntersectionObserver(contactRef, {
    threshold: 0.1,
  });

  return (
    <div className="pt-10">
      <div className="text-tola-white md:mx-32 mx-5 py-10 md:py-20">
        <section>
          <h1
            ref={titleRef}
            className={`items-center font-bold md:text-6xl text-3xl roboto transition-opacity duration-500 ${
              isTitleVisible ? "typing-effect" : "opacity-0"
            }`}
          >
            My <span className="text-tola-green underline">Projects.</span>
          </h1>
          <p
            ref={descriptionRef}
            className={`text-base roboto mt-10 transition-opacity duration-500 ${
              isDescriptionVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Here are some of the projects I&apos;ve worked on in the past.
          </p>
        </section>

        <section
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 md:mt-20 transition-opacity duration-300 ${
            areProjectsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Reuse ProjectCard component */}
          <ProjectCard
            imgSrc="/images/vira.png"
            altText="Vira Project"
            liveLink="https://vira-alpha.vercel.app/"
            githubLink="https://github.com/itstolexy/vira"
            description="Vira is a versatile platform that streamlines the process of hiring equipment for various needs, offering a wide selection of tools and gear with easy search and booking, flexible rental options, secure payments, and real-time availability to ensure you get the equipment you need efficiently and conveniently."
          />
          <ProjectCard
            imgSrc="/images/glass.png"
            altText="Glass-House Project"
            liveLink="https://glass-house-kappa.vercel.app/"
            githubLink="https://github.com/itstolexy/glass-house"
            description="The Glass House Lagos is a sophisticated mid-scale restaurant and lounge designed to redefine dining and social experiences in Lagos.It embodies elegance, innovation, and vibrant energy, offering a seamless blend of upscale cuisine, exceptional service, and a stylish and alluring ambiance.With our modern architecture and warm, inviting atmosphere, The Glass House serves as a haven for food lovers, trendsetters, and socialites alike."
          />
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
            imgSrc="/images/portfolio.png"
            altText="Another Project"
            liveLink="https://omotolaodusanya.vercel.app"
            githubLink="https://github.com/itstolexy/my-portfolio"
            description="This portfolio website showcases my skills, projects, and experiences. It is built using modern web technologies to provide a seamless and interactive experience.This portfolio is designed to highlight my work and provide a comprehensive overview of my professional background. It includes sections such as About Me, Projects, and Contact Information."
          />
          <ProjectCard
            imgSrc="/images/ear1.png"
            altText="Another Project"
            liveLink="https://ear1social.vercel.app/"
            githubLink="https://github.com/itstolexy/Ear1social"
            description=" Ear1 offers a platform where you can connect with professionals in your field for a small fee, enabling you to build valuable relationships and expand your network. With a focus on fostering genuine connections, Ear1 ensures you have the opportunity to engage with industry experts and enhance your career or business prospects, all while maintaining a straightforward and accessible approach to professional networking."
          />
          <ProjectCard
            imgSrc="/images/todo.png"
            altText="Another Project"
            liveLink="https://tolexy-todo-list-app.vercel.app/"
            githubLink="https://github.com/itstolexy/todo-list-app"
            description="This is a to-do list app built with HTML, CSS, and JavaScript. With this app, you can create, delete, and edit tasks efficiently. Tasks are automatically saved to local storage, so your list is preserved and readily available whenever you return."
          />
          <ProjectCard
            imgSrc="/images/raffle.png"
            altText="Another Project"
            liveLink="https://tolexy-raffledraw.vercel.app/"
            githubLink="https://github.com/itstolexy/Raffledraw"
            description="The Raffle Draw website is a user-friendly platform built with React, Next.js, Tailwind CSS, TypeScript, and Axios, allowing participants to enter a raffle, where a random winner is selected at an event and has one minute to claim their prize before a new winner is chosen, and it's hosted on Vercel."
          />
        </section>

        <section
          ref={contactRef}
          className={`flex flex-col items-center justify-center text-center mt-10 md:mt-20 transition-opacity duration-700 ${
            isContactVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-bold md:text-2xl text-lg roboto">Contact Me</p>
          <p className="font-bold md:text-2xl md:max-w-max max-w-[75%] text-sm zilla underline">
            I would be thrilled to work with you.
          </p>
          <div className="flex flex-row space-x-2 mt-4">
            <div
              className={`flex flex-row space-x-1 items-center border border-tola-green p-2 justify-center ${
                isContactVisible ? "animate-bounce" : ""
              }`}
            >
              <EmailIcon className="text-tola-white" />
              <Link href="mailto:odusanyaomotola64@gmail.com">
                <p className="outfit font-medium text-base text-tola-green">
                  odusanyaomotola64@gmail.com
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
