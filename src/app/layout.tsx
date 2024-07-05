import { Metadata } from "next";
import './globals.css'
import Aside from "@/components/Aside";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zenbytes github search",
  description: "zenbyetes project to search for github repositories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="flex h-screen gap-7 w-1200 max-w-responsive my-14 lg:mx-auto">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
