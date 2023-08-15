const Skill = ({ mySkills, title }) => {
  return (
    <section>
      <h1 className="mt-5 text-3xl font-semibold u-line">{title}</h1>
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
    </section>
  );
};
export default Skill;
