export default function Terminal() {
  return (
    <>
      <div className="flex flex-col h-[240px] w-full items-start bg-gray-900 p-4">
        <div className="flex flex-row space-x-8 text-md font-bold  ">
          <span className="text-gray-400">TERMINAL</span>
          <span className="text-gray-200 underline">PROBLEMS</span>
          <span className="text-gray-400">PORTS</span>
        </div>
        <div className="flex flex-col py-2 text-lg text-gray-200">
          {" "}
          No problems have been detected in the workspace.
        </div>
      </div>
    </>
  );
}
