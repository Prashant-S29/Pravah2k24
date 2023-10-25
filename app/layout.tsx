import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "./globals.css";


import { background } from "@/assets";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";
import CURSOR from "@/clientComponents/cursor";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pravah | SKIT Jaipur",
  description: "Website for Pravah 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CURSOR/>
        <div className="w-full min-h-screen object-cover object-center fixed -z-50">
          <Image
            src={background}
            alt="background"
            className="w-full min-h-screen opacity-40 "
          />
        </div>
        <div>
          <NAVBAR />
          {children}
          {/* <FOOTER /> */}
        </div>
      </body>
    </html>
  );
}
