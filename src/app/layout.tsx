import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your day one",
  description: "Your place to go for fitness needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="mx-auto max-w-[2160px]">
        <Navbar  />

       
 
        {children}
        <Footer  />
  
      </div>
        </body>
    </html>
  );
}
