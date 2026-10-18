import { skills } from "../data/skills.js";

const Skills = () => {
  return (
    <section className="section-padding skills-section">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Technical Skills</span>
          <h2 className="section-title skills-heading mt-5">Modern Technologies, Practical Solutions.</h2>
          <p className="section-copy">
            I work with modern web technologies to build responsive, scalable, and user-friendly applications. From crafting interactive frontends with React to developing robust backend systems with Node.js, Express.js, and MongoDB, I focus on writing clean code and delivering efficient solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.category}
              className="skill-card rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
            >
              <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-white">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-stone-50 px-3 py-2 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
