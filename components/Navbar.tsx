"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Ridhi Sidhi Logo"
            className="h-20 w-auto object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-sky-800">
              Ridhi Sidhi
            </h1>
            <p className="text-xs text-gray-600">
              Washing & Service Center
            </p>
          </div>
        </Link>

        {/* MENU */}
        <div className="flex gap-5 text-sm font-semibold text-gray-800">
          <Link href="/" className="hover:text-sky-700 hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/services" className="hover:text-sky-700 hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/gallery" className="hover:text-sky-700 hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-sky-700 hover:underline underline-offset-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}