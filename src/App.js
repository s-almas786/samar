import React, { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Demo from "./components/Demo";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen bg-gray-100 py-10  px-5 md:px-3 md:bg-white ">
      <div data-aos="fade-up" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <Skills />
      <Contact />
      {/* <Demo /> */}
      <Footer />
    </div>
  );
}

export default App;
