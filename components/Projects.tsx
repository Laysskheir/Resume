import React from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="mt-16">
      <div className="border-none mt-4 group transition ease-in-out rounded-md p-4 hover:bg-foreground/10 cursor-pointer max-w-[610px]">
        <div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative aspect-video text-center col-span-6 md:col-span-4">
              <Image
                alt="Project cover"
                className="object-cover rounded-md"
                fill
                src="/2.png"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2 text-white group-hover:text-secondary">
                  Full-Stack E-Commerce
                </h1>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <p className="text-small text-foreground/50">
                  Developed a modern e-commerce solution using Next.js 14 for
                  the frontend and Django for the backend. Leveraged Redux
                  Toolkit and TypeScript for efficient state management and type
                  safety. Integrated Celery for asynchronous task handling and
                  Docker for streamlined deployment.
                </p>
              </div>

              <div className="flex w-full mt-4 gap-x-2">
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Django
                </Chip>

                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Next.js
                </Chip>
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Docker
                </Chip>
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Celery
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-none mt-4 group transition ease-in-out rounded-lg p-4 hover:bg-foreground/10 cursor-pointer max-w-[610px]">
        <div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative aspect-video col-span-6 md:col-span-4">
              <Image
                alt="Project cover"
                className="object-cover rounded-md"
                fill
                src="/1.png"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2 text-white group-hover:text-secondary">
                  Modern Restaurant
                </h1>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <p className="text-small text-foreground/50">
                  Revolutionizing dining with a modern touch, our restaurant
                  boasts a digital management system. Seamlessly managing
                  orders, optimizing inventory, and enhancing customer
                  interactions for an exceptional dining experience. Owners
                  enjoy easy menu customization through the admin panel.
                </p>
              </div>

              <div className="flex w-full mt-4 gap-x-2">
                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Next.js
                </Chip>

                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Prisma
                </Chip>

                <Chip
                  className="text-secondary bg-secondary/10 border-none"
                  variant="faded"
                >
                  Tailwind
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
