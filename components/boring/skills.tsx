export default function Skills() {
  return (
    <>
      <h1
        id="skills"
        className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
      >
        Skills & Interests
      </h1>
      <h3 className="text-lg pb-2 pt-1">
        A brief look at a long list of my skills, interests & hobbies.
      </h3>
      <div className="grid grid-cols-2 gap-4 justify-center w-full text-sm">
        <div className="pl-4">
          Languages
          <ol className="list-decimal text-lg">
            <li>TypeScript</li>
            <li>Python</li>
            <li>Swift {"(WIP)"}</li>
          </ol>
        </div>
        <div className="pl-4">
          Technologies
          <ol className="list-decimal text-lg">
            <li>React, Next.js, Express</li>
            <li>SQL, KV, Vectors</li>
            <li>I learn new tools every day</li>
          </ol>
        </div>
        <div className="pl-4">
          Hobbies
          <ol className="list-decimal text-lg">
            <li>Writing</li>
            <li>Filmmaking</li>
            <li>Gardening</li>
          </ol>
        </div>
        <div className="pl-4">
          Loves
          <ol className="list-decimal text-lg">
            <li>Tacos</li>
            <li>Mad Men</li>
            <li>Drakeo The Ruler</li>
          </ol>
        </div>
      </div>
      <div className="py-6 w-full border-b border-gray-400" />
    </>
  );
}
