import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";
const Card = ({ item }) => {
  return (
    <div className="shadow-xl rounded border-2 dark:shadow-white/10 p-5">
      <div className="flex items-center justify-center flex-col">
        <div className="img">
          <div className="project-image rounded-t">
            <Image
              className="rounded"
              src={item.image}
              width="550"
              height="550"
            />
          </div>
        </div>
        <div className="info mt-2">
          <div className=" py-2 rounded">
            <p>{item.id}</p>
            <h3 className="text-3xl py-2">{item.name}</h3>
            <p className="text-left">{item.description}</p>
            <div className="technology py-3 flex gap-3">
              {item.stack.map((i) => (
                <span className="btn">{i}</span>
              ))}
            </div>
            <ul className="link flex items-center gap-5">
              <li>
                <Link target="_blank" href={item.link[0]}>
                  <BsGithub style={{ fontSize: "20px" }}></BsGithub>
                </Link>
              </li>
              <li>
                <Link target="_blank" href={item.link[1]}>
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
