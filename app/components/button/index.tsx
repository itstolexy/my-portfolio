import React from "react";
import { InfoOutlined as InfoOutlinedIcon, DownloadForOfflineOutlined as DownloadForOfflineOutlinedIcon } from "@mui/icons-material";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  download?: boolean;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, icon, download = false, target = "_self" }) => {
  return (
    <Link href={href} download={download} target={target} scroll={false}>
      <h1 className="flex items-center mb-4 md:mb-0 w-56 text-center justify-center space-x-2 p-2 text-xs border-2 rounded-lg bg-tola-green border-transparent text-tola-white zilla">
        <p className="text-lg">{text}</p>
        {icon}
      </h1>
    </Link>
  );
};

export default Button;
