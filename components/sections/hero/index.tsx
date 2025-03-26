"use client";

import Navbar from "@/components/layout/navbar";
import { RevealLinks } from "@/components/layout/RevealLinks";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React, { useEffect, useState } from "react";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import Section from "@/components/layout/section";
import axios from "axios";

type Props = {};

interface HeroProps {
  HandlerForStatus: (status: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ HandlerForStatus }) => {
  const NetworkHandler = async () => {
    await axios.get("https://portfolio-backend-qu7x.onrender.com/users");
    HandlerForStatus(true);
  };
  useEffect(() => {
    NetworkHandler();
  }, [""]);
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
