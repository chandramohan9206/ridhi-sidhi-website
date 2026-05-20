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
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Load Services
  async function loadServices() {
    setLoadingServices(true);
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setServices(data);
    setLoadingServices(false);
  }

  // Load Reviews
  async function loadReviews() {
    setLoadingReviews(true);
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(data);
    setLoadingReviews(false);
  }

  useEffect(() => {
    loadServices();
    loadReviews();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold leading-tight">
            Ridhi Sidhi Washing and Service Center
          </h1>

          <p className="mt-4 text-lg opacity-95">
            Car | Bike | Tractor Washing & Servicing – Best Quality at Affordable
            Price
          </p>

          <p className="mt-2 text-lg opacity-95">
            हमारे यहाँ Car, Bike और Tractor की Washing और Servicing की सुविधा
            उपलब्ध है।
          </p>

          <p className="mt-3 opacity-90">
            Ridhi Sidhi Washing and Service Center में Car, Bike और Tractor की
            Complete Washing & Servicing की सुविधा उपलब्ध है।
          </p>

          <p className="mt-2 opacity-90">
            हम High Pressure Wash, Foam Wash, Interior Cleaning, Polishing,
            Coating, Oil Change, Repair और Basic Servicing अच्छे और कम दाम में
            करते हैं।
          </p>

          <p className="mt-2 opacity-90">
            Quality Work + Fast Service हमारी पहचान है।
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:9672101384"
              className="bg-white text-sky-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919672101384"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-green-600"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/wxvaJMBxgeB2Q9RT8"
              target="_blank"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-500"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-sky-800">
          Our Services / हमारी सेवाएँ
        </h2>

        <p className="mt-2 text-gray-700">
          Complete Washing, Cleaning and Servicing at best price.
        </p>

        {loadingServices ? (
          <p className="mt-6 text-gray-600">Loading services...</p>
        ) : services.length === 0 ? (
          <p className="mt-6 text-red-600">
            No services found. Please add services from Admin Panel.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-block bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-sky-800"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-sky-100 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800">
            Why Choose Us / हमें क्यों चुनें?
          </h2>

          <p className="mt-2 text-gray-700">
            हम आपको best quality washing और servicing देते हैं कम दाम में।
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              "✅ Affordable Price / कम दाम",
              "✅ High Pressure + Foam Wash",
              "✅ Fast Service / जल्दी काम",
              "✅ Interior Cleaning & Polishing",
              "✅ Trusted Staff / भरोसेमंद काम",
              "✅ Car, Bike & Tractor All Services",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800">
            Price List / दाम की सूची
          </h2>

          <p className="mt-2 text-gray-700">
            Exact price depends on vehicle condition. Contact for best rate.
          </p>

          {loadingServices ? (
            <p className="mt-6 text-gray-600">Loading price list...</p>
          ) : services.length === 0 ? (
            <p className="mt-6 text-red-600">No price data available.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {services.slice(0, 8).map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center bg-sky-50 p-5 rounded-2xl shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>

                  <span className="font-bold text-sky-700">
                    {service.price || "Contact"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-sky-800">
          Customer Reviews / ग्राहकों की राय ⭐
        </h2>

        {loadingReviews ? (
          <p className="mt-6 text-gray-600">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="mt-6 text-red-600">
            No reviews found. Add reviews from Admin Panel.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold">{r.name}</h3>

                <div className="mt-2">
                  <ReviewStars count={r.stars || 5} />
                </div>

                <p className="text-sm text-gray-700 mt-3">{r.review}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* BOOKING + MAP */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <BookingForm />

          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Aligarh%20Bypass,%20NH522,%20Umarpura,%20Aligarh,%20Rajasthan%20304023&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}