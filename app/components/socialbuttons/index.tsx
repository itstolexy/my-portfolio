import React, { ReactNode } from "react";

type SocialButtonColor =
  | "github"
  | "instagram"
  | "twitter"
  | "linkedin"
  | "email";

interface Props {
  children: ReactNode;
  bgColor?: SocialButtonColor;
}

const SocialButton: React.FC<Props> = ({ children, bgColor = "github" }) => {
  const bgHoverColorClass: Record<SocialButtonColor, string> = {
    github: "hover:bg-github",
    instagram: "hover:bg-instagram",
    twitter: "hover:bg-twitter",
    linkedin: "hover:bg-linkedin",
    email: "hover:bg-instagram",
  };

  return (
    <button
      type="button"
      className={`group h-8 w-8 p-2 bg-white ${bgHoverColorClass[bgColor]} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
