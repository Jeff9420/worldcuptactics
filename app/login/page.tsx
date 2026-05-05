"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import { createClient } from "../lib/supabase-browser";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the magic link!");
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    alert("1. Button clicked! Starting Google Login...");
    setLoading(true);
    try {
      alert("2. Connecting to Supabase: " + process.env.NEXT_PUBLIC_SUPABASE_URL);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        alert("3. Supabase Error: " + error.message);
        setMessage(`Error: ${error.message}`);
        setLoading(false);
      }
    } catch (err: any) {
      alert("3. System Crash: " + err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div style={{ minHeight: "calc(100vh - 80px)", background: "var(--bg-main)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ background: "var(--bg-surface)", padding: "3rem", borderRadius: "8px", border: "1px solid var(--border)", width: "100%", maxWidth: "400px" }}>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "0.5rem", textAlign: "center" }}>
            Welcome Back
          </h1>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "2rem" }}>
            Sign in to your WorldCupTactics account
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                background: "#fff",
                color: "#000",
                border: "none",
                padding: "0.75rem",
                borderRadius: "4px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>

            <div style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              <span style={{ padding: "0 1rem", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Or</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>

            {/* Email Magic Link Form */}
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  background: "var(--bg-main)",
                  border: "1px solid var(--border)",
                  padding: "0.75rem 1rem",
                  borderRadius: "4px",
                  color: "var(--text-primary)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  transition: "border-color 0.2s"
                }}
              >
                {loading ? "Sending..." : "Email Magic Link"}
              </button>
              {message && (
                <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.85rem", color: message.includes("Error") ? "#ff4a4a" : "var(--accent-green)" }}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
