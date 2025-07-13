import { navLinks } from "../constant/navLinks";
import { Facebook, Twitter,Instagram   } from "lucide-react";

const AboutUsFooter = () => (
  <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
    <h3 className="text-xl font-bold mb-3">Description</h3>
    <p className="text-sm leading-relaxed">
      School that focusing on children's development, providing a safe and
      stimulating environment for young minds to learn and grow. We believe in
      nurturing creativity, curiosity, and a love for learning from an early
      age.
    </p>
    <div className="flex justify-center md:justify-start mt-4 space-x-4">
      <a
        href="#"
        className="hover:text-red-300 transition-all duration-150 hover:scale-150"
      >
        <Facebook />
      </a>
      <a
        href="#"
        className="hover:text-red-300 transition-all duration-150 hover:scale-150"
      >
        <Twitter />
      </a>
      <a
        href="#"
        className="hover:text-red-300 transition-all duration-150  hover:scale-150"
      >
        <Instagram />
      </a>
    </div>
  </div>
);

// components/QuickLinksFooter.jsx (or similar name)
const QuickLinksFooter = () => (
  <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
    <ul className="text-sm space-y-2">
      {navLinks.map((link) => {
        return (
          <li key={link.label}>
            <a href={link.href} className="hover:text-red-300">
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

// components/ContactUsFooter.jsx (or similar name)
const ContactUsFooter = () => (
  <div className="w-full md:w-1/3 text-center md:text-right">
    <h3 className="text-xl font-bold mb-3">Contact Us</h3>
    <p className="text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
      facere.
      <br />
      Lorem, ipsum dolor.
      <br />
      Email: Lorem ipsum dolor sit.
      <br />
      Phone: (123) 456-7890
    </p>
  </div>
);

// components/EndSection.jsx (or your main footer component)
export default function Footer() {
  return (
    <footer className="w-full text-black py-8 mt-auto">
      {" "}
      {/* Added footer tag here */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        <AboutUsFooter />
        <QuickLinksFooter />
        <ContactUsFooter />
      </div>
    </footer>
  );
}
