import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
export default function Education() {
  return (
    <div className="mt-16" id="education-section">
      <div className="border-none mt-4 group transition ease-in-out rounded-md p-4 hover:bg-foreground/10 cursor-pointer max-w-[610px]">
        <div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative text-center col-span-6 md:col-span-4">
              <p>2019 -- 2022</p>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2 text-white group-hover:text-secondary">
                  Bachelor of Business Administration (BBA) in Computer
                  Management
                </h1>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <p className="text-small text-foreground/50">
                  Developed a strong foundation in programming languages and
                  data structures, enhancing analytical and problem-solving
                  skills. Acquired comprehensive knowledge in business
                  strategies and technology integration, fostering a
                  well-rounded understanding of the intersection between
                  business and information technology.
                </p>
              </div>

              <div className="flex w-full mt-4 gap-x-2">
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Python
                </Chip>
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  JavaScript
                </Chip>
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  OOP
                </Chip>
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  SQL
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-2 mt-4 group hover:text-secondary transition ease-in-out cursor-pointer items-center">
        <Link
          href="/resume.pdf"
          className="font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Link>
        <p className="group-hover:scale-110">
          <GoArrowUpRight />
        </p>
      </div>
    </div>
  );
}
