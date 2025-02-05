"use client";
import React from "react";
import ArrowIcon from "../../../public/Admin/Arrow";
import EnsVision from "./Details/Details";
import { motion } from "framer-motion";
import Section from "@/components/layout/section";
import DetailsForSaptang from "./Details/DetailFor2";

export default function Experience() {
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Freelancing":
        return <EnsVision />;
      case "Saptang Labs":
        return <DetailsForSaptang />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Freelancing");
  return (
    <div className="bg-color-AAprimary flex flex-col items-center justify-center space-y-12 py-32">
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"size-4 flex-none text-AAsecondary md:h-6 md:w-5"} />
          <span className="font-sans text-sm text-AAsecondary  sm:text-xl"> 02.</span>
        </div>

        <span className="px-3 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:text-2xl">
          Where I&apos;ve Worked
        </span>
        <div className="h-[0.2px] w-16 bg-gray-400 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col items-center justify-center space-y-4 md:flex-row
      md:items-start md:justify-center md:space-x-4 md:space-y-0 "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: { setDescriptionJob: any }) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<
    boolean[]
  >([true, false, false, false, false, false, false]);
  const CompanyButton = (props: {
    BarPosition: React.SetStateAction<Number>;
    BarAvobePosition: React.SetStateAction<Number>;
    setDescriptionJob: (arg0: any) => void;
    DescriptionJob: any;
    CompanyNameBackgroundColorGreen: React.SetStateAction<boolean[]>;
    ButtonOrderOfcompanyNameBackgroundColorGreen: string | number;
    CompanyName:
      | string
      | number
      | bigint
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | Promise<React.AwaitedReactNode>
      | null
      | undefined;
  }) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`w-32 flex-none rounded py-3 text-center   font-mono
             text-xs duration-500  hover:bg-ResumeButtonHover  
             hover:text-AAsecondary sm:text-sm md:w-44 md:px-4 md:pl-6 md:text-left
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      className=" scrollbar-hide flex w-screen  flex-col items-start 
      justify-start overflow-auto pb-4 sm:items-center sm:justify-center md:flex-row
       md:overflow-hidden md:pb-0 lg:w-auto"
    >
      {/* // ? left bar Holder */}
      <div
        className=" w-34 relative order-2 hidden h-0.5 translate-y-1 rounded bg-gray-500 md:order-1  
        md:block md:h-[90px] md:w-0.5  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute h-0.5 w-10 rounded bg-AAsecondary md:h-12 md:w-0.5 `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="order-1 flex flex-col space-y-1 pl-8 md:order-2 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Freelancing"
            BarPosition={-12}
            BarAvobePosition={1}
            DescriptionJob="Freelancing"
            CompanyNameBackgroundColorGreen={[true, false, false, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Saptang Labs"
            BarPosition={32}
            BarAvobePosition={129}
            DescriptionJob="Saptang Labs"
            CompanyNameBackgroundColorGreen={[false, true, false, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block h-0.5 rounded bg-gray-500 md:hidden">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="h-0.5 w-[128px] rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
