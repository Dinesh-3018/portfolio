"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/FlipWords";
import Image from "next/image";
import HandWavingIcon from "../../public/HandWavingIcon.png";
import Button from "../atoms/button";
// import MenuSvg from "../svg/menu-svg";
// import { Highlight } from "../ui/hero-highlight";

export const RevealLinks = () => {
  const words: string[] = ["Frontend Engineer", "Freelance Developer", "Code Artisan"];

  return (
    <>
      <div className=" w-full">
        <div className="rounded-full p-0.5">
          <div className="  flex flex-row items-center gap-x-3 font-grotesk text-white">
            <div className="flex w-12 justify-center rounded-xl bg-color-AAsecondary p-[2px]">
              <Image src={HandWavingIcon} alt="Icon" className="w-7" />
            </div>
            <h1 className=" cursor-default text-xl text-color-AAsecondary">Hi , I am </h1>
          </div>
        </div>
        <section className="flex flex-row gap-x-3 text-white ">
          <div className="  flex flex-row items-center ">
            <FlipLink href="#">D</FlipLink>
            <FlipLink href="#">i</FlipLink>
            <FlipLink href="#">n</FlipLink>
            <FlipLink href="#">e</FlipLink>
            <FlipLink href="#">s</FlipLink>
            <FlipLink href="#">h</FlipLink>
          </div>
          <FlipLink href="#">G</FlipLink>
        </section>
        <div className=" cursor-default">
          <FlipWords words={words} />
        </div>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              duration: 0.7,
              ease: "easeOut",
            },
            y: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          className="  sm:text-md mt-10 text-sm tracking-wider text-gray-400 md:text-lg"
        >
          I&apos;m a <span className=" text-color-AAsecondary">software engineer intern</span>, with
          strong
          <span className="text-color-AAsecondary"> problem-solving skills</span>, specializing in
          creating exceptional digital experiences
          <br className="mb-1 " />
          With expertise in both <span className="text-color-AAsecondary">front-end</span> and{" "}
          <span className="text-color-AAsecondary">back-end</span> development, I work with a
          diverse range of technologies including{" "}
          <span className="text-color-AAsecondary">JavaScript</span>,{" "}
          <span className="text-color-AAsecondary">TypeScript</span> and popular web frameworks
          <br className="mt-2 " />
          {/* My experience in <span className="text-color-AAsecondary">leading development</span> teams
          has honed my ability to collaborate effectively and translate ideas into functional
          solutions */}
          <br className="mb-2 hidden 2xl:block" />I am excited to contribute to{" "}
          <span className="text-color-AAsecondary"> dynamic projects</span> that push the boundaries
          of technology.
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              duration: 2,
              ease: "easeOut",
            },
            y: {
              duration: 2,
              ease: "easeOut",
            },
          }}
          className="mt-6"
        >
          {" "}
          <a href={"/DineshG.pdf"} target="_blank" rel="noreferrer">
            <Button className="block p-4">Check out my resume !</Button>
          </a>
        </motion.div>
        {/* <div className=" pt-10">
          <Highlight className=" font-code  text-4xl text-black ">
            Why write messy code when you can confuse future you with elegance?
          </Highlight>
        </div> */}

        {/* <div className="ml-2 mt-2 w-1/2">
          <TextGenerateEffect words={wordsForLong} />
        </div> */}
      </div>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string; href: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="font-FontNormal1   relative  block w-fit cursor-pointer overflow-hidden whitespace-nowrap  text-4xl font-black leading-loose  sm:text-3xl md:text-3xl lg:text-6xl"
      style={{
        lineHeight: 1.5,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-104%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
