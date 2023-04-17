import React from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-12">
      <p className="mb-8 font-medium text-xl tracking-normal">{title}</p>
      {children}
    </div>
  );
}
