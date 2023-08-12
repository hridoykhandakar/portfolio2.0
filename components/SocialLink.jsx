import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";

const SocialLink = () => {
  return (
    <>
      <div
        className="fixed top-0 left-4   h-full 
        flex items-center flex-col justify-center"
      >
        <div className="line mb-10 w-[2px]  h-1/6 bg-cyan-500"></div>
        <ul className="flex flex-col gap-7">
          <li className="hover:animate-bounce">
            <Link target="_blank" href="https://www.facebook.com/kmhridoy02">
              <BsFacebook style={{ fontSize: "20px" }} />
            </Link>
          </li>
          <li className="hover:animate-bounce">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hridoykhandakar/"
            >
              <BsLinkedin style={{ fontSize: "20px" }} />
            </Link>
          </li>
          <li className="hover:animate-bounce">
            <Link target="_blank" href="https://github.com/hridoykhandakar">
              <BsGithub style={{ fontSize: "20px" }} />
            </Link>
          </li>
          <li className="hover:animate-bounce">
            <Link target="_blank" href="https://medium.com/@knhridoy150">
              <BsMedium style={{ fontSize: "20px" }} />
            </Link>
          </li>
        </ul>
        <div className="line mt-10 w-[2px]  h-1/6 bg-cyan-500"></div>
      </div>
    </>
  );
};
export default SocialLink;
