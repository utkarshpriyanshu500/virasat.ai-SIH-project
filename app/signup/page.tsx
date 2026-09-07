"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Account created! Check your email if confirmation is required."
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      <Navbar />

      <section className="mx-auto max-w-md px-6 py-20">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a05a2c]">
            Virasat.ai
          </p>

          <h1 className="mt-3 text-4xl font-bold text-[#3b2416]">
            Create Account
          </h1>

          <p className="mt-3 text-[#654b3b]">
            Create an account to contribute to Virasat.ai.
          </p>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3b2416]">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#d9c2a3] px-4 py-3 outline-none focus:border-[#7b3f00]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#3b2416]">
                Password
              </label>

              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full rounded-xl border border-[#d9c2a3] px-4 py-3 outline-none focus:border-[#7b3f00]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#7b3f00] px-6 py-3 font-semibold text-white transition hover:bg-[#5f3000] disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-xl bg-[#efe3d0] p-4 text-sm text-[#3b2416]">
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}