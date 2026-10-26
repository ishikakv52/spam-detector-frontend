export function ShieldMail({ className = "" }: { className?: string }) {
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

export function Illustration() {
  return (
    <>
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
    </>
  );
}

export function Features() {
  const items = [
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
  ];
  return (
    <div className="grid grid-cols-3">
      {items.map((f, i) => (
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
  );
}
