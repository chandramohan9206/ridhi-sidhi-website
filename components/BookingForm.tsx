"use client";

import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Booking Request:%0A
  Name: ${form.name}%0A
  Phone: ${form.phone}%0A
  Service: ${form.service}%0A
  Date: ${form.date}%0A
  Time: ${form.time}%0A
  Message: ${form.message}`;

    window.open(
      `https://wa.me/919672101384?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100"
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
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          required
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          required
          type="text"
          name="service"
          placeholder="Service (Car Wash / Foam Wash / Polishing...)"
          value={form.service}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          required
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input
          required
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          name="message"
          placeholder="Extra Message (optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl h-28"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600"
        >
          Send Booking Request / WhatsApp पर भेजें
        </button>
      </div>
    </form>
  );
}