"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

type Submission = {
  id: number;
  submission_type: "community" | "artisan";
  name: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string | null;
  contact: string | null;
  status: "pending" | "approved" | "rejected";
  ai_status: "pending" | "passed" | "review" | "failed" | null;
  ai_score: number | null;
  ai_reason: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    setCheckingAdmin(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsAdmin(false);
      setCheckingAdmin(false);
      return;
    }

    const { data, error } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Admin check error:", error);
      setIsAdmin(false);
    } else {
      setIsAdmin(!!data);
    }

    setCheckingAdmin(false);
  }

  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  async function fetchSubmissions() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("heritage_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Submission fetch error:", error);
      setMessage(error.message);
    } else {
      const rows = (data || []) as Submission[];
      setSubmissions(rows);

      // Automatically verify pending submissions
      await verifyPendingSubmissions(rows);
    }

    setLoading(false);
  }

  async function verifyPendingSubmissions(rows: Submission[]) {
  const pendingRows = rows.filter(
    (item) =>
      item.status === "pending" &&
      (!item.ai_status || item.ai_status === "pending")
  );

  if (pendingRows.length === 0) return;

  setMessage("AI is verifying new heritage submissions...");

  let successCount = 0;
  let failedCount = 0;
  let quotaError = false;

  for (const item of pendingRows) {
    try {
      const response = await fetch("/api/verify-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: item.title,
          category: item.category,
          location: item.location,
          description: item.description,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        console.error(
          "AI verification failed:",
          JSON.stringify(result, null, 2)
        );

        const errorText = JSON.stringify(result);

        const isQuotaError =
          response.status === 429 ||
          errorText.includes("429") ||
          errorText.includes("RESOURCE_EXHAUSTED") ||
          errorText.includes("quota");

        if (isQuotaError) {
          quotaError = true;

          await supabase
            .from("heritage_submissions")
            .update({
              ai_status: "review",
              ai_reason:
                "AI verification is temporarily unavailable because the Gemini API usage limit has been reached. Admin review is required.",
            })
            .eq("id", item.id);
        } else {
          failedCount++;

          await supabase
            .from("heritage_submissions")
            .update({
              ai_status: "failed",
              ai_reason:
                "AI verification could not be completed. Admin review is required.",
            })
            .eq("id", item.id);
        }

        continue;
      }

      const { error } = await supabase
        .from("heritage_submissions")
        .update({
          ai_status: result.status,
          ai_score: result.score,
          ai_reason: result.reason,
        })
        .eq("id", item.id);

      if (error) {
        console.error("AI result save error:", error);
        failedCount++;
      } else {
        successCount++;
      }
    } catch (error) {
      console.error("AI verification error:", error);
      failedCount++;

      await supabase
        .from("heritage_submissions")
        .update({
          ai_status: "failed",
          ai_reason:
            "AI verification could not be completed. Admin review is required.",
        })
        .eq("id", item.id);
    }
  }

  if (quotaError) {
    setMessage(
      "AI verification is temporarily unavailable because the Gemini usage limit has been reached. The submission has been moved to review."
    );
  } else if (failedCount > 0) {
    setMessage(
      `AI verification finished with ${successCount} successful and ${failedCount} failed verification(s).`
    );
  } else {
    setMessage("AI verification completed successfully.");
  }

  await fetchSubmissionsWithoutAI();
}

  async function fetchSubmissionsWithoutAI() {
    const { data, error } = await supabase
      .from("heritage_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setSubmissions((data || []) as Submission[]);
    }
  }

  async function updateStatus(
    id: number,
    status: "approved" | "rejected"
  ) {
    const { error } = await supabase
      .from("heritage_submissions")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Update error:", error);
      setMessage(error.message);
      return;
    }

    setMessage(
      status === "approved"
        ? "Submission accepted successfully."
        : "Submission declined."
    );

    await fetchSubmissionsWithoutAI();
  }

  const filteredSubmissions = submissions.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  if (checkingAdmin) {
    return (
      <main className="min-h-screen bg-transparent">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-lg font-semibold text-[#7b3f00]">
            Checking admin access...
          </p>
        </div>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-transparent">
        <Navbar />

        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-3xl font-bold text-[#3b2416]">
              Access Denied
            </h1>

            <p className="mt-4 text-[#654b3b]">
              You must be an administrator to access this page.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a05a2c]">
          Admin Panel
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#3b2416]">
          Heritage Submissions
        </h1>

        <p className="mt-4 text-[#654b3b]">
          AI automatically screens submissions. You make the final decision.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["all", "pending", "approved", "rejected"].map((item) => (
            <button
              key={item}
              onClick={() =>
                setFilter(
                  item as "all" | "pending" | "approved" | "rejected"
                )
              }
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                filter === item
                  ? "bg-[#7b3f00] text-white"
                  : "border border-[#7b3f00] text-[#7b3f00] hover:bg-[#7b3f00] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {message && (
          <div className="mt-6 rounded-xl border border-[#d9c2a3] bg-white p-4 text-[#654b3b]">
            {message}
          </div>
        )}

        {loading ? (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold text-[#7b3f00]">
              Loading submissions...
            </p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-sm">
            <p className="text-xl font-semibold text-[#3b2416]">
              No {filter === "all" ? "" : filter} submissions
            </p>

            <p className="mt-2 text-[#654b3b]">
              New community and artisan submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {filteredSubmissions.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="p-6">
                  <div className="flex flex-col gap-6 md:flex-row">
                    {item.image && (
                      <div className="md:w-64 md:flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 w-full rounded-xl object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-2xl font-bold text-[#3b2416]">
                            {item.title}
                          </h2>

                          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#a05a2c]">
                            {item.submission_type}
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-4 py-1 text-sm font-semibold capitalize ${
                            item.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : item.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-2 text-sm text-[#654b3b] md:grid-cols-2">
                        <p>
                          <strong>Submitted by:</strong> {item.name}
                        </p>

                        <p>
                          <strong>Category:</strong> {item.category}
                        </p>

                        <p>
                          <strong>Location:</strong> {item.location}
                        </p>

                        <p>
                          <strong>Contact:</strong>{" "}
                          {item.contact || "Not provided"}
                        </p>
                      </div>

                      <div className="mt-5">
                        <p className="text-sm font-semibold text-[#3b2416]">
                          Description
                        </p>

                        <p className="mt-2 leading-7 text-[#654b3b]">
                          {item.description}
                        </p>
                      </div>

                      {/* AI Verification */}
                      <div className="mt-6 rounded-xl border border-[#d9c2a3] bg-[#faf6ed] p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="font-bold text-[#3b2416]">
                            AI Verification
                          </h3>

                          {item.ai_status ? (
                            <span
                              className={`rounded-full px-4 py-1 text-sm font-semibold capitalize ${
                                item.ai_status === "passed"
                                  ? "bg-green-100 text-green-800"
                                  : item.ai_status === "review"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : item.ai_status === "failed"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.ai_status}
                            </span>
                          ) : (
                            <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700">
                              Waiting for AI
                            </span>
                          )}
                        </div>

                        {item.ai_score !== null && (
                          <p className="mt-3 text-sm font-semibold text-[#654b3b]">
                            AI Confidence Score: {item.ai_score}/100
                          </p>
                        )}

                        {item.ai_reason && (
                          <p className="mt-2 text-sm leading-6 text-[#654b3b]">
                            {item.ai_reason}
                          </p>
                        )}
                      </div>

                      {/* Admin Actions */}
                      {item.status === "pending" && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            onClick={() =>
                              updateStatus(item.id, "approved")
                            }
                            className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                          >
                            ✓ Accept
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(item.id, "rejected")
                            }
                            className="rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
                          >
                            ✕ Decline
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}