export default function About() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          About Me
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="font-semibold text-white">Shruti Rathod</span>,
          a passionate software developer and full stack intern who enjoys building secure,
          smart and user-centric applications. My work blends clean UI/UX with practical functionality — powered by
          technologies like <span className="text-purple-300">Flask, JavaScript, Python, SQL, and React</span>.
        </p>

        <p className="text-gray-400 text-md">
          I'm also deeply curious about Artificial Intelligence and Human-Computer Interaction,
          and love creating systems that are not only functional but thoughtfully designed for real-world use.
        </p>

        <p className="text-sm text-gray-500 italic">
          "Good code solves problems. Great design solves human problems."
        </p>
      </div>
    </section>
  );
}
