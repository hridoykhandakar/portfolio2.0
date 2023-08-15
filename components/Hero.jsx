import Image from "next/image";
import Link from "next/link";

import MobileSocialLink from "./MobileSocialLink";

const Hero = () => {
  return (
    <>
      <div class="absolute left-[28%] top-28  rotate-12 rounded-3xl hidden bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      <div class="absolute hidden right-[28%]  top-0  h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-50 blur-3xl filter dark:block dark:opacity-20 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div class="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
      {/* For light mode */}
      <div class="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div class="absolute h-14 w-[400px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div class="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div class="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      {/* light mode end */}
      <div className="flex flex-col items-center justify-between px-4 md:grid md:grid-cols-2 md:pt-11 ">
        <div className="1 md:order-first order-last">
          <p className="text-blue-500 dark:text-indigo-500 text-base mt-5">
            Hello , I'm
          </p>
          <h1 className="text-4xl font-semibold py-5">Hridoy Khandakar</h1>
          <ul className="flex gap-10 marker:text-sky-400 list-disc ml-4 font-semibold">
            <li>Web Developer</li>
            <li>Programer</li>
          </ul>
          <p className="pt-5 text-lg text-slate-800 dark:text-slate-300 ">
            A self-taught and tech enthusiastic web developer with a deep
            interest in web Technologies. I believe that my enthusiasm and
            willingness to learn make me a strong candidate. I think I am the
            best teacher for myself.I love to teach myself modern technology and
            try to make myself updated.
          </p>
          <div className="button mt-4 flex gap-10">
            <Link
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:bg-transparent hover:bottom-2 hover:border-teal-500 "
              href="#"
            >
              About Me
            </Link>
            <Link
              className="bg-transparent hover:bg-gradient-to-r from-cyan-500 to-teal-500  dark:text-white dark:hover:text-white font-semibold text-gray-900  hover:text-white py-2 px-4 border-2 border-teal-500 hover:border-transparent rounded"
              href="/contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="2 -mt-4 md:ml-auto md:pl-8 z-20">
          <Image src="/hrk.png" width="550" height="550" />
        </div>
      </div>
      <div className="mi order-last mt-10 xl:hidden">
        <MobileSocialLink></MobileSocialLink>
      </div>
    </>
  );
};
export default Hero;
