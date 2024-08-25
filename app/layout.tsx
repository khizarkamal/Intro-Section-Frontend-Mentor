import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navigation from "@/ui/components/Navigation";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Website Intro Section ",
  description:
    "Intro Section created using tailwindcss typescript.While using modren layout technique such as Grid and flexbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} bg-[#FAF9F6]`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
