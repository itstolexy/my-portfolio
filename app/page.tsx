import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";
import { Instagram, Twitter } from "@mui/icons-material";
import SocialButton from "./components/socialbuttons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  return (
    <div className="">
      {" "}
      <Header />
      <div className="mx-32 flex flex-col text-tola-white space-y-10 mt-10">
        <p className=" text-tola-green font-semibold outfit text-xl">
          Hi there👋,I'm
        </p>
        <h1 className="items-center font-bold text-6xl roboto">
          OMOTOLA {""}{" "}
          <span className="text-tola-green underline">{""} ODUSANYA.</span>
        </h1>
        <h2 className="outfit font-medium text-base text-tola-green">
          Frontend Developer
        </h2>
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <Link href={"https://github.com/itstolexy"} passHref>
            <SocialButton bgColor="dribbble">
              <GitHubIcon className="w-6 h-6 text-black hover:text-white" />
            </SocialButton>
          </Link>

          {/* Instagram */}
          <Link href={"https://www.instagram.com/itstolexy"} passHref>
            <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>

          {/* Twitter */}
          <Link href={"https://x.com/itstolexy"} passHref>
            <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>

          {/* LinkedIn */}
          <Link href={"https://www.linkedin.com/in/omotola-odusanya"} passHref>
            <SocialButton bgColor="linkedin">
              <LinkedInIcon className="w-5 h-5 text-black" />
            </SocialButton>
          </Link>
        </div>
        <p className="text-base roboto">
          I am passionate about transforming designs into fully functional web
          applications with exceptional user interfaces and seamless
          experiences. I focus on creating visually appealing, responsive
          layouts that provide intuitive navigation and smooth interactions,
          ensuring users enjoy a high-quality experience. My commitment to
          building modern, accessible, and high-performance applications drives
          me to continuously learn and adapt to the latest trends in web
          development.
        </p>
        <span className="flex flex-row space-x-5">
          <Link href="/about" download scroll={false}>
            <h1 className="flex items-center space-x-2 p-2 text-xs border-2 rounded-lg bg-tola-green border-transparent text-tola-white zilla">
              <p className="text-lg">ABOUT ME</p>
              <InfoOutlinedIcon fontSize="large" />
            </h1>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1y1jayHl1CcEsKBdcBQq7EuY2MucCfu7X/view?usp=drivesdk"
            download
            scroll={false}
          >
            <h1 className="flex items-center space-x-2 p-2 text-xs border-2 rounded-lg bg-tola-green border-transparent text-tola-white zilla">
              <p className="text-lg"> VIEW RESUME</p>
              <DownloadForOfflineOutlinedIcon fontSize="large" />
            </h1>
          </Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}
