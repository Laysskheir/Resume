import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function Education() {
  return (
    <div className="mt-16">
      <Card
        isBlurred
        className="border-none mt-4 group transition ease-in-out rounded-md p-4 hover:bg-foreground/10 cursor-pointer max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative text-center col-span-6 md:col-span-4">
              <p>2019 -- 2022</p>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2 text-white group-hover:text-secondary">
                  Bachelor of Business Administration (BBA) in Information
                  Technology
                </h1>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <p className="text-small text-foreground/50">
                  Graduated with a Bachelor's degree in Business Administration
                  with a major in Information Technology. Developed a strong
                  foundation in programming languages and data structures,
                  enhancing analytical and problem-solving skills. Acquired
                  comprehensive knowledge in business strategies and technology
                  integration, fostering a well-rounded understanding of the
                  intersection between business and information technology.
                </p>
              </div>

              <div className="flex w-full mt-4 gap-x-2">
                <button className="rounded-full text-secondary bg-secondary/10 text-sm px-2 py-1 font-semibold">
                  Python
                </button>
                <button className="rounded-full text-secondary bg-secondary/10 text-sm px-2 py-1 font-semibold">
                  JavaScript
                </button>
                <button className="rounded-full text-secondary bg-secondary/10 text-sm px-2 py-1 font-semibold">
                  OOP
                </button>
                <button className="rounded-full text-secondary bg-secondary/10 text-sm px-2 py-1 font-semibold">
                  PostgreSQL
                </button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

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