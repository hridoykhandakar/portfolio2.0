import MobileSocialLink from "@/components/MobileSocialLink";
import Image from "next/image";

const mySkills = [
  "javaScript",
  "React.js",
  "Next.js",
  "Express.js",
  "MondoDB",
  "Python",
  "Git",
  "Webpack",
  "C",
  "Figma",
];
export const metadata = {
  icons: {
    icon: "/dot.svg",
  },
  title: "About Me",
};
const page = () => {
  return (
    <section className=" max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10  m-auto px-5 xl:px-0  dark:bg-gray-900 dark:text-white">
      <div className="md:w-1/2 flex flex-col items-center justify-center ">
        <div className="2 mt-4  ">
          <Image src="/hrk.png" width="350" height="350" />
        </div>
        <div className="1 ">
          <h1 className="text-4xl font-semibold py-5">
            <span className="underline pr-2 text-blue-500 dark:text-indigo-500 text-3xl">
              I am
            </span>
            Hridoy Khandakar
          </h1>
          <p className="pt-2 text-lg mr-10 text-slate-800 dark:text-slate-300 ">
            A self-taught and tech enthusiastic web developer with a deep
            interest in web Technologies. I believe that my enthusiasm and
            willingness to learn make me a strong candidate. I think I am the
            best teacher for myself.I love to teach myself modern technology and
            try to make myself updated.
          </p>
        </div>
      </div>
      <div className="skill md:w-1/2">
        <div className="my-skills">
          <h1 className="mt-5 text-3xl font-semibold u-line">My Skills</h1>
          <div class="technology mt-5 flex w-full gap-1 flex-wrap">
            {mySkills.map((item) => (
              <span
                key={item.id}
                class="bg-slate-500 text-white  px-2 py-1 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="my-skills">
          <h1 className="mt-5 text-3xl font-semibold u-line">
            i Want to work with
          </h1>
          <div class="technology mt-5 flex w-full gap-1 flex-wrap">
            {mySkills.map((item) => (
              <span
                key={item.id}
                class="bg-slate-500 text-white  p-2 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mi order-last mt-10 xl:hidden">
          <MobileSocialLink></MobileSocialLink>
        </div>
      </div>
    </section>
  );
};
export default page;
