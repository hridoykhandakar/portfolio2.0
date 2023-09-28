import Card from "./Card";
import web1 from "../public/web1.png";

import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
const work = [
  {
    id: "01",
    name: "cash calculator",
    image: web2,
    description:
      "A simple Calculator for calculate some lengthy calculation easily.Where a User give a list of input and the application make some calculation and git them output on one click ",
    stack: ["react.js", "Typescript", "Tailwind", "vite"],
    link: [
      "https://github.com/hridoykhandakar/fcal",
      "hhttps://hrkfc.netlify.app/",
    ],
  },
  {
    id: "02",
    name: "Movies Bazar",
    image: web3,
    description:
      "A single page web application to see Trending, imdb Top rated movies,Action, Comedy, Horror movies.the data came from a api called TMDB. Its like a HULU website clone. User can see when the movie was release date and how many people liked it, by hovering it. ",
    stack: ["react.js", "Node.js", "Tailwind"],
    link: [
      "https://github.com/hridoykhandakar/Movie-Bazar",
      "https://glistening-salmiakki-38d335.netlify.app/",
    ],
  },
  {
    id: "03",
    name: "Music Player",
    image: web1,
    description:
      "A Single page web app with where people can listen music on browser.it has all the basic functionality of a music player",
    stack: ["React.js", "javascript", "SASS"],
    link: [
      "https://github.com/hridoykhandakar/Movie-Bazar",
      " https://github.com/hridoykhandakar/react-music-player",
    ],
  },
  {
    id: "04",
    name: "Card Master",
    image: web4,
    description:
      "A Web App created With React and tailwindCSS. Its a calculator app for playing Card game with all the basic calculation functionality.",
    stack: ["React.js", "Tailwind", "ContextApi"],
    link: [
      "https://github.com/hridoykhandakar/card-master",
      " https://diucard.netlify.app/",
    ],
  },
];
const WorkSection = () => {
  return (
    <section className="px-4 mt-11">
      <h1 className="pt-5 text-center text-3xl font-semibold u-line">
        Some of my Works
      </h1>
      <section className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden px-4 pt-11 dark:bg-gray-900 dark:text-white">
        {work.map((item) => (
          <Card item={item} />
        ))}
      </section>
    </section>
  );
};
export default WorkSection;
