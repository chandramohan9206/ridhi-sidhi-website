"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminBookings() {
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
    });
    return () => unsub();
  }, [router]);

  async function loadBookings() {
    const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setBookings(data);
  }

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Booking Requests</h1>

      <p className="text-gray-600 mt-2">
        All customer booking requests will appear here.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {bookings.map((b) => (
          <div key={b.id} className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-bold text-sky-800">{b.name}</h2>

            <p className="text-gray-700 mt-2">
              📞 Phone: <b>{b.phone}</b>
            </p>

            <p className="text-gray-700 mt-1">
              🛠 Service: <b>{b.service}</b>
            </p>

            <p className="text-gray-700 mt-1">
              📅 Date: <b>{b.date || "Not provided"}</b>
            </p>

            <p className="text-gray-700 mt-2">
              📝 Message: {b.message || "No message"}
            </p>

            <a
              href={`https://wa.me/91${b.phone}`}
              target="_blank"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600"
            >
              WhatsApp Customer
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}