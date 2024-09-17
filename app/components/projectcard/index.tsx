import React from "react";

interface ProjectCardProps {
  imgSrc: string;
  altText: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  altText,
  description,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col p-2 bg-tola-white rounded-2xl transform transition-transform duration-500 hover:-rotate-6 hover:scale-190">
      <img src={imgSrc} alt={altText} className="rounded-lg shadow-md" />
      <p className="text-base roboto text-black my-2 pt-4 px-4 font-medium">
        {description}
      </p>
      <span className="flex flex-row text-tola-green font-bold p-4 mt-4 rounded-lg shadow-md outline otfit">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LIVE LINK
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto underline"
        >
          GITHUB LINK
        </a>
      </span>
    </div>
  );
};

export default ProjectCard;
