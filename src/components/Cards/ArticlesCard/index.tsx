import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ArticlesCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <a
      className="card flex justify-between gap-4 items-center mb-4"
      href={link}
      target="_blank"
    >
      <p className="font-semibold">{title}</p>
      <p className="border rounded-full p-2 h-8 w-8">
        <FiArrowUpRight size="15px" />
      </p>
    </a>
  );
}
