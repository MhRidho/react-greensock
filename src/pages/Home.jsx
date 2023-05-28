import React, { useEffect, useRef } from "react";
import Webp24 from "../assets/fe-test-assets/img/24.webp";
import Satu from "../assets/fe-test-assets/img/homepage/519x788.jpg";
import Dua from "../assets/fe-test-assets/img/homepage/816x459.jpg";
import Tiga from "../assets/fe-test-assets/img/homepage/708x531.jpg";
import Empat from "../assets/fe-test-assets/img/homepage/526x788.jpg";
import Video from "../assets/fe-test-assets/videos/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <>
      <header className="">
        <div className="">
          <div className="relative w-full">
            <img src={Webp24} alt="..." className="" />
            <h1
              className="md:text-6xl font-bold absolute md:top-28 md:left-60"
              data-aos="fade-up"
            >
              60 YEARS OF
            </h1>
            <span
              className="md:text-6xl absolute md:top-44 md:left-60 text-yellow-600"
              data-aos="fade-up"
            >
              BUILDING ICONS,
            </span>
            <p
              className="md:text-6xl absolute md:top-60 md:left-60"
              data-aos="fade-up"
            >
              SHAPING SKYLINES
            </p>
          </div>
        </div>
      </header>

      <section className="bg-[#E3E3E5] h-screen mb-[1420px]">
        <div className="relative">
          <div className="relative" data-aos="fade-up">
            <span className="text-3xl absolute md:left-[500px]">
              Honouring Our
            </span>
            <h2 className="text-5xl font-[600] absolute md:top-10 md:right-1/2 translate-x-1/2">
              Heritage,
            </h2>
            <span className="text-3xl absolute md:left-[500px] md:top-24">
              Shaping Our
            </span>
            <h2 className="text-5xl font-[600] absolute md:top-32 md:left-[576px]">
              Legacy
            </h2>
          </div>
          <div className="w-full">
            <img
              src={Satu}
              alt="..."
              className="absolute left-0 w-80"
              data-aos="fade-up"
            />
            <img
              src={Dua}
              alt="..."
              className="absolute right-0 w-[450px] top-[600px]"
              data-aos="fade-up"
            />
            <img
              src={Tiga}
              alt="..."
              className="absolute left-0 w-[450px] top-[950px]"
              data-aos="fade-up"
            />
            <img
              src={Empat}
              alt="..."
              className="absolute right-0 w-[450px] top-[1400px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="relative">
          <video src={Video} controls data-aos="zoom-in">
            <h3 className="absolute top-0">
              Celebrate <span>With Us</span>
            </h3>
          </video>
        </div>
      </footer>
    </>
  );
};

export default Home;
