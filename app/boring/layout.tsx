import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
export default function BoringLayout({
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
