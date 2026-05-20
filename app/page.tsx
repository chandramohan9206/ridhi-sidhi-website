"use client";

import { useEffect, useState } from "react";
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

      {/* ================= HERO (MOBILE FIXED) ================= */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900"></div>

        <div className="absolute w-[300px] md:w-[650px] h-[300px] md:h-[650px] bg-sky-500/20 blur-3xl rounded-full top-[-120px] left-[-120px]"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"></div>

        {/* watermark logo mobile safe */}
        <img
          src="/logo.png"
          className="absolute inset-0 m-auto w-[280px] md:w-[650px] opacity-10 select-none pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-5 text-center text-white">

          <p className="tracking-[0.25em] text-[10px] md:text-xs uppercase text-sky-300">
            Premium Auto Care Studio
          </p>

          <h1 className="text-3xl md:text-7xl font-extrabold mt-5 leading-tight">
            Ridhi Sidhi <br />
            <span className="text-sky-300">Washing & Service</span>
          </h1>

          <p className="mt-6 text-sm md:text-xl text-sky-100 max-w-xl mx-auto">
            Car • Bike • Tractor Washing, Foam Cleaning, Polishing & Servicing
          </p>

          {/* buttons MOBILE STACK FIX */}
          <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center">

            <a
              href="tel:9672101384"
              className="px-6 py-3 rounded-full bg-white text-blue-950 font-semibold"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold"
              target="_blank"
            >
              WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold"
              target="_blank"
            >
              Visit Us
            </a>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative -mt-12 md:-mt-20 z-10 max-w-6xl mx-auto px-5">
        <div className="backdrop-blur-xl bg-white/90 border border-gray-200 shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 text-center">

          <h2 className="text-xl md:text-3xl font-bold text-blue-950">
            Professional Vehicle Care
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600">
            Premium washing & servicing for Car, Bike & Tractor
          </p>

          <p className="mt-3 text-xs md:text-sm font-medium text-gray-800">
            High Pressure • Foam Wash • Interior Cleaning • Polishing • Oil Change
          </p>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">

        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-950">
          Signature Services
        </h2>

        <p className="text-center text-gray-500 mt-2 md:mt-3 text-sm md:text-base">
          Crafted care for every vehicle
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-14">

          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-lg md:text-xl font-bold text-blue-950">
                {s.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {s.desc}
              </p>

              <p className="mt-4 font-bold text-sky-700">
                {s.price || "Contact"}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50 py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 text-center">

          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-14">

            {[
              "Advanced Equipment",
              "Professional Staff",
              "Affordable Pricing",
              "Fast Service",
              "All Vehicle Types",
              "Trusted Local Work"
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl shadow p-5 md:p-6"
              >
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {t}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* ================= REVIEWS ================= */}
      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">

        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-950">
          Customer Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-10 md:mt-14">

          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white border shadow-md rounded-xl md:rounded-2xl p-5 md:p-6"
            >
              <h3 className="font-bold text-base md:text-lg">{r.name}</h3>

              <div className="mt-2">
                <ReviewStars count={r.stars || 5} />
              </div>

              <p className="mt-3 text-sm text-gray-600">
                {r.review}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ================= BOOKING ================= */}
      <section className="relative py-16 md:py-24 bg-blue-950 text-white overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <img src="/logo.png" className="w-[300px] md:w-[700px] m-auto" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">
              Book Premium Service
            </h2>

            <p className="mt-3 text-sky-200 text-sm md:text-base">
              Fast response & professional care
            </p>
          </div>

          <div className="bg-white text-black rounded-xl md:rounded-2xl p-5 md:p-6 shadow-2xl">
            <BookingForm />
          </div>

        </div>

      </section>

    </main>
  );
}