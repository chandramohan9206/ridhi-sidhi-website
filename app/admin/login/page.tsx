"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError("Login failed. Check email/password.");
    }

    setLoading(false);
  }

  return (
    <main className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-sky-800">Admin Login</h1>
      <p className="text-gray-600 mt-2">
        Only Admin can access dashboard.
      </p>

      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-2xl p-6 mt-8 space-y-4"
      >
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border p-3 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          disabled={loading}
          className="w-full bg-sky-700 text-white py-3 rounded-xl font-semibold hover:bg-sky-800"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}