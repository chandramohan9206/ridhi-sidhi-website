"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminReviews() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);

  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
    });
    return () => unsub();
  }, [router]);

  async function loadReviews() {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(data);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function addReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await addDoc(collection(db, "reviews"), {
      name,
      review,
      stars,
    });

    setName("");
    setReview("");
    setStars(5);

    await loadReviews();
    setLoading(false);
  }

  async function deleteReview(id: string) {
    await deleteDoc(doc(db, "reviews", id));
    await loadReviews();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Manage Reviews</h1>

      <form
        onSubmit={addReview}
        className="bg-white p-6 rounded-2xl shadow-md mt-8 space-y-4"
      >
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-3 rounded-xl h-24"
          placeholder="Customer Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <input
          type="number"
          min={1}
          max={5}
          className="w-full border p-3 rounded-xl"
          placeholder="Stars (1 to 5)"
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
          required
        />

        <button
          disabled={loading}
          className="bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-800"
        >
          {loading ? "Adding..." : "Add Review"}
        </button>
      </form>

      <h2 className="text-2xl font-bold text-sky-800 mt-12">All Reviews</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">{r.name}</h3>
            <p className="text-sm text-gray-700 mt-2">{r.review}</p>
            <p className="mt-2 font-bold text-yellow-600">
              ⭐ {r.stars} / 5
            </p>

            <button
              onClick={() => deleteReview(r.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}