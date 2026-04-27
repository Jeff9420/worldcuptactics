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
        <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </Link>
      </div>
      <div className="nav-right">
        <div className="live-badge">
          <div className="live-dot" />
          4 Live Now
        </div>
        <button className="btn-ghost">Sign In</button>
        <button className="btn-primary">Get Pro</button>
      </div>
    </nav>
  );
}
