"use client";

import Link from "next/link";
import React, { useState } from "react";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tola-body bg-head md:bg-tola-green text-tola-white px-5 md:px-10 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo section */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* Blinking circle */}
            <div className="w-6 h-6 bg-tola-white border animate-bounce" />
            <span className="lg:text-lg text-sm roboto font-semibold tracking-widest playwrite">
              O.0
            </span>
          </div>
        </Link>

        {/* Menu icon for small screens */}
        <div className="block lg:hidden" onClick={toggleMenu}>
          <MenuOutlinedIcon />
        </div>

        {/* Navigation menu for large screens */}
        <ul className="zilla hidden lg:flex lg:flex-row lg:gap-12 text-lg items-center">
          <li className="relative group">
            <Link href="/">
              <p className="font-medium">Home</p>
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link href="/about" scroll={false}>
              <p>About</p>
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link href="/projects" scroll={false}>
              <p>Projects</p>
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link href="/#contact">
              <p className="font-medium">Contact Me</p>
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li>
            <Link
              href="/docs/Omotola_Odusanya-CV.pdf"
              download
              scroll={false}
              target="_blank"
            >
              <h1 className="flex items-center space-x-2 p-2 border-2 rounded-lg bg-tola-white text-tola-green roboto animate-blink hover:animate-none">
                <p className="text-lg">RESUME</p>
                <DownloadForOfflineOutlinedIcon fontSize="large" />
              </h1>
            </Link>
          </li>
        </ul>

        {/* Dropdown menu for small screens */}
        {isMenuOpen && (
          <ul className="absolute top-full right-0 w-48 bg-tola-green bg text-tola-white p-4 rounded-lg shadow-lg lg:hidden flex flex-col space-y-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                href="/docs/Omotola_Odusanya-CV.pdf"
                download
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
