import React from "react";

function demo() {
  return (
    <div>
      <div className="p-6 text-coolGray-100">
        <form
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg ng-untouched ng-pristine ng-valid ng-submitted"
        >
          <h2 className="w-full text-3xl text-center font-bold leading-tight">
            Contact us
          </h2>
          <div>
            <label for="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 bg-coolGray-800"
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 bg-coolGray-800"
            />
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 bg-coolGray-800"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-500 focus:ring-blue-500 hover:ring-blue-500 text-coolGray-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default demo;
