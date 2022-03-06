import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import profile from "../images/me.png";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto bg-white rounded-md shadow-lg p-5 ">
        <div className="">
          <img
            src={profile}
            alt=""
            className="w-28 mx-auto rounded-full shadow-lg drop-shadow-lg"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-2xl font-bold mt-3">Samar Almas</p>
          <p className="text-base md:text-sm text-gray-600 pt-2 pb-4 px-5 inline-block border-b-2 border-gray-900">
            Software Engineer / Full Stack Developer
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="text-xl m-2 p-2 md:p-1 md:m-1 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
            <a href="https://github.com/s-almas786">
              <AiFillGithub />
            </a>

            <span className="sr-only">Github</span>
          </div>
          <div className="text-xl m-2 p-2 md:p-1 md:m-1 text-linkedin  hover:bg-linkedin rounded-full hover:text-white transition-colors duration-300">
            <a href="https://www.linkedin.com/in/samar-almas-292b251a0/">
              <AiFillLinkedin />
            </a>

            <span className="sr-only">Linkedin</span>
          </div>
          <div className="text-xl m-2 p-2 md:p-1 md:m-1 text-twitter hover:bg-twitter rounded-full hover:text-white transition-colors duration-300">
            <a href="https://twitter.com/SamarAlmas8">
              <AiFillTwitterCircle />
            </a>
            <span className="sr-only">Twitter</span>
          </div>
          <div className="text-xl m-2 p-2 md:p-1 md:m-1 text-fb  hover:bg-fb rounded-full hover:text-white transition-colors duration-300">
            <a href="https://www.facebook.com/profile.php?id=100015069401584">
              <AiFillFacebook />
            </a>
            <span className="sr-only">Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
