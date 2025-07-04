// components/Navbar.jsx
import { navLinks } from "../constant/navLinks";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md font-inter">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Logo + Mobile Menu */}
        {/* On mobile, this div will contain both the logo and the burger icon.
            On desktop, MobileMenu will hide itself. */}
        <div className="flex items-center gap-4">
          {/* Added flex and gap for alignment */}
          <a href="/">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">MySite</span>
            </div>
          </a>
        </div>

        {/* Center Section: Desktop Navigation (hidden on sm, visible on md+) */}
        <nav className="hidden md:flex gap-6 text-red-500 font-medium">
          {navLinks.map((link) => {
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition text-gray-700 hover:text-red-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                  after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform
                  after:bg-red-300
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Social Media */}
        <div className="flex gap-4 text-gray-600 text-xl">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-800 transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-800 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-800 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}
