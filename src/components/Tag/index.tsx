import React from "react";

export default function Tag({ title }: { title: string }) {
  return (
    <span className="cursor-default text-xs border border-gray-200 py-1 px-3 rounded-md bg-gray-50 hover:bg-gray-100 hover:shadow">
      {title}
    </span>
  );
}
