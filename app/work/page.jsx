import Card from "@/components/Card";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden px-4 pt-11 dark:bg-gray-900 dark:text-white">
      <Card className="m-5"></Card>
      <Card className="m-5"></Card>
      <Card className="m-5"></Card>
      <Card className="m-5"></Card>
      <Card className="m-5"></Card>
      <Card className="m-5"></Card>
    </section>
  );
};
export default page;
