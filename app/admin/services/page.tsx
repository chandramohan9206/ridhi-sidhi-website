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

export default function AdminServices() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
    });
    return () => unsub();
  }, [router]);

  async function loadServices() {
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setServices(data);
  }

  useEffect(() => {
    loadServices();
  }, []);

  async function addService(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await addDoc(collection(db, "services"), {
      title,
      desc,
      price,
    });

    setTitle("");
    setDesc("");
    setPrice("");

    await loadServices();
    setLoading(false);
  }

  async function deleteService(id: string) {
    await deleteDoc(doc(db, "services", id));
    await loadServices();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-sky-800">Manage Services</h1>

      <form
        onSubmit={addService}
        className="bg-white p-6 rounded-2xl shadow-md mt-8 space-y-4"
      >
        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Service Title (Example: Car Wash)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 rounded-xl"
          placeholder="Price (Example: ₹200)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-800"
        >
          {loading ? "Adding..." : "Add Service"}
        </button>
      </form>

      <h2 className="text-2xl font-bold text-sky-800 mt-12">
        All Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            <p className="mt-3 font-bold text-sky-700">{s.price}</p>

            <button
              onClick={() => deleteService(s.id)}
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