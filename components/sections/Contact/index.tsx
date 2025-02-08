"use client";

import React from "react";
import Section from "@/components/layout/section";
import SignupFormDemo from "@/components/signup-form-demo";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Section id="contact" className="p-3 sm:p-3 md:p-3 lg:p-3 ">
      <SignupFormDemo />
    </Section>
  );
};

export default Contact;
