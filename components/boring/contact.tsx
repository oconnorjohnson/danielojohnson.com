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
        <div className="flex flex-col justify-start">
          contact form will go here
        </div>
      </div>
      <div className="py-6 mb-12 w-full border-b border-gray-400" />
    </>
  );
}
