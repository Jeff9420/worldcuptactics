"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="nav-logo">
        World<span>Cup</span>Tactics
      </Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link href="/matches" className={`nav-link ${pathname.startsWith("/matches") ? "active" : ""}`}>
          Matches
        </Link>
        <Link href="/world-cup-2026" className={`nav-link ${pathname.startsWith("/world-cup-2026") ? "active" : ""}`}>
          2026
        </Link>
        <Link href="/blog" className={`nav-link ${pathname.startsWith("/blog") ? "active" : ""}`}>
          Blog
        </Link>
        <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </Link>
        <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
