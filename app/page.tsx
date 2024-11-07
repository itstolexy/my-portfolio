import React from "react";
import Header from "./components/header";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import { Instagram, Twitter } from "@mui/icons-material";
import SocialButton from "./components/socialbuttons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <Header />
      <div className="md:mx-32 mx-5 flex flex-col text-tola-white space-y-10 mt-10 py-10 md:pt-20 lg:pb-16">
        <p className="text-tola-green font-semibold outfit text-xl">
          Hi there👋, I&apos;m
        </p>
        <div>
          <h1 className="items-center font-bold md:text-6xl text-3xl roboto typing-effect">
            OMOTOLA <span className="text-tola-green underline">ODUSANYA.</span>
          </h1>
          <h2 className="outfit font-medium text-base mt-1 text-tola-green animate-name">
            Frontend Developer
          </h2>
        </div>
        <div className="space-y-3">
          <h2
            className="outfit font-bold text-base text-tola-white animate-name underline"
            id="contact"
          >
            Contact Details
          </h2>

          <div className="flex items-center gap-4 animate-name">
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
            <p className="outfit font-medium text-base mt-1 text-tola-green animate-name">
              odusanyaomotola64@gmail.com
            </p>
          </Link>
        </div>
        <p className="text-base roboto animate-name">
          I am passionate about transforming designs into fully functional web
          applications with exceptional user interfaces and seamless
          experiences. I focus on creating visually appealing, responsive
          layouts that provide intuitive navigation and smooth interactions,
          ensuring users enjoy a high-quality experience. My commitment to
          building modern, accessible, and high-performance applications drives
          me to continuously learn and adapt to the latest trends in web
          development.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-5 md:w-auto items-left">
          <Button
            href="/about"
            text="ABOUT ME"
            icon={<InfoOutlinedIcon fontSize="large" />}
            download={true}
          />
          <Button
            href="https://drive.google.com/file/d/1MXTgboycW2x0l7zMSi3ZOvXrmucw-1Qo/view?usp=sharing"
            text="VIEW RESUME"
            icon={<DownloadForOfflineOutlinedIcon fontSize="large" />}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}
