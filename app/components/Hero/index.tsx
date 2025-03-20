"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Button from "../button";
import { Instagram, Twitter } from "@mui/icons-material";
import SocialButton from "../socialbuttons";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useIntersectionObserver } from "@/app/intersection";

const Hero = () => {
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const contactRef = useRef(null);
  const socialsRef = useRef(null);
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  const isGreetingVisible = useIntersectionObserver(greetingRef, {
    threshold: 0.1,
  });
  const isNameVisible = useIntersectionObserver(nameRef, { threshold: 0.1 });
  const isTitleVisible = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const isContactVisible = useIntersectionObserver(contactRef, {
    threshold: 0.1,
  });
  const areSocialsVisible = useIntersectionObserver(socialsRef, {
    threshold: 0.1,
  });
  const isEmailVisible = useIntersectionObserver(emailRef, { threshold: 0.1 });
  const isDescriptionVisible = useIntersectionObserver(descriptionRef, {
    threshold: 0.1,
  });
  const areButtonsVisible = useIntersectionObserver(buttonsRef, {
    threshold: 0.1,
  });

  return (
    <div className="md:mx-32 mx-5 flex flex-col text-tola-white space-y-10 mt-10 py-10 md:pt-20 md:pb-20 pb-10">
      <p
        ref={greetingRef}
        className={`text-tola-green font-semibold outfit text-xl transition-opacity duration-700 ${
          isGreetingVisible ? "opacity-100" : "opacity-0"
        }`}
        id="contact"
      >
        Hi there👋, I&apos;m
      </p>
      <div>
        <h1
          ref={nameRef}
          className={`items-center font-bold md:text-6xl text-3xl roboto transition-opacity duration-500 ${
            isNameVisible ? "typing-effect" : "opacity-0"
          }`}
        >
          OMOTOLA <span className="text-tola-green underline">ODUSANYA.</span>
        </h1>
        <h2
          ref={titleRef}
          className={`outfit font-medium text-base mt-1 text-tola-green transition-opacity duration-700 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Frontend Developer
        </h2>
      </div>
      <div className="space-y-3">
        <h2
          ref={contactRef}
          className={`outfit font-bold text-base text-tola-white underline transition-opacity duration-700 ${
            isContactVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Contact Details
        </h2>

        <div
          ref={socialsRef}
          className={`flex items-center gap-4 transition-opacity duration-700 ${
            areSocialsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* GitHub */}
          <Link href="https://github.com/itstolexy" target="_blank" passHref>
            <SocialButton bgColor="dribbble">
              <GitHubIcon className="w-6 h-6 text-black hover:text-white" />
            </SocialButton>
          </Link>

          {/* Email */}
          <Link
            href="mailto:odusanyaomotola64@gmail.com"
            target="_blank"
            passHref
          >
            <SocialButton bgColor="instagram">
              <EmailIcon className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/itstolexy"
            target="_blank"
            passHref
          >
            <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>

          {/* Twitter */}
          <Link href="https://x.com/itstolexy" target="_blank" passHref>
            <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/omotola-odusanya"
            target="_blank"
            passHref
          >
            <SocialButton bgColor="linkedin">
              <LinkedInIcon className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>
        </div>
        <Link href="mailto:odusanyaomotola64@gmail.com" target="_blank">
          <p
            ref={emailRef}
            className={`outfit font-medium text-base mt-1 text-tola-green transition-opacity duration-700 ${
              isEmailVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            odusanyaomotola64@gmail.com
          </p>
        </Link>
      </div>
      <p
        ref={descriptionRef}
        className={`text-base roboto transition-opacity duration-700 ${
          isDescriptionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        I am passionate about transforming designs into fully functional web
        applications with exceptional user interfaces and seamless experiences.
        I focus on creating visually appealing, responsive layouts that provide
        intuitive navigation and smooth interactions, ensuring users enjoy a
        high-quality experience. My commitment to building modern, accessible,
        and high-performance applications drives me to continuously learn and
        adapt to the latest trends in web development.
      </p>
      <div
        ref={buttonsRef}
        className={`flex flex-col md:flex-row md:space-x-5 md:w-auto items-left transition-opacity duration-700 ${
          areButtonsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <Button
          href="#about"
          text="ABOUT ME"
          icon={<InfoOutlinedIcon fontSize="large" />}
        /> */}
        <Button
          href="https://drive.google.com/file/d/1tX-1y894XdIfiLEUxxtrJs-eKi1x4nar/view?usp=drivesdk"
          text="VIEW RESUME"
          icon={<DownloadForOfflineOutlinedIcon fontSize="large" />}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Hero;
