import { Gradient } from "@/components/design/roadmap";
import Section from "@/components/layout/section";
import React from "react";
import Experience from "../experience";

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
        </div>
      </div>
    </Section>
  );
};

export default ExperienceBuddy;
