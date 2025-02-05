import { FloatingNavBar } from "@/components/layout/FloatingNavBar";
import Footer from "@/components/layout/footer";
import AboutMe from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import TestIdexForExp from "@/components/sections/experience/TestIdexForExp";
import Hero from "@/components/sections/hero";
import SomethingIveBuilt from "@/components/sections/projects";
import ExperienceBuddy from "@/components/sections/roadmap";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden  ")}>
        <FloatingNavBar />
        {/* <Navbar /> */}
        <Hero />
        <AboutMe />
        <ExperienceBuddy />
        <SomethingIveBuilt />
        <Contact />
        {/* <Services />
        <Pricing />
        <Roadmap /> */}
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
