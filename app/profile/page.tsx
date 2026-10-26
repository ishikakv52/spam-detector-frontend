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

const inputClass =
  "w-full rounded-md border border-[#1b2d57] bg-[#0a1630] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#1e90ff] focus:outline-none focus:ring-2 focus:ring-[#1e90ff]/30";

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
      <h1 className="mb-4 text-xl font-semibold text-white">Profile</h1>
      {error && <p className="text-sm text-red-300">{error}</p>}
      {!profile && !error && <p className="text-sm text-slate-400">Loading...</p>}

      {profile && (
        <form
          onSubmit={handleSave}
          className="max-w-md space-y-4 rounded-xl border border-[#12306e] bg-[#06112a]/90 p-5"
        >
          <div>
            <label className="mb-1 block text-sm text-slate-300">Username</label>
            <input
              disabled
              value={profile.username}
              className="w-full rounded-md border border-[#12306e] bg-[#06112a] px-3 py-2 text-sm text-slate-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm text-slate-300">
                First name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300">
                Last name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Joined {new Date(profile.date_joined).toLocaleDateString()}
          </p>
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-gradient-to-r from-[#0a84ff] to-[#0b5cff] px-4 py-2 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
          {saved && <p className="text-sm text-emerald-300">Profile updated.</p>}
        </form>
      )}
    </ProtectedRoute>
  );
}
