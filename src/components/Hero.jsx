import profile from "../assets/pic3.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-teal-400">Shobhan Sen</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Web Developer • MCA Student • AI Enthusiast
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-500 text-black rounded-full font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-92 h-92 object-cover rounded-full border-4 border-teal-400 shadow-lg hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;


