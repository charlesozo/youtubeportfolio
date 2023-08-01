import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coders.",
      "Full Stack Developers.",
      "UI Designers.",
      "Game developers.",
      "Cloud Engineers.",
      "Data Analysts.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO HK SOFTWARE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hey there, we are a{" "}
          <span className="text-designColor capitalize">team of</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Unlock the full potential of your business with top-tier software
          solutions! We are a dedicated and skilled software developers with a
          proven track record of transforming ideas into functional,
          high-performance applications. From custom web and mobile development
          to optimizing existing systems, my expertise covers a wide spectrum of
          technologies. Together, we can create software that not only meets
          your needs but exceeds your expectations. Let's embark on this digital
          journey and empower your business for success!
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
