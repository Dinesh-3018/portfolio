import React from "react";
import Section from "./section";
// import { socials } from "@/constants";
// import Link from "next/link";
// import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        {/* <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p> */}
        <p className="caption flex cursor-default flex-row items-center gap-x-2 text-n-4">
          Made with{" "}
          <svg
            viewBox="0 0 1792 1792"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 
             hover:scale-110"
          >
            <path
              d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
              fill="#e25555"
            ></path>
          </svg>{" "}
          By
          <a
            href="https://www.linkedin.com/in/dinesh-g-28b71b199/"
            target="_blank"
            className="-ml-1 cursor-pointer hover:text-blue-400 hover:underline"
          >
            Dinesh G
          </a>
        </p>
        {/* <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </Link>
          ))}
        </ul> */}
      </div>
    </Section>
  );
};

export default Footer;
