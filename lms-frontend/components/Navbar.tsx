"use client"; // Ensure this runs only on the client side
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          LMS
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link href="/courses" className="hover:text-gray-200 block py-2 px-4">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-200 block py-2 px-4">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
