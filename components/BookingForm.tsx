"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Submitting form...");

      // 🔥 SAVE TO FIREBASE
      await addDoc(collection(db, "bookings"), {
        name: form.name,
        phone: form.phone,
        service: form.service,
        date: form.date,
        time: form.time,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      console.log("Saved to Firebase");

      // 💬 WhatsApp message (FIXED FORMAT)
      const whatsappMessage =
        `Booking Request:%0A` +
        `Name: ${form.name}%0A` +
        `Phone: ${form.phone}%0A` +
        `Service: ${form.service}%0A` +
        `Date: ${form.date}%0A` +
        `Time: ${form.time}%0A` +
        `Message: ${form.message}`;

      window.open(
        `https://wa.me/919672101384?text=${whatsappMessage}`,
        "_blank"
      );

      alert("Booking saved successfully!");

      // RESET FORM
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.log("Firebase Error:", error);
      alert("Error saving booking (check console)");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-sky-800">
        Book Your Service / सर्विस बुक करें
      </h2>

      <p className="text-gray-600 text-sm mt-1">
        WhatsApp पर details भेजकर booking confirm करें।
      </p>

      {/* NAME */}
      <input
        required
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl"
      />

      {/* PHONE */}
      <input
        required
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl"
      />

      {/* SERVICE */}
      <input
        required
        type="text"
        name="service"
        placeholder="Service (Car Wash / Foam Wash / Polishing...)"
        value={form.service}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl"
      />

      {/* DATE */}
      <input
        required
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl"
      />

      {/* TIME */}
      <input
        required
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        placeholder="Extra Message (optional)"
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-300 text-black bg-white p-3 rounded-xl h-28"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600"
      >
        Send Booking Request / WhatsApp पर भेजें
      </button>
    </form>
  );
}