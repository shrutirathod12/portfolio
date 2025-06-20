function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Shruti V. Rathod. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/shrutirathod12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shruti-rathod-75775523b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shrutivrathod@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
