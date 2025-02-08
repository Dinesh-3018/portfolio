/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import Button from "./atoms/button";
import axios from "axios";
import { FaUnlockAlt } from "react-icons/fa";
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message Length Should be Min 2 Length"),
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
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowedCount, setAllowedCount] = useState(0);

  useEffect(() => {
    const savedCount = Number(localStorage.getItem("submissionCount")) || 0;
    setAllowedCount(savedCount);
  }, []);

  const generateRandomAnonymousData = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      firstName: `Anonymous${randomId}`,
      lastName: `AnonymousLastName${randomId}`,
      email: `anonymoususer${randomId}@dinesh.com`,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (allowedCount >= 5) {
      alert("You have reached the maximum submission limit.");
      return;
    }

    let submittedData;
    if (isAnonymous) {
      submittedData = {
        ...generateRandomAnonymousData(),
        message: formData.message.trim(),
      };
    } else {
      submittedData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };
    }

    const result = formSchema.safeParse(submittedData);
    if (!result.success) {
      const newErrors = result.error.format();
      setErrors({
        firstName: newErrors.firstName?._errors[0],
        lastName: newErrors.lastName?._errors[0],
        email: newErrors.email?._errors[0],
        message: newErrors.message?._errors[0],
      });

      return; 
    }

    setErrors({}); 

    await axios.post("https://portfolio-backend-qu7x.onrender.com/users", submittedData);

    const newCount = allowedCount + 1;
    setAllowedCount(newCount);
    localStorage.setItem("submissionCount", newCount.toString());

    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setIsAnonymous(false);
  };

  return (
    <div className="mx-auto mt-64 w-full max-w-4xl rounded-md border border-AAsecondary bg-n-8 p-6 md:rounded-2xl md:p-8">
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
              value={isAnonymous ? "" : formData.firstName}
              onChange={handleChange}
              className="bg-stroke-1 text-white"
              disabled={isAnonymous}
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
              value={isAnonymous ? "" : formData.lastName}
              onChange={handleChange}
              disabled={isAnonymous}
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
            value={isAnonymous ? "" : formData.email}
            onChange={handleChange}
            disabled={isAnonymous}
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
        <div className="mb-4 flex items-center">
          <label className="relative mr-3 inline-flex cursor-pointer items-center">
            <input
              className="peer sr-only "
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            <div className="flex  h-[27px] w-12 items-center rounded-full border border-gray-500  bg-red-400 pl-7 text-white   outline-none transition-all duration-300 peer-checked:bg-AAsecondary/80 peer-checked:pl-2 peer-checked:shadow-green-600 peer-focus:outline-none" />
            <svg
              className="absolute left-7 top-1 size-5 stroke-gray-900 opacity-100 transition-all duration-500 peer-checked:opacity-0"
              // height={100}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width={100}
              x={0}
              xmlns="http://www.w3.org/2000/svg"
              y={0}
            >
              <FaUnlockAlt size={70} color="black" />
            </svg>
            <svg
              className="absolute left-1 size-5 stroke-gray-900 opacity-0 transition-all duration-500 peer-checked:opacity-100"
              height={100}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width={100}
              x={0}
              xmlns="http://www.w3.org/2000/svg"
              y={0}
            >
              <path
                d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
                fillRule="evenodd"
              />
            </svg>
            <div className="absolute left-1 top-1 flex h-3.5 w-4 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 peer-checked:left-7" />
          </label>
          <Label htmlFor="anonymous" className="text-white">
            Send Anonymously
          </Label>
        </div>

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
