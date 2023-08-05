"use client";
import { useState } from "react";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html lang="en">
      <body className={darkMode ? "dark" : ""}>
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
        {children}
      </body>
    </html>
  );
}