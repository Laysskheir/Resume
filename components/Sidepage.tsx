"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Sidepage() {
 

  return (
    <div className="absolute p-8 m-0 bg-primary text-white laptop:fixed tablet:w-[600px] laptop:p-32">
      <div className="flex flex-col relative">
        {/* Info */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Layss Kheir</h1>
          <h2 className="text-lg font-semibold text-gray-300 mb-2">
            Software Engineer
          </h2>
          <p className="text-foreground w-full ">
            I am a motivated full-stack developer with 2+ years of experience in
            web app development. Currently refining my freelancing business and
            staying abreast of emerging technologies.
          </p>
        </div>

        {/* Sections */}
        <div className="mb-16">
          <div className="mb-6 cursor-pointer">
            <div className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80">
              <span className="h-[0.5px] w-16 bg-white"></span>
              <Link href="#about-section" className="text-sm font-semibold">
                About
              </Link>
            </div>
          </div>

          <div className="mb-6 cursor-pointer">
            <div className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80">
              <span className="h-[0.5px] w-16 bg-white"></span>
              <Link href="#education-section" className="text-sm font-semibold">
                Education
              </Link>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="relative flex items-center gap-x-4 transition duration-300 ease-in-out transform hover:opacity-80">
              <span className="h-[0.5px] w-16 bg-white"></span>
              <Link href="#projects-section" className="text-sm font-semibold">
                Projects
              </Link>
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
