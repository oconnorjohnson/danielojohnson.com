export default function CmdKInstructions() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-lg font-source-code-pro p-4">
        <div className="bg-gray-900 w-[400px] text-white p-4 rounded-lg shadow-md space-y-2">
          {/* <div className="flex items-center justify-between">
            <span className="font-semibold pr-4">Toggle Terminal</span>
            <span className="flex flex-row items-center bg-gray-700 px-2 py-1 rounded">⌘ + j</span>
          </div> */}
          <div className="flex flex-row items-center justify-between">
            <span className="font-semibold pr-4">Open page</span>
            <span className="bg-gray-700 px-2 py-1 rounded">
              ⌘ <span className="text-gray-400">+</span> o
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="font-semibold pr-4">Close page</span>
            <span className="bg-gray-700 px-2 py-1 rounded">
              ⌘ <span className="text-gray-400">+</span> z
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="font-semibold pr-4">Close all</span>
            <span className="bg-gray-700 px-2 py-1 rounded">
              ⌘ <span className="text-gray-400">+</span> shift{" "}
              <span className="text-gray-400">+</span> z
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
