import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container max-w-6xl px-4 mb-4">{children}</div>;
}
