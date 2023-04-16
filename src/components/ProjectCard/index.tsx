import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import Tag from "../Tag";

export default function ProjectCard({
  title,
  description,
  img,
  githubLink,
  demoLink,
  techStack,
}: {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
  githubLink: string;
  demoLink: string;
  techStack: string[];
}) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-xl mb-4 mt-5 font-semibold tracking-wider">
          {title}
        </h3>
        <div className="flex gap-4">
          <a
            href={demoLink}
            target="_blank"
            className="border rounded-full p-2"
          >
            <FiArrowUpRight size="15px" />
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="border rounded-full p-2"
          >
            <BsGithub size="15px" />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500 tracking-wider leading-6 mb-4  ">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((stack, index) => (
          <Tag key={index} title={stack} />
        ))}
      </div>
      <div className="flex justify-center bg-gray-100 py-8 px-4 rounded-md">
        <img
          src={img.src}
          alt={img.alt}
          className="rounded-md"
          style={{
            minHeight: "230px",
            maxHeight: "230px",
          }}
        />
      </div>
    </div>
  );
}
