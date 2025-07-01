"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaInstagram  } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { navLinks } from "../constant/navLinks";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname) return null;

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">MySite</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-red-500 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition text-gray-700 hover:text-red-300 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
                  after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform 
                  after:bg-red-300 ${
                    isActive
                      ? "text-blue-600 after:scale-x-100"
                      : "after:scale-x-0"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Social Media */}
        <div className="flex gap-4 text-gray-600 text-xl">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTikTok />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}
