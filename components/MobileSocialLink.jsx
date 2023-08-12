import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
const MobileSocialLink = () => {
  return (
    <div
      className=" 
          flex items-center  justify-center"
    >
      <div className=" w-20 mr-5 h-[2px] bg-cyan-500"></div>
      <ul className="flex  gap-7">
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
      <div className="w-20 h-[2px] ml-5 bg-cyan-500"></div>
    </div>
  );
};

export default MobileSocialLink;
