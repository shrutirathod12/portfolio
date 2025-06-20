import { useState } from 'react';

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showResume, setShowResume] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 65;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -65;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="h-screen grid md:grid-cols-2 place-items-center bg-black px-6 text-white relative"
    >
      {/* LEFT: Intro + Resume Button */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-purple-300">
          Shruti V. Rathod
        </h1>
        <p className="text-sm md:text-lg text-gray-400 tracking-wide">
          Software Developer • Full Stack Intern • AI Enthusiast
        </p>

        <button
          onClick={() => setShowResume(true)}
          className="inline-block mt-6 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg shadow transition"
        >
          View Resume
        </button>
      </div>

      {/* RIGHT: Tilted PNG */}
      <div
        className="w-72 h-72 transition-transform duration-300 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(600px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src="/images/girl.png"
          alt="Girl with laptop"
          className="w-full h-full object-contain rounded-xl shadow-[0_10px_20px_rgba(168,85,247,0.5)]"
        />
      </div>

      {/* MODAL: Resume Preview */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 h-4/5 rounded-lg shadow-lg overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 text-black text-2xl font-bold z-10 hover:text-red-500"
            >
              ×
            </button>

            {/* Resume PDF in iframe */}
            <iframe
              src="/Shruti_Rathod_Resume.pdf"
              title="Shruti Resume"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
