function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <ul className="flex justify-center gap-8 py-4 text-sm uppercase">
        <li><a href="#hero" className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  )
}
export default Navbar;