"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

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
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-semibold text-brand-700">Spam Detector</span>
        <div className="flex items-center gap-4 text-sm">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-medium text-brand-600"
                  : "text-slate-600 hover:text-brand-600"
              }
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
