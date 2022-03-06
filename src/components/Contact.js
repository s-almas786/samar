import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function Contact() {
  return (
    <div className="max-w-full w-auto text-center">
      <h1 className="text-2xl sm:text-4xl font-bold">Contact</h1>
      <p className="text-base text-gray-700 sm:text-2xl font-bold text-center leading-relaxed mt-5">
        Let's create your next experience together
      </p>
      <a href="mailto:samaralmas8@gmail.com">
        <p className="text-base sm:text-xl font-medium underline mb-5 mt-5">
          samaralmas8@gmail.com
        </p>
      </a>
    </div>
  );
}

export default Contact;
