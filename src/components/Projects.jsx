function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React + Tailwind UI",
      github: "",
      live: ""
    },
    {
      title: "Tic_tac_toe",
      desc: "A simple two-player Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Players take turns marking X or O in a 3×3 grid. The game detects wins and draws, displays turn info, and includes a reset button. Playable on any device.",
      github: "https://github.com/Shobhansen/Tic_tac_toe",
      live: ""
    },
    {
      title: "Alumni-Social-Network",
      desc: "A web platform connecting students and alumni, enabling networking, mentorship, and collaboration.",
      github: "https://github.com/SwagataMOfficial/Alumni_Social_Network_2k24",
      live: ""
    },
    {
      title: "CareerTracker",
      desc: "The project is designed to help users manage and track career goals, progress, and related activities in a structured way.",
      github: "https://github.com/Shobhansen/carrerTracker",
      live: ""
    },
    
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-24 mt-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-teal-500/30 transition"
          >
            <h3 className="text-xl font-bold text-teal-400">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.desc}</p>
            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Projects;
