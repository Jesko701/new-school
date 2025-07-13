"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { MobileMenu } from "../../components/mobile";
import { Menu } from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // State to manage the mobile menu's open/close status for small screens
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />

          <button
            onClick={toggleMobileMenu}
            className="
              fixed top-25 left-0 -translate-x-1 -translate-y-1/2 z-38
              bg-gray-600 bg-opacity-50 text-white p-2 rounded-md shadow-lg 
              block md:hidden
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75
              transition-all duration-300 hover:bg-gray-700 hover:bg-opacity-75 
            "
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Overlay for when the mobile menu is open */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-gray-500/50 z-39 md:hidden" // Changed background to gray-500 with opacity-50
              onClick={toggleMobileMenu} // Close menu when clicking outside
            ></div>
          )}

          {/* MobileMenu component, always rendered but its visibility is controlled by `isOpen` */}
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
