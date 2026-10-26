"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { api, MessageRecord } from "@/lib/api";

export default function HistoryPage() {
  const [messages, setMessages] = useState<MessageRecord[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/messages/")
      .then((res) => setMessages(res.data.results ?? res.data))
      .catch(() => setError("Could not load detection history."));
  }, []);

  return (
    <ProtectedRoute>
      <h1 className="mb-4 text-xl font-semibold text-white">Detection History</h1>
      {error && <p className="text-sm text-red-300">{error}</p>}
      {!messages && !error && <p className="text-sm text-slate-400">Loading...</p>}

      {messages && messages.length === 0 && (
        <p className="text-sm text-slate-400">
          No messages analyzed yet.{" "}
          <Link href="/analyzer" className="text-[#1e90ff] hover:underline">
            Analyze your first message
          </Link>
          .
        </p>
      )}

      {messages && messages.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-[#12306e] bg-[#06112a]/90">
          <table className="w-full text-left text-sm text-slate-200">
            <thead className="border-b border-[#12306e] bg-[#0a1630] text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Result</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#12306e]">
              {messages.map((m) => (
                <tr
                  key={m.id}
                  className="cursor-pointer hover:bg-[#0a1630]"
                  onClick={() => (window.location.href = `/history/${m.id}`)}
                >
                  <td className="max-w-xs truncate px-4 py-2">
                    {m.message_text}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        m.classification === "spam"
                          ? "bg-red-500/15 text-red-300 ring-1 ring-red-500/30"
                          : "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
                      }`}
                    >
                      {m.classification === "spam" ? "Spam" : "Not Spam"}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-slate-300">{m.category}</td>
                  <td className="px-4 py-2 text-slate-400">
                    {new Date(m.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ProtectedRoute>
  );
}
