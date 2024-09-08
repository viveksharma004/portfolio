"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import profile from "../public/profile.jpg"
export default function About() {
  return (
    <div className="relative">
      <SectionHeading>About</SectionHeading>
      <section
        className="mb-6 max-w-[45rem] lg:flex items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        id="about"
      >
        <div className="m-5 ml-2">
          <p className="mb-5 text-lg lg:text-left">
            I am a Programmer and Full-Stack Developer,{" "}
            <span className="underline font-bold text-[#6cbcf6]">
              <a href="#"></a>
            </span>{" "}
            currently looking for {" "}<span className="font-bold text-[#e8e84b]">Full-Stack Developer</span> Role.
          </p>

          <p className="mb-5 text-lg lg:text-left">
            Proficient in coding languages like {" "}
            <span className="font-bold text-[#efefab]">C and C++</span>,whereas in development 
            I know {" "}
            <span className="font-bold text-[#efefab]">HTML, CSS, JavaScript, NodeJs</span>.
          </p>

          <p className="mb-6 text-lg lg:text-left ">
            Frameworks and Libraries: <span className="font-bold text-[#efefab]">ReactJs, ExpressJs, Redux, MongoDB</span>
          </p>
          <p className="mb-6 text-lg lg:text-left ">Tools :<span className="font-bold text-[#efefab]">git/github, VS Code, 0Auth</span></p>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src={profile}
            alt="Vivek Sharma"
            quality={95}
            priority
            className="w-[200px] mb-20 lg:mb-0 lg:w-[500px] rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
