"use client";

import Navbar from "@/components/layout/navbar";
import { RevealLinks } from "@/components/layout/RevealLinks";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import Section from "@/components/layout/section";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <Navbar />
      <Section id="#hero" className="relative flex h-screen flex-col items-center">
        <div className="mt-32 flex w-full flex-1 flex-col items-center  pl-10 sm:mt-32 sm:flex-col md:flex-row xl:mt-0 xl:flex-row xl:pl-52">
          <RevealLinks />
          <OrbitingCirclesDemo />
        </div>

        <ShootingStars />
        <StarsBackground />
      </Section>
    </>
  );
};

export default Hero;
