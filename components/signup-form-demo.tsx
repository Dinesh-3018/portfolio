/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import Button from "./atoms/button";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function ContactSuggestionForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const newErrors = result.error.format();
      setErrors({
        firstName: newErrors.firstName?._errors[0],
        lastName: newErrors.lastName?._errors[0],
        email: newErrors.email?._errors[0],
        message: newErrors.message?._errors[0],
      });
    } else {
      setErrors({});
    }
  };

  return (
    <div className=" mx-auto mt-64 w-full max-w-4xl rounded-md border border-AAsecondary bg-n-8 p-6 md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-white">Contact & Suggestion Form</h2>
      <p className="mt-2 text-sm text-white">
        Send us your message or suggestions, and I'll get back to you!
      </p>

      <form className="my-6" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer className="ml-0">
            <Label htmlFor="firstName" className="text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Dinesh"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-stroke-1 text-white"
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
          </LabelInputContainer>
          <LabelInputContainer className="ml-0">
            <Label htmlFor="lastName" className="text-white">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="G"
              type="text"
              className="bg-stroke-1 text-white"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            className="bg-stroke-1 text-white"
            name="email"
            placeholder="dineshbuddy4@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="text-white">
            Your Message
          </Label>
          <Input
            className="bg-stroke-1 text-white"
            id="message"
            name="message"
            placeholder="Write your message here..."
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </LabelInputContainer>

        <Button className="w-32">Send</Button>
      </form>
    </div>
  );
}

interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
