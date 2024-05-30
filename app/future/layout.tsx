import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";

export default function FutureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <div className="content">{children}</div>
      </body>
    </>
  );
}
