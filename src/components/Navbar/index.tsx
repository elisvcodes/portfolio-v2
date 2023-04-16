import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="card flex items-center mt-6 justify-between">
      <a
        href="https://drive.google.com/file/d/1gqrX56_iKrPLTAzaX1Sb2ASSL5agaFl2/view"
        target="_blank"
        className="hidden lg:block bg-black text-white text-xs py-2 px-4 rounded-md shadow-sm"
      >
        Resume
      </a>
      <h1 className="logo cursor-default">Eli</h1>

      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/elisvcodes/" target="_blank">
          <AiFillLinkedin className="bg-gray-100 p-1 w-8 h-8 rounded-lg" />
        </a>

        <a href="https://github.com/elisvcodes" target="_blank">
          <AiFillGithub className="bg-gray-100 p-1 w-8 h-8 rounded-lg" />
        </a>
      </div>
    </div>
  );
}
