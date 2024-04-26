import type { Metadata } from "next";
import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
import { AuroraHero } from "@/components/root/aurora-hero";
import SideNav from "@/components/root/side-nav";
export default function CodeEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-black">
        <AuroraHero>
          <div className="h-screen w-screen">
            <SideNav>{children}</SideNav>
          </div>
        </AuroraHero>
      </body>
    </html>
  );
}
