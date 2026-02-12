function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Python",
    "SQL/MySQL",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">
          Skills
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Technologies I use to build efficient, scalable, and user-friendly applications.
        </p>

        {/* Skill Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-6 py-3
                rounded-full
                border border-teal-400/40
                text-teal-300
                font-medium
                tracking-wide
                hover:bg-teal-400 hover:text-black
                hover:scale-110
                transition
                cursor-default
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
