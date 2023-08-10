"use client";
import { useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <body className={darkMode ? "dark bg-gray-900 text-white" : ""}>
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
