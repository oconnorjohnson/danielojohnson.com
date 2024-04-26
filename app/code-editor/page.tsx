import Editor from "@/components/root/editor";

export default function CodeEditorPage() {
  return (
    <>
      <div className="hidden md:block p-10 w-full h-full">
        <div className="bg-gray-800 flex flex-col">
          <Editor />
        </div>
      </div>
    </>
  );
}
