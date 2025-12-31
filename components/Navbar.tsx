export default function Navbar() {
  return (
    <nav className="w-full px-4 pt-4 md:pt-6">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-full px-6 py-4 md:px-10 md:py-5 flex items-center justify-center"
          style={{ backgroundColor: "#78D05F" }}
        >
        <div className="hidden md:flex items-center gap-8">
          <a href="#concept" className="text-white hover:text-green-100 transition-colors font-bold text-lg md:text-xl">
            Concept
          </a>
          <a href="#fonctionnalites" className="text-white hover:text-green-100 transition-colors font-bold text-lg md:text-xl">
            Fonctionnalités
          </a>
          <a href="#demo" className="text-white hover:text-green-100 transition-colors font-bold text-lg md:text-xl">
            Demo
          </a>
          <a href="#contact" className="text-white hover:text-green-100 transition-colors font-bold text-lg md:text-xl">
            Contact
          </a>
        </div>
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
      </div>
    </nav>
  );
}
