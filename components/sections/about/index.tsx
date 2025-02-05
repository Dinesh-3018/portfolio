"use client";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import Section from "@/components/layout/section";
export default function AboutMe() {
  const technologies = [
    ["JavaScript (ES6+)", "ReactJs", " Python", "Tailwind CSS"],
    ["Redux ", "TypeScript", "Git", "Docker"],
  ];
  return (
    <Section id="about" className="flex snap-start flex-col  items-center py-20">
      {/* // ? 0.1 About Me */}
      <div
        className="flex w-full flex-col space-y-24 px-4 sm:w-[500px] sm:px-0 
        md:w-[700px] lg:w-[1000px] "
      >
        <div className="flex flex-row items-center ">
          <div className="mr-4 flex  flex-row items-center">
            <ArrowIcon className="size-4 flex-none translate-y-[0.5px] text-AAsecondary md:h-6 md:w-5" />
            <span className="font-Header text-sm text-AAsecondary  sm:text-xl"> 01.</span>
            <span className="flex-none pl-4 text-lg font-bold tracking-wider text-gray-200 opacity-85 sm:text-2xl">
              About Me
            </span>
          </div>
          <div className="ml-4 h-[0.2px] w-full bg-gray-400 sm:w-72"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row md:space-x-8 md:space-y-0 ">
          <div className="w-full space-y-4 text-sm sm:text-base md:w-7/12 ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is <span className="text-AAsecondary">Dinesh G </span> and I am a
                passionate software engineer intern and problem solver, dedicated to creating
                impactful codes that thrive on the internet. My journey in computer science began in
                2021
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Since pursuing my engineering degree, my career has taken me through diverse
                industries, allowing me to refine my expertise in web development, I am dedicated to
                pushing boundaries and driving advancements. With experience working alongside
                esteemed organizations, my continuous learning drives me to make a positive impact
                and advance technology.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header flex flex-row space-x-16 tracking-wide">
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"size-3 text-AAsecondary"} />
                        <span className="text-xs text-gray-400 sm:text-sm">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"size-3 text-AAsecondary"} />
                        <span className="text-xs text-gray-400 sm:text-sm">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative hidden md:block md:size-72 lg:size-96 ">
            <div
              className="absolute size-5/6
               translate-x-5 translate-y-5 rounded border-2 border-AAsecondary duration-300 group-hover:translate-x-3 
               group-hover:translate-y-3"
            ></div>

            <div className="absolute size-5/6 overflow-hidden  rounded">
              <div className="absolute size-full overflow-hidden rounded bg-AAsecondary opacity-10 duration-300 group-hover:opacity-0"></div>
              {/* <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"rounded-lg object-contain"}
                alt="My Image Not Found"
              /> */}
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative -ml-6 flex h-48 w-full items-center justify-center md:hidden">
            <div className="absolute h-full w-48  translate-x-5  translate-y-5 rounded border-2 border-AAsecondary"></div>
            <div className="absolute h-full w-48 overflow-hidden rounded">
              {/* <Image
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"rounded-lg object-contain"}
                alt="My Image Not Found"
              /> */}
            </div>
            <div className="absolute h-full w-48  overflow-hidden rounded bg-AAsecondary  opacity-10 md:opacity-60"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
