"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import ResultCard from "@/components/ResultCard";
import { api, MessageRecord } from "@/lib/api";

export default function AnalyzerPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<MessageRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!text.trim()) {
      setError("Please enter a message to analyze.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post<MessageRecord>("/messages/analyze/", {
        message_text: text,
      });
      setResult(data);
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
          "Could not analyze the message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProtectedRoute>
      <h1 className="mb-4 text-xl font-semibold">Message Analyzer</h1>
      <form onSubmit={handleAnalyze} className="space-y-3">
        <textarea
          className="h-40 w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-brand-500 focus:outline-none"
          placeholder="Paste an SMS or message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
        >
          {loading ? "Analyzing..." : "Analyze Message"}
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-6">
          <ResultCard record={result} />
          <p className="mt-2 text-xs text-slate-500">
            Saved to your detection history.
          </p>
        </div>
      )}
    </ProtectedRoute>
  );
}
