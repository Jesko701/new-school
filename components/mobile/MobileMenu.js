"use client";

import { Plus } from "lucide-react";
import { navLinks } from "../../constant/navLinks"; // Adjust path as needed

export function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="p-6">
        {/* Close button for the mobile menu, always visible when menu is open */}
        <button
          onClick={toggleMenu}
          aria-label="Close mobile menu"
          className="absolute top-6 right-6 text-gray-700 text-2xl focus:outline-none "
        >
          <Plus className="hover:scale-120 text-red-600 rotate-45" />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">Navigation</h2>

        <nav>
          <ul className="mt-8 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-gray-800 text-lg hover:text-red-300 transition-all py-2"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}