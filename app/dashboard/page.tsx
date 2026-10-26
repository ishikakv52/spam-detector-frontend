"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { api, DashboardStats } from "@/lib/api";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-[#12306e] bg-[#06112a]/90 p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
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
      <h1 className="mb-4 text-xl font-semibold text-white">Dashboard</h1>
      {error && <p className="text-sm text-red-300">{error}</p>}
      {!stats && !error && <p className="text-sm text-slate-400">Loading...</p>}

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
              <h2 className="text-sm font-semibold text-slate-300">
                Recent Detections
              </h2>
              <Link
                href="/history"
                className="text-sm text-[#1e90ff] hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="divide-y divide-[#12306e] rounded-xl border border-[#12306e] bg-[#06112a]/90">
              {stats.recent_messages.length === 0 && (
                <p className="p-4 text-sm text-slate-400">
                  No messages analyzed yet.{" "}
                  <Link href="/analyzer" className="text-[#1e90ff] hover:underline">
                    Analyze your first message
                  </Link>
                  .
                </p>
              )}
              {stats.recent_messages.map((m) => (
                <Link
                  key={m.id}
                  href={`/history/${m.id}`}
                  className="flex items-center justify-between p-3 text-sm text-slate-200 hover:bg-[#0a1630]"
                >
                  <span className="truncate pr-4">{m.message_text}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      m.classification === "spam"
                        ? "bg-red-500/15 text-red-300 ring-1 ring-red-500/30"
                        : "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
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
