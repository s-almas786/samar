import React from "react";
import { FaReact, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPython, SiPhp } from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto p-12" id="skills">
      <p className="text-2xl text-black text-center sm:text-4xl font-bold pt-3">
        Tech I Use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact className="mx-auto text-4xl sm:text-6xl text-react" />
        </div>
        <div className="flex flex-col w-40 p-10 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss className="mx-auto text-4xl sm:text-6xl text-tailwind" />
        </div>
        <div className="flex flex-col w-40 p-10 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript className="mx-auto text-4xl sm:text-6xl text-js bg-jsbg" />
        </div>
        <div className="flex flex-col w-40 p-10 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPython className="mx-auto text-4xl sm:text-6xl text-python" />
        </div>
        <div className="flex flex-col w-40 p-10 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaPhp className="mx-auto text-4xl sm:text-6xl text-php" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
