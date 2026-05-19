"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:9672101384"
      className="fixed bottom-5 left-5 bg-sky-700 text-white p-4 rounded-full shadow-lg hover:bg-sky-800 z-50"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
}