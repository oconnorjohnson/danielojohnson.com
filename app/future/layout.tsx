import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
export default function FutureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={GeistSans.className}>
        <body className="bg-black">{children}</body>
      </html>
    </>
  );
}
