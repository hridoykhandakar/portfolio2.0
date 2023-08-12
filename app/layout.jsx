"use client";
import { useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SocialLink from "@/components/SocialLink";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <body className={darkMode ? "dark bg-gray-900 text-white" : ""}>
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
        <div className="link hidden xl:block">
          <SocialLink></SocialLink>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
