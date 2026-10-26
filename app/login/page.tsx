"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

function ShieldMail({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 56" fill="none">
      <defs>
        <linearGradient id="sd-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38b6ff" />
          <stop offset="1" stopColor="#0a5cff" />
        </linearGradient>
      </defs>
      <path
        d="M24 3l19 6v17c0 13-8 22-19 27C13 48 5 39 5 26V9l19-6z"
        fill="url(#sd-logo)"
        stroke="#7cc8ff"
        strokeWidth="2"
      />
      <rect x="12" y="19" width="24" height="17" rx="3" fill="#06112a" />
      <path
        d="M12.5 21l11.5 9 11.5-9"
        stroke="#7cc8ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Illustration() {
  return (
    <svg
      viewBox="0 0 560 380"
      className="h-auto w-full max-w-[520px]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="sd-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="sd-ring" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#1e6bff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#1e6bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sd-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f86ff" />
          <stop offset="1" stopColor="#0b36a8" />
        </linearGradient>
      </defs>

      {/* glow rings */}
      <ellipse cx="280" cy="318" rx="215" ry="46" fill="url(#sd-ring)" />
      <ellipse
        cx="280"
        cy="318"
        rx="215"
        ry="46"
        stroke="#1e6bff"
        strokeOpacity="0.35"
      />
      <ellipse
        cx="280"
        cy="318"
        rx="150"
        ry="30"
        stroke="#3aa6ff"
        strokeWidth="3"
        filter="url(#sd-glow)"
      />

      {/* arrows */}
      <path
        d="M118 178 C 125 222, 150 244, 176 254"
        stroke="#ff3b4e"
        strokeWidth="3"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
      <polygon points="118,166 110,182 126,182" fill="#ff3b4e" />
      <path
        d="M396 254 C 440 240, 458 205, 462 160"
        stroke="#2ea0ff"
        strokeWidth="3"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
      <polygon points="462,148 454,164 470,164" fill="#2ea0ff" />

      {/* spam card */}
      <g className="sd-float">
        <g transform="rotate(-12 110 105)">
          <rect
            x="40"
            y="58"
            width="140"
            height="96"
            rx="12"
            fill="#2a0a14"
            stroke="#ff3b4e"
            strokeWidth="3"
            filter="url(#sd-glow)"
          />
          <path d="M72 112 L90 78 L108 112 Z" fill="#ff3b4e" />
          <rect x="88" y="90" width="4" height="12" rx="2" fill="#2a0a14" />
          <circle cx="90" cy="107" r="2.4" fill="#2a0a14" />
          <rect x="120" y="82" width="42" height="5" rx="2.5" fill="#ff6b78" />
          <rect x="120" y="96" width="30" height="5" rx="2.5" fill="#ff6b78" />
          <text
            x="62"
            y="140"
            fill="#ff3b4e"
            fontSize="17"
            fontWeight="800"
            letterSpacing="1"
          >
            SPAM
          </text>
        </g>
      </g>

      {/* verified mail card */}
      <g className="sd-float sd-float-b">
        <g transform="rotate(12 460 92)">
          <rect
            x="398"
            y="48"
            width="124"
            height="88"
            rx="14"
            fill="#0b3a9e"
            stroke="#2ea0ff"
            strokeWidth="3"
            filter="url(#sd-glow)"
          />
          <rect x="424" y="72" width="72" height="44" rx="6" fill="#bfe0ff" />
          <path
            d="M424 76 L460 100 L496 76"
            stroke="#2b78e4"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="506"
            cy="128"
            r="15"
            fill="#1d7bff"
            stroke="#04102b"
            strokeWidth="3"
          />
          <path
            d="M499 128 l5 5 l9 -10"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* main envelope */}
      <polygon
        points="160,200 280,105 400,200"
        fill="#1a5ef0"
        stroke="#4aa8ff"
        strokeWidth="2"
      />
      <rect x="205" y="140" width="150" height="116" rx="9" fill="#dbe8ff" />
      <rect x="225" y="162" width="110" height="7" rx="3.5" fill="#2b6fe0" />
      <rect x="225" y="182" width="110" height="7" rx="3.5" fill="#2b6fe0" />
      <rect x="225" y="202" width="64" height="7" rx="3.5" fill="#2b6fe0" />
      <path
        d="M160 200 L280 278 L400 200 L400 296 a14 14 0 0 1 -14 14 H174 a14 14 0 0 1 -14 -14 Z"
        fill="url(#sd-body)"
        stroke="#5db4ff"
        strokeWidth="2"
      />
      <path
        d="M280 214 L319 227 V258 C319 283 301 297 280 306 C259 297 241 283 241 258 V227 Z"
        fill="#0a2a82"
        stroke="#38b6ff"
        strokeWidth="4"
        filter="url(#sd-glow)"
      />
      <path
        d="M261 258 l14 14 l27 -29"
        stroke="#5fd0ff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(username, password);
    } catch (err: any) {
      setError(
        err?.response?.data?.detail || "Invalid username or password."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#1b2d57] bg-[#0a1630] py-3.5 pl-12 pr-4 text-[15px] text-slate-100 placeholder:text-slate-500 focus:border-[#1e90ff] focus:outline-none focus:ring-2 focus:ring-[#1e90ff]/30";

  return (
    <div
      className={`${jakarta.className} fixed inset-0 z-50 overflow-y-auto text-slate-200`}
      style={{
        background:
          "radial-gradient(900px 520px at 12% 8%, rgba(20,90,220,0.28), transparent 70%), radial-gradient(760px 520px at 95% 95%, rgba(10,60,170,0.32), transparent 70%), #030a1c",
      }}
    >
      <style>{`
        @keyframes sd-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .sd-float { animation: sd-float 6s ease-in-out infinite; }
        .sd-float-b { animation-delay: -3s; }
        @media (prefers-reduced-motion: reduce) {
          .sd-float { animation: none; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute right-10 top-10 hidden h-24 w-40 opacity-40 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
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
              Paste any SMS or message. Our AI tells you if it is spam, which
              phrases look suspicious, and what to do next.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Illustration />
          </div>

          <div className="mt-auto grid grid-cols-3 pt-6">
            {[
              {
                label: "AI-Powered\nDetection",
                path: "M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3zM8.5 12l2.5 2.5 4.5-5",
              },
              {
                label: "Spot Scam\nMessages",
                path: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
              },
              {
                label: "Secure\n& Private",
                path: "M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 017 0v3",
              },
            ].map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col items-center px-3 text-center ${
                  i > 0 ? "border-l border-[#12306e]" : ""
                }`}
              >
                <svg
                  className="h-8 w-8 text-[#1e90ff]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={f.path} />
                </svg>
                <p className="mt-2 whitespace-pre-line text-sm font-medium leading-snug text-slate-300">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Right: login card */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-[480px] rounded-2xl border border-[#12306e] bg-[#06112a]/90 p-8 shadow-[0_0_70px_rgba(10,100,255,0.14)] sm:p-10">
            <ShieldMail className="mb-5 h-14 w-12" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>
            <p className="mt-3 text-base leading-snug text-slate-400">
              Log in to your Spam Detector account to continue.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Username
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8.5" r="3.5" />
                    <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
                  </svg>
                  <input
                    id="username"
                    autoComplete="username"
                    placeholder="Enter your username"
                    className={inputClass}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Password
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </svg>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className={`${inputClass} pr-12`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {showPassword ? (
                        <path d="M3 3l18 18M10.6 6.2A9.6 9.6 0 0112 6c6 0 9.5 6 9.5 6a16 16 0 01-3.2 3.9M6.6 7.6C4 9.3 2.5 12 2.5 12s3.5 6 9.5 6c1.5 0 2.8-.4 4-.9M9.9 9.9a3 3 0 004.2 4.2" />
                      ) : (
                        <>
                          <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
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
                  "Logging in..."
                ) : (
                  <>
                    Log In
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
              No account yet?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#1e90ff] hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
