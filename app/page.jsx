import Hero from "@/components/Hero";

export const metadata = {
  icons: {
    icon: "/dot.svg",
  },
  title: "Hridoy's Portfolio",
};

export default function Home() {
  return (
    <main className="dark:bg-gray-900    dark:text-white">
      <div className="container max-w-7xl mx-auto">
        <Hero />
      </div>
    </main>
  );
}
