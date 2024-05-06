"use client";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createMessage } from "@/server/actions/post";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { toast } from "sonner";

const jsonExample = {
  Name: "John Doe",
  Email: "johndoe@example.com",
  Phone: "+1234567890",
  PreferredContactMethod: "Email",
  Message: "Hi, I'd love to discuss...",
};

export default function Title() {
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
      <div className="flex flex-col">
        <div className="w-full bg-gray-800 shadow-xl flex flex-row items-center justify-start pl-4 py-2 text-md text-gray-400">
          <span className="hover:font-bold transition-all">
            danielojohnson.com
          </span>
          <span className="px-2">{">"}</span>
          <span className="hover:font-bold transition-all">app</span>
          <span className="pl-2">{">"}</span>
          <Image
            alt="react file icon"
            src="/react.svg"
            width={30}
            height={30}
            className="px-1"
          />{" "}
          <span className="hover:font-bold transition-all">contact.json</span>
        </div>
        <ScrollArea className="h-[722px] w-[900px] flex flex-col">
          <div className="flex flex-cols-2 items-start justify-start px-4 pt-2 pb-40 ">
            <div className="flex flex-col pr-8 text-gray-500 items-end font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg  pt-2">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
            </div>
            <form onSubmit={handleSubmit} method="post" className="pt-2">
              <h1 className="font-source-code-pro text-gray-500 text-xs sm:text-sm md:text-md lg:text-lg">
                // fill out the json to get in touch
              </h1>
              <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg">
                {"{"}
                <br />
                <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
                  "name"
                </span>
                <span style={{ color: "#d4d4d4" }}>:</span>
                {' "'}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  defaultValue="Daniel Johnson"
                  className="bg-gray-800 text-yellow-300 w-[151px] font-semilight text-md mt-1"
                />
                {'",'}
                <br />
                <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
                  "title"
                </span>
                <span style={{ color: "#d4d4d4" }}>:</span>
                {' "'}
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-gray-800 text-yellow-300 w-[183px] font-semilight text-md my-1"
                />
                {'",'}
                <br />
                <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
                  "email"
                </span>
                <span style={{ color: "#d4d4d4" }}>:</span>
                {' "'}
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  defaultValue="myaddress@email.com"
                  className="bg-gray-800 text-yellow-300 w-[205px] font-semilight text-md"
                />
                {'",'}
                <br />
                <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
                  "message"
                </span>
                <span style={{ color: "#d4d4d4" }}>:</span>
                {' "'}
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  defaultValue="Hi, I love your work!"
                  className="bg-gray-800 text-yellow-300 w-[225px] font-semilight text-md my-1"
                />
                {'",'}
                <br />
                <span style={{ marginLeft: "" }}>{"}"}</span>{" "}
              </h1>

              <h1 className="font-source-code-pro text-green-500 text-xs sm:text-sm md:text-md lg:text-lg">
                //{" "}
                <button type="submit" disabled={pending} className="underline">
                  Submit.
                </button>
              </h1>
            </form>
          </div>

          {/* <Terminal /> */}
        </ScrollArea>
      </div>
    </>
  );
}
