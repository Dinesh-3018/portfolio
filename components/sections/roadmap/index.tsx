import { Gradient } from "@/components/design/roadmap";
import Section from "@/components/layout/section";
import React from "react";
import Experience from "../experience";
import { StarsBackground } from "@/components/ui/stars-background";

type Props = {};

const ExperienceBuddy = (props: Props) => {
  return (
    <Section id="experience" className="">
      <div className="">
        <div className="">
          <div>
            <Experience />
          </div>
          <Gradient />
          <StarsBackground />
        </div>
      </div>
    </Section>
  );
};

export default ExperienceBuddy;
