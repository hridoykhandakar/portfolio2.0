"use client";
import { useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillBrightnessHighFill,
  BsFillGridFill,
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ setDarkMode, darkMode }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <nav className="sticky top-0 z-10 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90  dark:text-white backdrop-filter backdrop-blur-lg border-b-2 border-gray-200 dark:border-gray-600">
      <div className="container max-w-7xl mx-auto py-5 px-4 xl:px-0">
        <div className=" flex justify-between items-center">
          <div className="logo w-32  border-3">
            <Link href="/" className="">
              <p className="text-2xl md:text-3xl font-bold flex items-end">
                H <span className="text-2xl text-teal-500">•</span>
              </p>
            </Link>
          </div>
          <div className="nav-item flex items-center ">
            <div className="nav-link  md:mr-6">
              <ul
                className={
                  open
                    ? " absolute transition ease-in-out top-20 left-0 bg-white  dark:bg-gray-900 text-center w-full border-2 z-20 flex flex-col gap-4 py-4 font-semibold"
                    : "hidden md:flex space-x-8 font-semibold text-base"
                }
              >
                <li className="hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/about">About Me</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/work">Work</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-buttons flex items-center justify-center ml-12">
              <button onClick={toggle}>
                {darkMode ? (
                  <BsFillBrightnessHighFill style={{ fontSize: "20px" }} />
                ) : (
                  <BsFillMoonStarsFill style={{ fontSize: "20px" }} />
                )}
              </button>
              <Link
                href="https://drive.google.com/file/d/1uLaChlzW-L-i1V572Pt9vPeekf_ek9sO/view"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5 md:ml-8 "
              >
                Resume
              </Link>
              <div className="mobile-menu ml-5 md:hidden ">
                <button className="flex" onClick={handleClick}>
                  <BsFillGridFill style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
