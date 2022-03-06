import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { GoChevronDown } from "react-icons/go";

function About() {
  return (
    <div className="max-w-4xl mt-14 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey👋
      </p>
      <p className="text-base text-gray-700 sm:text-2xl font-bold text-center leading-relaxed mt-4">
        I’m a full stack developer specializing in building (and occasionally
        designing) exceptional web products.
      </p>
      <ScrollIntoView selector="#skills">
        <div className="mx-auto p-10 cursor-pointer">
          <GoChevronDown className="mx-auto text-4xl animate-bounce text-blue-400" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
