import {
  BsFillMoonStarsFill,
  BsFillBrightnessHighFill,
  BsFillGearFill,
  BsFillGridFill,
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ setDarkMode, darkMode }) => {
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="sticky top-0 z-10 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90  dark:text-white backdrop-filter backdrop-blur-lg border-b-2 border-gray-200 dark:border-gray-600">
      <div className="container max-w-7xl mx-auto py-5 px-4 xl:px-0">
        <div className=" flex justify-between items-center">
          <div className="logo">
            <Link href="/">
              <Image
                className=""
                src={darkMode ? "./logo-white.svg" : "./logo-black.svg"}
                width={130}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="nav-item flex items-center ">
            <div className="nav-link mr-24 md:mr-6">
              <ul className="md:flex space-x-8 font-semibold text-base hidden ">
                <li className="hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/about">About Us</Link>
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
            <div className="nav-buttons flex items-center ml-12">
              <button onClick={toggle}>
                {darkMode ? (
                  <BsFillBrightnessHighFill style={{ fontSize: "20px" }} />
                ) : (
                  <BsFillMoonStarsFill style={{ fontSize: "20px" }} />
                )}
              </button>
              <Link
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
              >
                Resume
              </Link>
              <div className="mobile-menu ml-8 md:hidden ">
                <BsFillGridFill style={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
