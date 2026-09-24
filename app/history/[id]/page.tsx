"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import ResultCard from "@/components/ResultCard";
import { api, MessageRecord } from "@/lib/api";

export default function MessageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [record, setRecord] = useState<MessageRecord | null>(null);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    api
      .get<MessageRecord>(`/messages/${id}/`)
      .then((res) => {
        setRecord(res.data);
        setNotes(res.data.user_notes || "");
      })
      .catch(() => setError("Could not load this record."));
  }, [id]);

  async function handleSaveNotes() {
    setSaving(true);
    setSavedMsg("");
    try {
      await api.patch(`/messages/${id}/`, { user_notes: notes });
      setSavedMsg("Notes saved.");
    } catch {
      setError("Could not save notes.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this detection record?")) return;
    try {
      await api.delete(`/messages/${id}/`);
      router.push("/history");
    } catch {
      setError("Could not delete this record.");
    }
  }

  return (
    <ProtectedRoute>
      <h1 className="mb-4 text-xl font-semibold">Message Details</h1>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!record && !error && <p className="text-sm text-slate-500">Loading...</p>}

      {record && (
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs text-slate-500">Original message</p>
            <p className="mt-1 whitespace-pre-wrap text-sm">
              {record.message_text}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Analyzed on {new Date(record.created_at).toLocaleString()}
            </p>
          </div>

          <ResultCard record={record} />

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Your notes
            </label>
            <textarea
              className="h-24 w-full rounded-md border border-slate-300 p-2 text-sm focus:border-brand-500 focus:outline-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={handleSaveNotes}
                disabled={saving}
                className="rounded-md bg-brand-600 px-4 py-1.5 text-sm text-white hover:bg-brand-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Notes"}
              </button>
              {savedMsg && (
                <span className="text-sm text-green-600">{savedMsg}</span>
              )}
            </div>
          </div>

          <button
            onClick={handleDelete}
            className="rounded-md border border-red-200 px-4 py-1.5 text-sm text-red-600 hover:bg-red-50"
          >
            Delete Record
          </button>
        </div>
      )}
    </ProtectedRoute>
  );
}
