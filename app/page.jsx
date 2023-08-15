import Hero from "@/components/Hero";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export const metadata = {
  icons: {
    icon: "/dot.svg",
  },
  title: "Hridoy's Portfolio",
};

export default function Home() {
  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <div className="container max-w-7xl mx-auto">
        <Hero />
        {/* about section */}
        <SkillSection />
        {/* work section */}
        <WorkSection />
        {/* Blog  section */}
        {/* contact  section */}
      </div>
    </main>
  );
}
