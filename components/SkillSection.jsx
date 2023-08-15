import Skill from "./Skill";
import MobileSocialLink from "./MobileSocialLink";
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
const wantToLearn = [
  "Nest.js",
  "Three.js",
  "React Native",
  "PostgreSQL",
  "Docker",
];
const SkillSection = () => {
  return (
    <section className="px-4 mt-11">
      <div className="skill flex flex-col  md:flex-row ">
        <div className="my-skills md:w-1/2">
          <Skill mySkills={mySkills} title={"My Skills"} />
        </div>
        <div className="want-to md:w-1/2 ">
          <Skill mySkills={wantToLearn} title={"Want to Learn"} />
        </div>
        <div className="mi order-last mt-10 xl:hidden"></div>
      </div>
    </section>
  );
};
export default SkillSection;
