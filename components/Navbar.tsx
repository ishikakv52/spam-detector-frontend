"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ShieldMail } from "@/components/AuthArt";

const LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analyzer", label: "Analyzer" },
  { href: "/history", label: "History" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  if (!isAuthenticated) return null;

  return (
    <nav className="border-b border-[#12306e] bg-[#06112a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="flex items-center gap-2 font-bold text-white">
          <ShieldMail className="h-6 w-5" />
          <span>
            Spam<span className="text-[#1e90ff]">Detector</span>
          </span>
        </span>
        <div className="flex items-center gap-4 text-sm">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-semibold text-[#1e90ff]"
                  : "text-slate-400 hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className="rounded-md border border-[#1b2d57] bg-[#0a1630] px-3 py-1.5 text-slate-200 hover:bg-[#12306e]"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
