import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import SessionWrapper from "@/components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BoostBank",
  description: "BoostBank: A Crowdfunding App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          <Navbar />
          <div className="bg-slate-950 min-h-[100vh] text-white">
            {children}
          </div>

          <Footer />
        </body>
      </ SessionWrapper>
    </html>
  );
}
