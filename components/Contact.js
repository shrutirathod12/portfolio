export default function Contact() {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white px-6 py-20 flex justify-center items-center relative"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center">
          <p className="italic text-3xl font-serif mb-8 max-w-xs">
            I'd love to hear<br />from you.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="GitHub" className="h-10 w-10" />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/discord.png" alt="Discord" className="h-10 w-10" />
            </a>
            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/leetcode (1).png" alt="LeetCode" className="h-9 w-9" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-sm">shrutivrathod@gmail.com</p>
            <p className="text-sm">9321730866</p>
          </div>
          <a
            href="/Shruti_Rathod_Resume.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-light py-3 px-8 rounded shadow transition text-center w-max"
          >
            Download CV
          </a>
        </div>

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute right-10 bottom-20 border border-blue-600 rounded-full p-2 hover:bg-blue-100 transition"
          style={{ width: '40px', height: '40px' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#4c51bf"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 mx-auto"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </section>
  );
}
