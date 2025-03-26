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
  const [UserStatusActive, UserSetStatusActive] = useState<boolean>(false);

  useEffect(() => {
    const storedValue =
      typeof window !== "undefined" ? localStorage.getItem("UserStatusActive") : null;
    if (storedValue !== null) {
      UserSetStatusActive(storedValue === "true");
    }
  }, []);

  const HandlerForStatus = (value: boolean) => {
    UserSetStatusActive(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("UserStatusActive", String(value));
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("UserStatusActive");
      }
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
