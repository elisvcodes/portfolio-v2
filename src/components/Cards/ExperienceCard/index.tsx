import React, { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

export default function ExperienceCard({
  role,
  company,
  tenure,
  children,
}: {
  role: string;
  company: string;
  tenure: string;
  children: React.ReactNode;
}) {
  const [showSummary, setShowSummary] = useState(false);

  const handleShowSummary = () => {
    setShowSummary(!showSummary);
  };
  return (
    <div className="card cursor-pointer" onClick={handleShowSummary}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 sm:flex-row">
          <span className="font-semibold">{role}</span>
          <span className="max-w-max sm:border-b-2 font-semibold">
            @{company}
          </span>
        </div>
        {showSummary ? (
          <VscChevronUp size="20px" />
        ) : (
          <VscChevronDown size="20px" />
        )}
      </div>

      <p className="text-sm text-gray-400 mt-2">{tenure}</p>
      <div className={`py-4 ${showSummary ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}
