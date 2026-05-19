"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-sky-700">
          Ridhi Sidhi Washing
        </Link>

        <div className="flex gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-sky-700">
            Home
          </Link>
          <Link href="/services" className="hover:text-sky-700">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-sky-700">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-sky-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}