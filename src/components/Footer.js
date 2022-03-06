import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="py-5 border-t-2">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center">
        <p className="text-black mb-4">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/s-almas786"
            className="text-blue-500 text-xl hover:underline "
          >
            Samar Almas
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
