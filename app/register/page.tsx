"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import { ShieldMail, Illustration, Features } from "@/components/AuthArt";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function RegisterPage() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(username, email, password, passwordConfirm);
    } catch (err: any) {
      const data = err?.response?.data;
      const firstError = data && Object.values(data)[0];
      setError(
        Array.isArray(firstError) ? firstError[0] : "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#1b2d57] bg-[#0a1630] py-3.5 pl-12 pr-4 text-[15px] text-slate-100 placeholder:text-slate-500 focus:border-[#1e90ff] focus:outline-none focus:ring-2 focus:ring-[#1e90ff]/30";
  const labelClass = "mb-2 block text-sm font-semibold text-slate-200";

  return (
    <div
      className={`${jakarta.className} fixed inset-0 z-50 overflow-y-auto text-slate-200`}
      style={{
        background:
          "radial-gradient(900px 520px at 12% 8%, rgba(20,90,220,0.28), transparent 70%), radial-gradient(760px 520px at 95% 95%, rgba(10,60,170,0.32), transparent 70%), #030a1c",
      }}
    >
      <div
        className="pointer-events-none absolute right-10 top-10 hidden h-24 w-40 opacity-40 lg:block"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative mx-auto grid min-h-full max-w-7xl lg:grid-cols-2">
        {/* Left: brand + illustration */}
        <section className="hidden flex-col px-10 py-10 lg:flex xl:px-14">
          <div className="flex items-center gap-3">
            <ShieldMail className="h-10 w-9" />
            <span className="text-2xl font-bold text-white">
              Spam<span className="text-[#1e90ff]">Detector</span>
            </span>
          </div>

          <div className="mt-14">
            <h1 className="text-6xl font-extrabold leading-none tracking-tight text-white">
              Spam{" "}
              <span className="bg-gradient-to-r from-[#38b6ff] to-[#0a6cff] bg-clip-text text-transparent">
                Detector
              </span>
            </h1>
            <p className="mt-5 text-2xl font-medium text-[#8ea2cf]">
              Detect. Understand. Stay safe.
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
              Create a free account to check messages, see which phrases look
              suspicious, and keep a history of everything you analyzed.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Illustration />
          </div>

          <div className="mt-auto pt-6">
            <Features />
          </div>
        </section>

        {/* Right: register card */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-[480px] rounded-2xl border border-[#12306e] bg-[#06112a]/90 p-8 shadow-[0_0_70px_rgba(10,100,255,0.14)] sm:p-10">
            <ShieldMail className="mb-5 h-14 w-12" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Create Account
            </h2>
            <p className="mt-3 text-base leading-snug text-slate-400">
              Sign up to start analyzing messages.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>
                <div className="relative">
                  <FieldIcon>
                    <circle cx="12" cy="8.5" r="3.5" />
                    <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
                  </FieldIcon>
                  <input
                    id="username"
                    autoComplete="username"
                    placeholder="Choose a username"
                    className={inputClass}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <div className="relative">
                  <FieldIcon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3.5 7l8.5 6 8.5-6" />
                  </FieldIcon>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={inputClass}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <div className="relative">
                  <FieldIcon>
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </FieldIcon>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    className={`${inputClass} pr-16`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-[#1e90ff] hover:text-[#5fb4ff]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="passwordConfirm" className={labelClass}>
                  Confirm password
                </label>
                <div className="relative">
                  <FieldIcon>
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </FieldIcon>
                  <input
                    id="passwordConfirm"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    className={inputClass}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a84ff] to-[#0b5cff] py-3.5 text-base font-semibold text-white shadow-[0_0_28px_rgba(10,110,255,0.35)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#38b6ff] focus:ring-offset-2 focus:ring-offset-[#06112a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Creating account..."
                ) : (
                  <>
                    Register
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#1e90ff] hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
