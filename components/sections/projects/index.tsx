/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import GithubIcon from "../../../public/Admin/GitHubIcon";
import ExternalLink from "../../../public/Admin/ExternalLink";
import Section from "@/components/layout/section";
import BlogPrjImage from "../../../public/assets/BuddyBlog.png";
import Image from "next/image";
import uzPrjImg from "../../../public/assets/Uz_Prj_img.png";
import PgPrjImg from "../../../public/assets/Pg_rPrj_img.png";
import DwritePrjImg from "../../../public/assets/Blog_d_Prj_img.png";
import { StarsBackground } from "@/components/ui/stars-background";
export default function SomethingIveBuilt() {
  return (
    <Section
      id="project"
      className=" px- flex w-full flex-col   space-y-12  
     py-32 sm:px-16 md:px-16 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" -pl-10 flex flex-row  items-center md:px-0 xl:-ml-24">
        <ArrowIcon
          className={"size-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5"}
        />
        <div className=" flex-none flex-row items-center space-x-2">
          <span className="font-sans text-sm text-AAsecondary  sm:text-xl"> 03.</span>
          <span className=" w-44 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:w-56 md:text-2xl">
            {" "}
            Things I&apos;ve Built
          </span>
        </div>
        {/* <div className="h-[0.2px] w-full bg-gray-400 "></div> */}
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28 xl:space-y-36">
        {/* // ?  Project  1 */}
        <div data-aos="fade-up" className="md:grid-cols relative w-full md:grid md:h-96">
          {/* Left image */}
          <div
            className=" absolute z-10  hidden 
          size-full grid-cols-12 content-center   py-4 md:grid"
          >
            <div className="relative col-span-7 size-full rounded ">
              <Link href={"https://dineshg-aids.github.io/Buddyb/"}>
                <div
                  // onClick={}
                  className="absolute size-full rounded opacity-20     
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </Link>

              <a href="https://dineshg-aids.github.io/Buddyb/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className=" absolute size-full rounded   opacity-30 
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </a>

              <Image src={BlogPrjImage} alt="Project Screen shot" className="-ml-20 rounded-xl" />
            </div>
          </div>

          {/* right Content */}
          <div className=" size-full content-center  py-12 md:absolute md:grid md:grid-cols-12">
            <div className="absolute z-0 size-full bg-opacity-70">
              <div className="relative size-full">
                <div className="absolute z-10 size-full     opacity-10"></div>
                <div className=" absolute z-10 size-full   opacity-80"></div>
                {/* <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`size-full `} /> */}
              </div>
            </div>

            <div
              className="col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 
            pt-8 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7"
            >
              <div className="z-10 flex flex-col space-y-1 md:items-end">
                <span className="text-base text-AAsecondary">Portfolio Version 1</span>
                <a
                  href="https://dineshg-aids.github.io/Buddyb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200">
                    Buddy Blog
                  </span>
                </a>
              </div>
              <div className="w-full rounded-md py-6 md:z-10 md:p-6">
                <p className="text-left text-gray-300 md:text-right md:text-gray-400">
                  This project is a blog web app, developed using{" "}
                  <span className="text-AAsecondary"> HTML</span>,{" "}
                  <span className="text-AAsecondary"> CSS3</span>, and{" "}
                  <span className="text-AAsecondary">JavaScript. </span>It represents my journey
                  into web development and serves as a platform to share insights and updates. The
                  application features a{" "}
                  <span className="text-AAsecondary"> responsive design</span>,{" "}
                  <span className="text-AAsecondary">user-friendly</span>
                  interface, and various functionalities to enhance user engagement. I have explored
                  different aspects of
                  <span className="text-AAsecondary"> front-end development</span>, ensuring a
                  seamless experience for visitors.
                </p>
              </div>
              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:justify-end md:text-gray-400">
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span>HTML
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span>CSS3
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span>JavaScript
                </span>

                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span>Front-end Development
                </span>
              </ul>

              <div className="fle-row z-10 flex space-x-5 ">
                <GithubIcon link="https://github.com/DineshG-AIDS/Buddyb" />
                <a href="https://dineshg-aids.github.io/Buddyb/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={"https://dineshg-aids.github.io/Buddyb/"} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12  ">
          {/* Left image */}
          <div
            className=" absolute z-10  hidden 
          size-full grid-cols-12 content-center   py-4 md:grid "
          >
            <div className="relative col-span-7 col-start-6 size-full rounded ">
              <a
                href={"https://dineshg-aids.github.io/uzhavanLanding/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className=" absolute size-full rounded   opacity-50 
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </a>
              <Image src={uzPrjImg} alt="Project Screen shot" className="ml-20 rounded-xl" />
            </div>
          </div>

          {/* right Content */}
          <div className=" size-full content-center  py-4 md:absolute md:grid md:grid-cols-12 ">
            {/* background for text in mobile responsive */}
            <div className="absolute z-0 size-full bg-opacity-70 md:order-2">
              <div className="relative size-full">
                <div className="absolute z-10 size-full     opacity-10"></div>
                <div className=" absolute z-10 size-full   opacity-80"></div>
                {/* <Image src={BlogPrjImage} alt="Project Screen shot" className="rounded-xl" /> */}
              </div>
            </div>

            <div
              className="col-span-8 flex flex-col items-start space-y-3   
            px-8 pt-8 sm:pt-12 md:order-1  md:py-0 xl:col-span-6"
            >
              <div className="z-10 flex flex-col  space-y-1">
                <span className="text-base text-AAsecondary">First React Project</span>
                <a
                  href="https://dineshg-aids.github.io/uzhavanLanding/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200">
                    Uzhavan by Team Learners
                  </span>
                </a>
              </div>

              <div className="md: z-10 w-full rounded-md py-6     md:p-6">
                <p className="text-left text-gray-300 md:text-gray-400 ">
                  Built a web application connecting farmers directly with customers, eliminating
                  platform fees. The app enables farmers to sell their products using a{" "}
                  <span className="text-AAsecondary">cold storage logic</span>, reducing commission
                  fees by 30% live. Utilized a{" "}
                  <span className="text-AAsecondary">cold storage business model</span>, similar to
                  dark stores, allowing farmers to leverage government-subsidized{" "}
                  <span className="text-AAsecondary">cold storage facilities</span> for reduced fees
                  and faster delivery times.
                </p>
              </div>
              <ul className="font-Text2 flex w-full flex-wrap text-sm text-gray-300 md:justify-start md:text-gray-400">
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary"># </span> React.js
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary"># </span> Redux
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary"># </span> Node.js
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary"># </span> PayPal Integration
                </span>
              </ul>
              <div className="z-10 flex flex-row space-x-5 ">
                <GithubIcon link="https://github.com/DineshG-AIDS/uzhavanLanding" />
                <a
                  href="https://dineshg-aids.github.io/uzhavanLanding/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={"https://dineshg-aids.github.io/uzhavanLanding/"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3 */}
        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12 ">
          {/* Left image */}
          <div
            className=" absolute z-10  hidden 
          size-full grid-cols-12 content-center   py-4 md:grid"
          >
            <div className="relative col-span-7 size-full rounded ">
              <Link
                target={"_blank"}
                href={
                  "https://pg-review-guard-frontend-ie2p4t77w-dineshgaids-projects.vercel.app/home"
                }
              >
                <div
                  // onClick={}
                  className="absolute size-full rounded     opacity-10 
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </Link>

              <Image src={PgPrjImg} alt="Project Screen shot" className="-ml-20 rounded-xl" />
            </div>
          </div>

          {/* right Content */}
          <div className=" size-full content-center  py-4 md:absolute md:grid md:grid-cols-12 ">
            {/* background for text in mobile responsive */}
            <div className="absolute z-0 size-full bg-opacity-70">
              <div className="relative size-full">
                <div className="absolute z-10 size-full     opacity-10"></div>
                <div className=" absolute z-10 size-full   opacity-80"></div>
                {/* <Img src={"/typing.png"} alt={"Project Screen shot"} className={`size-full `} /> */}
              </div>
            </div>

            <div
              className="col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 
            pt-8 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7"
            >
              <div className="z-10 flex flex-col space-y-1 md:items-end">
                <span className="text-base text-AAsecondary">Recent Project</span>
                <Link
                  target={"_blank"}
                  href={
                    "https://pg-review-guard-frontend-ie2p4t77w-dineshgaids-projects.vercel.app/home"
                  }
                >
                  <span className=" text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200">
                    Property Reviewer
                  </span>
                </Link>
              </div>
              <div className="md: z-10 w-full rounded-md py-6     md:p-6">
                <p className="text-left text-gray-300 md:text-right md:text-gray-400">
                  This project is designed to enhance your
                  <span className="text-AAsecondary">property searching experience</span> by
                  aggregating reviews from various
                  <span className="text-AAsecondary">websites</span> and providing a
                  <span className="text-AAsecondary">score</span> based on the accuracy of overall
                  ratings, presented in a table of
                  <span className="text-AAsecondary">statistics</span>.
                </p>
              </div>
              <ul
                className="font-Text2 flex w-full flex-wrap text-sm
               text-gray-300 md:justify-end md:text-gray-400"
              >
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> JavaScript
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> React
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Tailwind CSS
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Flask
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Python
                </span>
              </ul>
              <div className="fle-row z-10 flex space-x-5 ">
                <GithubIcon link="https://github.com/DineshG-AIDS/PG_review_guard_frontend" />
                <ExternalLink
                  url={
                    "https://pg-review-guard-frontend-ie2p4t77w-dineshgaids-projects.vercel.app/home"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12  ">
          {/* Left image */}
          <div
            className=" absolute z-10  hidden 
          size-full grid-cols-12 content-center   py-4 md:grid "
          >
            <div className="relative col-span-7 col-start-6 size-full rounded ">
              <a
                href={"https://d-writes-na6k89zux-dineshg-aids.vercel.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className=" absolute size-full rounded   opacity-50 
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </a>
              <Image src={DwritePrjImg} alt="Project Screen shot" className="ml-20  rounded-xl" />{" "}
            </div>
          </div>

          {/* right Content */}
          <div className=" size-full content-center  py-4 md:absolute md:grid md:grid-cols-12 ">
            {/* background for text in mobile responsive */}
            <div className="absolute z-0 size-full bg-opacity-70 md:order-2">
              <div className="relative size-full">
                <div className="absolute z-10 size-full     opacity-10"></div>
                <div className=" absolute z-10 size-full   opacity-80"></div>
                {/* <Image src={BlogPrjImage} alt="Project Screen shot" className="rounded-xl" /> */}
              </div>
            </div>

            <div
              className="col-span-8 flex flex-col items-start space-y-3   
            px-8 pt-8 sm:pt-12 md:order-1  md:py-0 xl:col-span-6"
            >
              <div className="z-10 flex flex-col  space-y-1">
                <span className="text-base text-AAsecondary">My Blog App</span>
                <Link
                  target={"_blank"}
                  href={"https://d-writes-na6k89zux-dineshg-aids.vercel.app/"}
                >
                  <span className=" text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200">
                    Dwrites
                  </span>
                </Link>
              </div>
              <div className="md: z-10 w-full rounded-md py-6     md:p-6">
                <p className="text-left text-gray-300 md:text-gray-400">
                  Our <span className="text-AAsecondary">blog web app</span> is designed to make
                  writing and sharing your ideas effortless. Easily create, edit, and publish your
                  blogs in a user-friendly interface that’s perfect for{" "}
                  <span className="text-AAsecondary">connecting</span> with your audience. Whether
                  you're a professional writer or just starting your blogging journey, this app
                  provides all the tools you need to bring your ideas to life.
                </p>
              </div>
              <ul
                className="font-Text2 flex w-full flex-wrap text-sm
               text-gray-300 md:justify-start md:text-gray-400"
              >
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> React Js
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Google APi
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Mongo DB
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Node JS
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> ExpressJs
                </span>
              </ul>
              <div className="fle-row z-10 flex space-x-5 ">
                <GithubIcon link="https://github.com/DineshG-AIDS/DWrites" />
                <ExternalLink url={"https://d-writes-na6k89zux-dineshg-aids.vercel.app/"} />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div data-aos="fade-up" className="relative w-full md:grid md:h-96 md:grid-cols-12">
          {/* Left image */}
          <div
            className=" absolute z-10  hidden 
          size-full grid-cols-12 content-center   py-4 md:grid"
          >
            <div className="relative col-span-7 size-full rounded ">
              <a href="https://github.com/DineshG-AIDS" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className=" absolute size-full rounded   opacity-50 
           transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
                ></div>
              </a>

              <div className=" absolute ml-4 mt-2  rounded   px-2 ">
                <span className="text-xl text-AAsecondary">Under Construction . . . . .</span>
              </div>

              {/* <Img
                src={"/haircut.png"}
                alt={"Project Screen shot"}
                className={`size-full rounded `}
              /> */}
            </div>
          </div>

          {/* right Content */}
          <div className=" size-full content-center  py-4 md:absolute md:grid md:grid-cols-12 ">
            {/* background for text in mobile responsive */}
            <div className="absolute z-0 size-full bg-opacity-70">
              <div className="relative size-full">
                <div className="absolute z-10 size-full     opacity-10"></div>
                <div className=" absolute z-10 size-full   opacity-80"></div>
                {/* <Img src={"/haircut.png"} alt={"Project Screen shot"} className={`size-full `} /> */}
              </div>
            </div>
            <div className="absolute ml-4   mt-2  w-full rounded  pr-8 text-end">
              <div className="w-full"></div>
              <span className=" rounded   px-2 py-1 text-AAsecondary sm:text-lg">
                Under Construction...
              </span>
            </div>
            <div
              className="col-span-8 col-start-5 flex flex-col items-start space-y-1 px-8 
            pt-8 sm:space-y-3 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7"
            >
              <div className="z-10 flex flex-col space-y-1 md:items-end">
                <span className="text-base text-AAsecondary">Recent Project</span>
                <a href="https://github.com/DineshG-AIDS" target={"_blank"} rel="noreferrer">
                  <span className=" text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200">
                    Where is Application ?
                  </span>
                </a>
              </div>
              <div className="md: z-10 w-full rounded-md py-6     md:p-6">
                <p className="text-left text-gray-300 md:text-right md:text-gray-400">
                  By the way, that is <span className="text-AAsecondary">my project name</span>.
                </p>
              </div>
              <ul
                className="font-Text2 flex w-full flex-wrap text-sm
               text-gray-300 md:justify-start md:text-gray-400"
              >
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> React Js
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> TypeScript
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Mongo DB
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Node JS
                </span>
                <span className="z-10 pr-4">
                  <span className="text-AAsecondary">#</span> Nest Js
                </span>
              </ul>
              <div className="fle-row z-10 flex space-x-5 pt-2 sm:pt-0">
                <GithubIcon link="https://github.com/DineshG-AIDS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <StarsBackground />
    </Section>
  );
}
