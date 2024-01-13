"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Sidepage() {
  const handleScrollToElement = (elementId: any) => {
    if (elementId === "EducationId") {
      const element = document.getElementById(elementId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop + 100,
          behavior: "smooth",
        });
      }
    }

    if (elementId === "ProjectsId") {
      const element = document.getElementById(elementId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop + 300,
          behavior: "smooth",
        });
      }
    }
    if (elementId === "AboutId") {
      const element = document.getElementById(elementId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 300,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="absolute p-8 m-0 bg-primary text-white laptop:fixed tablet:w-[600px] laptop:p-32">
      <div className="flex flex-col relative">
        {/* Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Layss Kheir</h1>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">
            Passionate Software Engineer
          </h2>
          <p className="text-foreground w-full ">
            I am dedicated to crafting innovative and user-friendly web
            solutions. With a strong foundation in software engineering, I bring
            ideas to life, one line of code at a time.
          </p>
        </div>

        {/* Sections */}
        <div className="mb-16">
          <div className="mb-6 cursor-pointer">
            <div
              className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80"
              id="AboutId"
              onClick={() => handleScrollToElement("AboutId")}
            >
              <span className="h-[0.5px] w-16 bg-white"></span>
              <p className="text-sm font-semibold">About</p>
            </div>
          </div>

          <div className="mb-6 cursor-pointer">
            <div
              className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80"
              id="EducationId"
              onClick={() => handleScrollToElement("EducationId")}
            >
              <span className="h-[0.5px] w-16 bg-white"></span>
              <p className="text-sm font-semibold">Education</p>
            </div>
          </div>

          <div className="cursor-pointer">
            <div
              className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80"
              id="ProjectsId"
              onClick={() => handleScrollToElement("ProjectsId")}
            >
              <span className="h-[0.5px] w-16 bg-white"></span>
              <p className="text-sm font-semibold">Projects</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="flex space-x-4 cursor-pointer transition ease-in-out">
            <Link
              href="https://github.com/Laysskheir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-foreground hover:text-white"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/layss-kheir-555566249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-foreground hover:text-white"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://wa.link/fkyluu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-foreground hover:text-white"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
