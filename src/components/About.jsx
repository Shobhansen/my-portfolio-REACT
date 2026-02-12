function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
          About Me
        </h2>

        {/* Card */}
        <div className="bg-gray-900/90 backdrop-blur p-10 rounded-3xl shadow-xl">
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m an <span className="text-teal-400 font-semibold">MCA student</span> and an
            aspiring <span className="text-teal-400 font-semibold">full-stack web developer </span> 
            with a strong interest in building modern, user-friendly web applications.
            I enjoy transforming ideas into clean, functional interfaces and solving
            real-world problems through code.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My primary skill set includes technologies such as 
            <span className="text-teal-400 font-semibold"> React, JavaScript, HTML, CSS, Tailwind CSS,</span> 
            and <span className="text-teal-400 font-semibold">Python</span>.
            Alongside web development, I am actively exploring 
            <span className="text-teal-400 font-semibold"> AI-driven applications</span> 
            and how intelligent systems can enhance digital experiences.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in continuous learning, writing clean and maintainable code,
            and improving my skills with every project I build. My goal is to grow
            as a developer while creating reliable, efficient, and impactful
            software solutions.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
