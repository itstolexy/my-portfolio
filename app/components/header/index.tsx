import Link from "next/link";
import React from "react";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

export default function Header() {
  return (
    <nav className="flex items-center justify-between text-tola-white px-2 py-6 mx-16">
      {/* Logo section */}
      <div className="flex items-center gap-2">
        {/* Blinking circle */}
        <div className="w-6 h-6 bg-tola-green border animate-bounce" />
        <span className="text-lg roboto font-semibold tracking-widest playwrite">
          O.0
        </span>
      </div>

      {/* Navigation menu */}
      <ul className="zilla flex gap-12 text-lg items-center">
        <li className="relative group">
          <Link href="/">
            <p className="font-medium">Home</p>
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
          <Link href="/about" scroll={false}>
            <p>About</p>
          </Link>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-tola-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li>
          <Link
            href="https://drive.google.com/file/d/1y1jayHl1CcEsKBdcBQq7EuY2MucCfu7X/view?usp=drivesdk"
            download
            scroll={false}
            target="_blank"
          >
            <h1 className="flex items-center space-x-2 p-2 border-2 rounded-lg bg-tola-green text-tola-white roboto animate-blink hover:animate-none">
              <p className="text-lg">RESUME</p>
              <DownloadForOfflineOutlinedIcon fontSize="large" />
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
