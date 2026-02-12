function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-teal-400">MyPortfolio</h1>
        <ul className="flex gap-6 text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-teal-400 transition"
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
