"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3">

          {/* LOGO + NAME */}
          <Link href="/" className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Ridhi Sidhi Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />

            <div className="leading-tight">

              <h1 className="text-lg md:text-2xl font-extrabold text-blue-950">
                Ridhi Sidhi
              </h1>

              <p className="text-[11px] md:text-xs text-gray-500">
                Washing & Service Center
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">

            <Link
              href="/"
              className="hover:text-sky-700 transition"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="hover:text-sky-700 transition"
            >
              Services
            </Link>

            <Link
              href="/gallery"
              className="hover:text-sky-700 transition"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="hover:text-sky-700 transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-blue-950"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm font-semibold text-gray-700">

            <Link
              href="/"
              className="py-2 px-3 rounded-lg hover:bg-sky-50"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/services"
              className="py-2 px-3 rounded-lg hover:bg-sky-50"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/gallery"
              className="py-2 px-3 rounded-lg hover:bg-sky-50"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="py-2 px-3 rounded-lg hover:bg-sky-50"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

          </div>

        )}

      </div>

    </nav>
  );
}