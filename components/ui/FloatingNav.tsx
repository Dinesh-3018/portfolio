/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed left-3 top-1/3 mt-10 transform -translate-y-1/2 flex flex-col items-start space-y-10 p-4",
          "border rounded-full shadow-md border-white/[0.2] bg-transparent z-50",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div
            key={idx}
            className="relative w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              target="blank"
              href={navItem.link}
              className="flex items-center space-x-2 text-neutral-50 hover:text-neutral-300"
            >
              <span>{navItem.icon}</span>
              {/* <span className="text-sm">{navItem.name}</span> */}
            </Link>

            {/* {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverHighlight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-y-0 left-0 w-1 bg-blue-500"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )} */}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
