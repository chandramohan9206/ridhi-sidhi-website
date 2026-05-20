"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setUserEmail(user.email);
      }
    });

    return () => unsub();
  }, [router]);

  async function logout() {
    await signOut(auth);
    router.push("/admin/login");
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-14">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold text-sky-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Logged in as: {userEmail}</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <Link
          href="/admin/services"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-sky-800">Manage Services</h2>
          <p className="text-gray-600 mt-2">
            Add / Edit / Delete services and prices.
          </p>
        </Link>

        <Link
          href="/admin/reviews"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-sky-800">Manage Reviews</h2>
          <p className="text-gray-600 mt-2">
            Add customer reviews shown on homepage.
          </p>
        </Link>

        <Link
          href="/admin/bookings"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-sky-800">Booking Requests</h2>
          <p className="text-gray-600 mt-2">
            View booking requests submitted by customers.
          </p>
        </Link>
      </div>
    </main>
  );
}