import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";
const Card = () => {
  return (
    <div className="shadow-xl rounded border-2 dark:shadow-white/10 p-5">
      <div className="flex items-center justify-center flex-col">
        <div className="img">
          <div className="project-image">
            <Image src="/project-1.png" width="550" height="550" />
          </div>
        </div>
        <div className="info mt-2">
          <div className=" py-2 rounded">
            <p>02</p>
            <h3 className="text-3xl py-2">Doctor's Portal</h3>
            <p className="text-left">
              A Single page web app with dashboard where people can pick the
              date and time and fix an appointment. A doctor can review his
              appointments and prescribe medicine to a Patient from his
              dashboard.
            </p>
            <div className="technology py-3 flex gap-3">
              <span className="btn">React.js</span>
              <span className="btn">React.js</span>
              <span className="btn">React.js</span>
              <span className="btn">React.js</span>
            </div>
            <ul className="link flex items-center gap-5">
              <li>
                <Link target="_blank" href="https://www.github.com">
                  <BsGithub style={{ fontSize: "20px" }}></BsGithub>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.google.com">
                  <BsLink style={{ fontSize: "20px" }}></BsLink>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
