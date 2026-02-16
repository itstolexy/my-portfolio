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
  const greetingRef = useRef<HTMLParagraphElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const contactRef = useRef<HTMLHeadingElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/itstolexy",
      bgColor: "github",
      ariaLabel: "Visit GitHub profile",
      icon: <GitHubIcon className="w-6 h-6 text-black hover:text-white" />,
    },
    {
      name: "Email",
      href: "mailto:odusanyaomotola64@gmail.com",
      bgColor: "email",
      ariaLabel: "Send an email",
      icon: <EmailIcon className="w-5 h-5 text-black" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/itstolexy",
      bgColor: "instagram",
      ariaLabel: "Visit Instagram profile",
      icon: <Instagram className="w-5 h-5 text-black" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/itstolexy",
      bgColor: "twitter",
      ariaLabel: "Visit X profile",
      icon: <Twitter className="w-5 h-5 text-black" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/omotola-odusanya",
      bgColor: "linkedin",
      ariaLabel: "Visit LinkedIn profile",
      icon: <LinkedInIcon className="w-5 h-5 text-black" />,
    },
  ] as const;

  return (
    <div className="md:mx-32 mx-5 flex flex-col text-tola-white space-y-10 mt-10 py-10 md:pt-20 md:pb-20 pb-10">
      <p
        ref={greetingRef}
        className={`text-tola-green font-semibold outfit text-xl transition-opacity duration-700 ${
          isGreetingVisible ? "opacity-100" : "opacity-0"
        }`}
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
          Frontend & Mobile Developer
        </h2>
      </div>
      <div className="space-y-3">
        <h2
          ref={contactRef}
          id="contact"
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
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
            >
              <SocialButton bgColor={link.bgColor}>{link.icon}</SocialButton>
            </Link>
          ))}
        </div>
        <Link
          href="mailto:odusanyaomotola64@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Send an email"
        >
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
        I am a frontend developer passionate about turning designs into fully
        functional web and mobile applications with clean, user-friendly
        interfaces. I focus on building responsive, visually appealing layouts
        that provide intuitive navigation and smooth interactions, ensuring a
        high-quality user experience.
        <br />I am committed to creating modern, accessible, and performant
        applications, and I continuously learn and adopt the latest trends and
        best practices in web and mobile development.
      </p>

      <div
        ref={buttonsRef}
        className={`flex flex-col md:flex-row md:space-x-5 md:w-auto items-start transition-opacity duration-700 ${
          areButtonsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <Button
          href="#about"
          text="ABOUT ME"
          icon={<InfoOutlinedIcon fontSize="large" />}
        /> */}
        <Button
          href="https://drive.google.com/file/d/1mtvg-70SoabH8TIfd8L-2sR7dQWO6AgC/view?usp=drivesdk"
          text="VIEW RESUME"
          icon={<DownloadForOfflineOutlinedIcon fontSize="large" />}
          target="_blank"
          rel="noreferrer"
          ariaLabel="View resume"
        />
      </div>
    </div>
  );
};

export default Hero;
