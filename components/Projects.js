function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">Graphical Password Authentication</h3>
            <p className="mt-2 text-gray-300">Three-phase login system using text, color, and image authentication. Built with Flask, SQLite, and SHA-256.</p>
            <a
              href="https://graphical-password-to-avoid-shoulder.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-purple-500 hover:bg-green-600 text-white rounded-lg transition"
            >
              🚀 Live Demo
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">Smart Recipe Generator</h3>
            <p className="mt-2 text-gray-300">AI-powered recipe suggestions using Hugging Face Transformers and JAX for text generation.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">YouTube Transcript Summarizer</h3>
            <p className="mt-2 text-gray-300">Chrome extension summarizing video transcripts using Flask API and T5 Transformer.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-300">Image generation using Stable Diffusion and Comfy UI</h3>
            <p className="mt-2 text-gray-300">User Interface for Entering the prompts to get desired images generated</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
