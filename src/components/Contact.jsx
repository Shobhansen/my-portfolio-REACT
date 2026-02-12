function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 scroll-mt-24">
      <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
        Contact Me
      </h2>

      <form className="max-w-lg mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
        <input className="bg-gray-800 p-3 rounded text-white" placeholder="Name" />
        <input className="bg-gray-800 p-3 rounded text-white" placeholder="Email" />
        <textarea className="bg-gray-800 p-3 rounded text-white" placeholder="Message" />
        <button className="bg-teal-500 text-black py-3 rounded-lg font-semibold hover:opacity-90">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
