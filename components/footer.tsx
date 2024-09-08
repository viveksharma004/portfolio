import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-24 sm:mb-8 px-4 text-center text-gray-500 relative">
      <section className="flex flex-nowrap sm:flex-row items-center m-8 justify-center gap-2">
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
          href="https://linkedin.com/in/viveksharma004"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="p-4 text-[1.3rem] flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
          href="https://github.com/viveksharma004"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer border bg-black text-white/80 border-white/10"
          href="mailto:viveksharma4507@gmail.com"
          target="_blank"
        >
          <MdEmail />
        </a>
      </section>
      <small className="mb-2 block text-xs">
        Developed by{" "}
        <span className="underline">
          <a href="https://github.com/viveksharma004">Vivek</a>
        </span>.
      </small>
    </footer>
  );
}
