"use client";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { createMessage } from "@/server/actions/post";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <h1
        id="contact"
        className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
      >
        Contact Me
      </h1>
      <h3 className="text-lg pb-2 pt-1">
        If you want to hire me, discuss coding, or just say hi {":)"}
      </h3>{" "}
      <div className="py-2" />
      <div className="flex flex-col justify-center w-full">
        <form action={createMessage} method="post">
          <div className="flex flex-col justify-start">
            <Input name="name" placeholder="Your Name" required />
            <Input name="title" placeholder="Your Title" required />
            <Input name="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" required />
          </div>
          <div className="flex flex-col justify-start">
            <button type="submit" className="underline">
              Submit.
            </button>
          </div>
        </form>
      </div>
      <div className="py-6 mb-12 w-full border-b border-gray-400" />
    </>
  );
}
