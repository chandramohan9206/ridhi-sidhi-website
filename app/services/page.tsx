"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadServices() {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setServices(data);
    setLoading(false);
  }

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">
        Our Services / हमारी सेवाएँ
      </h1>

      <p className="mt-3 text-gray-700">
        हमारे यहाँ modern equipment के साथ professional washing और servicing की
        जाती है। Customer satisfaction हमारी priority है।
      </p>

      {loading ? (
        <p className="mt-8 text-gray-600">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="mt-8 text-red-600">
          No services found. Please add services from Admin Panel.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg text-gray-900">
                {service.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2">{service.desc}</p>

              <p className="mt-3 font-bold text-sky-700">
                {service.price || "Contact for Price"}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-4 flex-wrap">
        <a
          href="tel:9672101384"
          className="bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-sky-800"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919672101384"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-green-600"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}