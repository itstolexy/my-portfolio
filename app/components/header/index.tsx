"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tola-body bg-head bg-tola-green text-tola-white px-5 md:px-10 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo section */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-tola-white border animate-bounce" />
            <span className="lg:text-lg text-sm roboto font-semibold tracking-widest playwrite animate-bounce">
              O.0
            </span>
          </div>
        </Link>

        {/* Menu icon for small screens */}
        <div
          ref={menuIconRef}
          className="block lg:hidden cursor-pointer bg-tola-green"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
        </div>

        {/* Navigation menu for large screens - Fixed */}
        <ul className="zilla hidden lg:flex lg:flex-row lg:gap-12 text-lg items-center">
          <li className="relative group">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
              About
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link
              href="#projects"
              onClick={(e) => handleAnchorClick(e, "projects")}
            >
              Projects
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
            >
              <span className="font-medium">Contact Me</span>
            </Link>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li>
            <Link
              href="/docs/Omotola_Odusanya-CV.pdf"
              download
              target="_blank"
              className="flex items-center space-x-2 p-2 border-2 rounded-lg bg-tola-white text-tola-green roboto animate-blink hover:animate-none"
            >
              <span className="text-lg">RESUME</span>
              <DownloadForOfflineOutlinedIcon fontSize="large" />
            </Link>
          </li>
        </ul>

        {/* Dropdown menu for small screens */}
        <div
          ref={menuRef}
          className={`fixed top-16 right-0 w-[50%] h-[calc(100vh-4rem)] bg-tola-green text-tola-white z-40 transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-5"
          } lg:hidden`}
        >
          <ul className="p-4 flex flex-col space-y-8">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={(e) => {
                  handleAnchorClick(e, "about");
                  setMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={(e) => {
                  handleAnchorClick(e, "projects");
                  setMenuOpen(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={(e) => {
                  handleAnchorClick(e, "contact");
                  setMenuOpen(false);
                }}
              >
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
        </div>
      </div>
    </nav>
  );
}
