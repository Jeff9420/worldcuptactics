"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase-browser";
import { User } from "@supabase/supabase-js";

export default function Nav() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [isPro, setIsPro] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        // Fetch profile to see if pro
        const { data } = await supabase
          .from('profiles')
          .select('is_pro')
          .eq('id', session.user.id)
          .single();
        if (data?.is_pro) {
          setIsPro(true);
        }
      }
    };
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user);
        const { data } = await supabase.from('profiles').select('is_pro').eq('id', session.user.id).single();
        setIsPro(data?.is_pro || false);
      } else {
        setUser(null);
        setIsPro(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

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
      <div className="nav-right">
        {user ? (
          <>
            <div className="nav-link" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {user.email}
              {isPro && <span style={{ marginLeft: '8px', background: 'var(--gold)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>PRO</span>}
            </div>
            {!isPro && (
              <Link href="/pro" className="btn-primary" style={{ padding: '0.5rem 1rem', display: 'inline-flex', textDecoration: 'none' }}>
                Upgrade
              </Link>
            )}
            <button className="btn-ghost" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn-ghost" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Sign In
            </Link>
            <Link href="/pro" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Get Pro
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
