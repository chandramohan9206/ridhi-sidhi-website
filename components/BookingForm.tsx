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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");

  try {
    await addDoc(collection(db, "bookings"), {
      ...form,
      createdAt: serverTimestamp(),
    });

    setSuccess("Booking request submitted successfully!");

    const whatsappMessage = `Booking Request:
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message}
`;

    window.open(
      `https://wa.me/919672101384?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  } catch (error) {
    alert("Booking failed. Please try again.");
  } finally {

  setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-sky-800">
        Book Your Service / सर्विस बुक करें
      </h2>

      <p className="text-gray-600 text-sm mt-1">
        WhatsApp पर details भेजकर booking confirm करें।
      </p>

      <div className="mt-5 space-y-4">

        <input
          required
          type="text"
          name="name"
          placeholder="Your Name / नाम"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          required
          type="text"
          name="phone"
          placeholder="Phone Number / मोबाइल नंबर"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          required
          type="text"
          name="service"
          placeholder="Service (Car Wash / Foam Wash / Polishing...)"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          required
          type="date"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          required
          type="time"
          name="time"
          placeholder="Time"
          value={form.time}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <textarea
          name="message"
          placeholder="Extra Message (optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        ></textarea>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600"
        >
          {loading ? "Submitting..." : "Send Booking Request / Whatsapp पर भेजें"}
        </button>

        {success && <p className="text-green-600 text-sm">{success}</p>}
      </div>
    </form>
  );
}