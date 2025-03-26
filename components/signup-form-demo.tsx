/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import Button from "./atoms/button";
import axios from "axios";
import { FaUnlockAlt } from "react-icons/fa";
import DisclaimerIcon from "../public/assets/danger.png";
import Image from "next/image";
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
type Props = {
  UserStatusActive: boolean;
};
export default function ContactSuggestionForm({ UserStatusActive }: Props) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowedCount, setAllowedCount] = useState(0);
  const [anonymousCount, setAnonymousCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const SECRET_KEY = "mz/lFqGwzGocYHUM92TG4g==";
  const encryptValue = (value: string) => {
    return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
  };
  const decryptValue = (encryptedValue: string) => {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  };
  useEffect(() => {
    const savedCount = Number(localStorage.getItem("submissionCount")) || 0;
    setAllowedCount(savedCount);
  }, []);

  const generateRandomAnonymousData = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      firstName: `Anonymous${randomId}`,
      lastName: `AnonymousLastName${randomId}`,
      email: `anonymoususer${randomId}@email.com`,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const normalLimit = 5;
    const anonymousLimit = 2;

    const storedCount =
      Number(decryptValue(localStorage.getItem("mz/lFqGwzGocYHUM92TG4g==") || "")) || 0;
    const storedAnonymousCount =
      Number(
        decryptValue(localStorage.getItem("aK6yXpz6DaODC1ANor4lAkIlRBenAxfLJZUVIXtJ8Ws=") || "")
      ) || 0;

    if (!isAnonymous && storedCount >= normalLimit) {
      alert("You have reached the maximum submission limit.");
      return;
    }

    if (isAnonymous && storedAnonymousCount >= anonymousLimit) {
      alert("You have reached the maximum anonymous submission limit.");
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
    setIsLoading(true);

    await axios.post("https://portfolio-backend-qu7x.onrender.com/users", submittedData);

    if (isAnonymous) {
      const newAnonymousCount = storedAnonymousCount + 1;
      setAnonymousCount(newAnonymousCount);
      // aK6yXpz6DaODC1AxfL4lAkIlRBenJZUVIXtANorJ8Ws=

      localStorage.setItem(
        "aK6yXpz6DaODC1ANor4lAkIlRBenAxfLJZUVIXtJ8Ws=",
        encryptValue(newAnonymousCount.toString())
      );
    } else {
      const newCount = storedCount + 1;
      setAllowedCount(newCount);
      // mz/lGwzFqYHUMGoc92TG4g==
      localStorage.setItem("mz/lFqGwzGocYHUM92TG4g==", encryptValue(newCount.toString()));
    }

    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setIsAnonymous(false);
    setIsLoading(false);
  };

  return (
    <div className="mx-auto mt-64 w-full max-w-4xl rounded-2xl border border-AAsecondary bg-n-8 p-6 md:rounded-2xl md:p-8">
      <div className="flex flex-row items-center justify-between">
        <div>
          {" "}
          <h2 className="text-xl font-bold text-white">Contact & Suggestion Form</h2>
        </div>

        {!UserStatusActive && (
          <div className="group relative inline-block">
            <div className=" flex w-32 cursor-pointer items-center  gap-x-1 rounded-full border-2 border-AAsecondary p-2 text-AAsecondary">
              <span className="block pl-1 text-sm font-medium sm:inline">Disclaimer</span>

              <Image src={DisclaimerIcon} alt="Icon" width={20} />
            </div>
            <div className="invisible absolute bottom-full left-1/2 mb-3 w-72 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-4 shadow-[0_0_30px_rgba(79,70,229,0.15)] backdrop-blur-md">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-AAsecondary/20">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4 text-AAsecondary"
                    >
                      <path
                        clipRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-white">Note</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    My portfolio backend on Render may enter sleep mode after 15 minutes. If the
                    submission delays or fails, please try again. Thanks for your patience!{" "}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50 blur-xl" />
                <div className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-gradient-to-br from-gray-900/95 to-gray-800/95" />
              </div>
            </div>
          </div>
        )}
      </div>

      <p className=" text-sm text-white">
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

        <Button className="w-32">{isLoading ? "Sending..." : "Send"}</Button>
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
