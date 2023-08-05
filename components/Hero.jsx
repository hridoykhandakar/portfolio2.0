import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between px-4 md:grid md:grid-cols-2 pt-11 ">
      <div className="1 md:order-first order-last">
        <p className="text-blue-500 dark:text-indigo-500 text-base">
          Hello , I'm
        </p>
        <h1 className="text-4xl font-semibold py-5">Hridoy Khandakar</h1>
        <ul className="flex gap-10 marker:text-sky-400 list-disc ml-4 font-semibold">
          <li>Web Developer</li>
          <li>Programer</li>
        </ul>
        <p className="pt-5 text-lg text-slate-800 dark:text-slate-300 ">
          A self-taught and tech enthusiastic web developer with a deep interest
          in web Technologies. I believe that my enthusiasm and willingness to
          learn make me a strong candidate. I think I am the best teacher for
          myself.I love to teach myself modern technology and try to make myself
          updated.
        </p>
        <div className="button mt-4 flex gap-10">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            href="#"
          >
            {" "}
            About Me
          </Link>
          <Link
            className="bg-transparent hover:bg-blue-500 text-blue-700 dark:text-blue-400 dark:hover:text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            href="#"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="2 md:ml-auto">
        <Image src="/hh.png" width="550" height="550" />
      </div>
    </div>
  );
};
export default Hero;
