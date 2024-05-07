"use client";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { createMessage } from "@/server/actions/post";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { pending } = useFormStatus();
  const [formData, setFormData] = useState({
    name: "Daniel Johnson",
    title: "Software Engineer",
    email: "myaddress@email.com",
    message: "Hi, I love your work!",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await createMessage(new FormData(event.target)); // Assuming createMessage can handle FormData directly
    if (response) {
      toast.success("Message sent successfully!");
      // Clear form data
      setFormData({
        name: "",
        title: "",
        email: "",
        message: "",
      });
    }
  };
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
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col justify-start space-y-4">
            <Input
              name="name"
              placeholder={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="title"
              placeholder={formData.title}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              placeholder={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col justify-start pt-12">
            <button
              disabled={pending}
              type="submit"
              className="pl-2 flex flex-row justify-around align-center items-center text-center px-2 py-1 lg:py-2 lg:px-4 bg-gray-800 font-semibold rounded-lg text-sm lg:text-lg text-gray-200 border border-gray-400 my-4 lg:mt-6 hover:text-blue-500 transition-all"
            >
              Submit.
            </button>
          </div>
        </form>
      </div>
      <div className="py-6 mb-12 w-full" />
    </>
  );
}
