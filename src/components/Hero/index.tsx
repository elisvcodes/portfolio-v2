import React from "react";
export default function Hero() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 py-14 sm:py-28">
      <h2 className="bg-orange-200 text-2xl py-3 px-6 rounded-md shadow-sm font-medium sm:text-5xl">
        Hey, I am Eli
      </h2>
      <h3 className="text-2xl text-center font-medium	leading-tight sm:text-5xl sm:leading-snug">
        I enjoy building digital experiences.
      </h3>
      <p className="text-center mt-4 text-gray-500 leading-7">
        I am software engineer that is passionate about developing accessible,
        human-centered products for the web. In my spare time, I enjoy writing
        medium articles about JavaScript and providing mentorship to upcoming
        software engineers.
      </p>
    </div>
  );
}
