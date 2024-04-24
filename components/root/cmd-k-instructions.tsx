export default function CmdKInstructions() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[500px] text-lg font-source-code-pro p-4">
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold pr-4">Open a page</span>
            <span className="bg-gray-700 px-2 py-1 rounded">⌘ + p</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold pr-4">Close a page</span>
            <span className="bg-gray-700 px-2 py-1 rounded">⌘ + w</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold pr-4">Close all</span>
            <span className="bg-gray-700 px-2 py-1 rounded">⌘ + shift + p</span>
          </div>
        </div>
      </div>
    </>
  );
}
