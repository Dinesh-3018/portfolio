"use client";
import React from "react";
import { FloatingNav } from "../ui/FloatingNav";
import { IconMessage } from "@tabler/icons-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "https://www.linkedin.com/in/dinesh-g-28b71b199/",
      icon: <FaLinkedin className="size-4 text-white hover:text-color-AAsecondary" />,
    },
    {
      name: "About",
      link: "https://github.com/DineshG-AIDS",
      icon: <FaGithub className="size-4 text-white hover:text-color-AAsecondary" />,
    },
    {
      name: "Contact",
      link: "/",
      icon: <IconMessage className="size-4 text-white hover:text-color-AAsecondary" />,
    },
  ];

  return (
    <div className="hidden lg:block">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
