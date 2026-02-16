import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  icon,
  download = false,
  target = "_self",
  rel,
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel ?? text}
      scroll={false}
      className="flex items-center mb-4 md:mb-0 w-56 text-center justify-center space-x-2 p-2 text-xs border-2 rounded-lg bg-tola-green border-transparent text-tola-white zilla"
    >
      <span className="text-lg">{text}</span>
      {icon}
    </Link>
  );
};

export default Button;
