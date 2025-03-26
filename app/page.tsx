"use client";
import { FloatingNavBar } from "@/components/layout/FloatingNavBar";
import Footer from "@/components/layout/footer";
import AboutMe from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/hero";
import SomethingIveBuilt from "@/components/sections/projects";
import ExperienceBuddy from "@/components/sections/roadmap";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
export default function Home() {
  const [UserStatusActive, UserSetStatusActive] = useState(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("UserStatusActive="))
      ?.split("=")[1];
    return cookieValue ? cookieValue === "true" : false;
  });

  const HandlerForStatus = (value: boolean) => {
    UserSetStatusActive(value);
    if (value) {
      document.cookie = `UserStatusActive=${value}; path=/; max-age=${60 * 60 * 24}`;
    } else {
      document.cookie = "UserStatusActive=; path=/; max-age=0";
    }
  };

  useEffect(() => {
    return () => {
      document.cookie = "UserStatusActive=; path=/; max-age=0";
    };
  }, []);
  return (
    <main>
      <div className={cn("overflow-hidden  ")}>
        <FloatingNavBar />
        {/* <Navbar /> */}
        <Hero HandlerForStatus={HandlerForStatus} />
        <AboutMe />
        <ExperienceBuddy />
        <SomethingIveBuilt />
        <Contact UserStatusActive={UserStatusActive} />
        {/* <Services />
        <Pricing />
        <Roadmap /> */}
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
