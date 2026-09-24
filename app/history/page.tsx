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
      <h1 className="mb-4 text-xl font-semibold">Detection History</h1>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!messages && !error && <p className="text-sm text-slate-500">Loading...</p>}

      {messages && messages.length === 0 && (
        <p className="text-sm text-slate-500">
          No messages analyzed yet.{" "}
          <Link href="/analyzer" className="text-brand-600 hover:underline">
            Analyze your first message
          </Link>
          .
        </p>
      )}

      {messages && messages.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Result</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {messages.map((m) => (
                <tr
                  key={m.id}
                  className="cursor-pointer hover:bg-slate-50"
                  onClick={() => (window.location.href = `/history/${m.id}`)}
                >
                  <td className="max-w-xs truncate px-4 py-2">
                    {m.message_text}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        m.classification === "spam"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {m.classification === "spam" ? "Spam" : "Not Spam"}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-slate-600">{m.category}</td>
                  <td className="px-4 py-2 text-slate-500">
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
