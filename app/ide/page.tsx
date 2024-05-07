import Editor from "@/components/root/editor";
export const runtime = "edge";
export default function CodeEditorPage() {
  return (
    <>
      <div className="p-10 w-full h-full">
        <div className="hidden lg:block bg-gray-800 flex flex-col">
          <Editor />
        </div>
        <div className="bg-gray-800 flex flex-col lg:hidden">
          Come back on a bigger screen.
        </div>
      </div>
    </>
  );
}
