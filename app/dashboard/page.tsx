"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { api, DashboardStats } from "@/lib/api";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<DashboardStats>("/dashboard/")
      .then((res) => setStats(res.data))
      .catch(() => setError("Could not load dashboard stats."));
  }, []);

  return (
    <ProtectedRoute>
      <h1 className="mb-4 text-xl font-semibold">Dashboard</h1>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!stats && !error && <p className="text-sm text-slate-500">Loading...</p>}

      {stats && (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard label="Messages Analyzed" value={stats.total_messages} />
            <StatCard label="Spam Detected" value={stats.spam_count} />
            <StatCard label="Not Spam" value={stats.not_spam_count} />
            <StatCard label="Spam %" value={`${stats.spam_percentage}%`} />
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-700">
                Recent Detections
              </h2>
              <Link
                href="/history"
                className="text-sm text-brand-600 hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {stats.recent_messages.length === 0 && (
                <p className="p-4 text-sm text-slate-500">
                  No messages analyzed yet.{" "}
                  <Link href="/analyzer" className="text-brand-600 hover:underline">
                    Analyze your first message
                  </Link>
                  .
                </p>
              )}
              {stats.recent_messages.map((m) => (
                <Link
                  key={m.id}
                  href={`/history/${m.id}`}
                  className="flex items-center justify-between p-3 text-sm hover:bg-slate-50"
                >
                  <span className="truncate pr-4">{m.message_text}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      m.classification === "spam"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {m.classification === "spam" ? "Spam" : "Not Spam"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </ProtectedRoute>
  );
}
