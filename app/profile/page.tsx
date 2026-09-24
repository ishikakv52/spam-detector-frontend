"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { api } from "@/lib/api";

interface Profile {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get<Profile>("/auth/profile/")
      .then((res) => {
        setProfile(res.data);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
      })
      .catch(() => setError("Could not load profile."));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    setError("");
    try {
      await api.put("/auth/profile/", {
        first_name: firstName,
        last_name: lastName,
        email,
      });
      setSaved(true);
    } catch {
      setError("Could not update profile.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <ProtectedRoute>
      <h1 className="mb-4 text-xl font-semibold">Profile</h1>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {!profile && !error && <p className="text-sm text-slate-500">Loading...</p>}

      {profile && (
        <form
          onSubmit={handleSave}
          className="max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-5"
        >
          <div>
            <label className="mb-1 block text-sm text-slate-600">Username</label>
            <input
              disabled
              value={profile.username}
              className="w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm text-slate-600">
                First name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-600">
                Last name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Joined {new Date(profile.date_joined).toLocaleDateString()}
          </p>
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {saved && <p className="text-sm text-green-600">Profile updated.</p>}
        </form>
      )}
    </ProtectedRoute>
  );
}
