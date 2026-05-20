"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import ReviewStars from "@/components/ReviewStars";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [services, setServices] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const s = await getDocs(collection(db, "services"));
      setServices(s.docs.map((d) => ({ id: d.id, ...d.data() })));

      const r = await getDocs(collection(db, "reviews"));
      setReviews(r.docs.map((d) => ({ id: d.id, ...d.data() })));
    })();
  }, []);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">

        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900"></div>

        {/* glowing circles */}
        <div className="absolute w-[600px] h-[600px] bg-sky-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-200px] right-[-200px]"></div>

        {/* watermark logo */}
        <img
          src="/logo.png"
          className="absolute inset-0 m-auto w-[650px] opacity-10 select-none pointer-events-none"
        />

        {/* content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

          <p className="tracking-[0.3em] text-xs uppercase text-sky-300">
            Premium Auto Care Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Ridhi Sidhi <br />
            <span className="text-sky-300">Washing & Service</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-sky-100 max-w-2xl mx-auto">
            High Pressure Wash • Foam Detailing • Interior Deep Cleaning • Polishing • Oil Change • Complete Vehicle Care
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:9672101384"
              className="px-7 py-3 rounded-full bg-white text-blue-950 font-semibold hover:scale-105 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              className="px-7 py-3 rounded-full bg-green-500 text-white font-semibold hover:scale-105 transition"
              target="_blank"
            >
              WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              className="px-7 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
              target="_blank"
            >
              Visit Location
            </a>

          </div>
        </div>
      </section>

      {/* ================= ABOUT FLOAT CARD ================= */}
      <section className="relative -mt-20 z-10 max-w-6xl mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-10 text-center">

          <h2 className="text-3xl font-bold text-blue-950">
            Professional Vehicle Care
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We deliver premium washing & servicing for Car, Bike & Tractor using modern tools and expert techniques.
          </p>

          <p className="mt-3 font-medium text-gray-800">
            Clean Work • Fast Service • Honest Pricing
          </p>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center text-blue-950">
          Signature Services
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Crafted care for every vehicle
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold text-blue-950 group-hover:text-sky-600">
                {s.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm">
                {s.desc}
              </p>

              <p className="mt-5 font-bold text-sky-700">
                {s.price || "Contact"}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-blue-950">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              "Advanced Cleaning Equipment",
              "Professional Staff",
              "Affordable Pricing",
              "Fast Turnaround Time",
              "All Vehicle Types",
              "Trusted Local Service"
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <p className="font-semibold text-gray-800">{t}</p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* ================= REVIEWS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center text-blue-950">
          Customer Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white border shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{r.name}</h3>

              <div className="mt-2">
                <ReviewStars count={r.stars || 5} />
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                {r.review}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= BOOKING ================= */}
      <section className="relative py-24 bg-blue-950 text-white overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <img src="/logo.png" className="w-[700px] m-auto" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Book Premium Service
            </h2>

            <p className="mt-4 text-sky-200">
              Get fast response and professional vehicle care
            </p>
          </div>

          <div className="bg-white text-black rounded-2xl p-6 shadow-2xl">
            <BookingForm />
          </div>

        </div>

      </section>

    </main>
  );
}