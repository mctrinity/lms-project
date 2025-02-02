"use client"; // Ensure this runs only on the client side
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold">
          LMS
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-blue-600 p-4 transition-transform duration-300 ease-in-out md:relative md:top-0 md:flex md:space-x-6 md:w-auto md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/courses"
              className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent"
              onClick={closeMenu} // Close menu on click
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent"
              onClick={closeMenu} // Close menu on click
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
