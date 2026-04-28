"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(45,255,124,0.06) 0%, rgba(45,255,124,0.02) 100%)",
        border: "1px solid rgba(45,255,124,0.2)",
        borderRadius: "12px",
        padding: "2.5rem 3rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--accent-green)",
          marginBottom: "0.75rem",
        }}
      >
        ⚡ World Cup 2026 · June 11 — July 19
      </div>
      <h2
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "2rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
          lineHeight: 1.1,
        }}
      >
        Get Live Analysis
        <br />
        <span style={{ color: "var(--accent-green)" }}>When It Starts</span>
      </h2>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        104 matches. 48 teams. Real-time AI tactical breakdowns for every game.
        <br />
        Be the first to know when 2026 coverage goes live.
      </p>

      {status === "success" ? (
        <div
          style={{
            background: "rgba(45,255,124,0.1)",
            border: "1px solid rgba(45,255,124,0.3)",
            borderRadius: "8px",
            padding: "1rem 1.5rem",
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--accent-green)",
          }}
        >
          ✓ You&apos;re on the list! We&apos;ll notify you when 2026 analysis goes live.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              background: "var(--bg-elevated)",
              border: `1px solid ${status === "error" ? "var(--accent-red)" : "var(--border-mid)"}`,
              borderRadius: "6px",
              padding: "0.6rem 1.25rem",
              color: "var(--text-primary)",
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.9rem",
              outline: "none",
              width: "260px",
              flexShrink: 0,
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary"
            style={{ padding: "0.6rem 1.5rem", opacity: status === "loading" ? 0.7 : 1 }}
          >
            {status === "loading" ? "Sending..." : "Notify Me"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.8rem",
            color: "var(--accent-red)",
          }}
        >
          {message}
        </p>
      )}

      <p
        style={{
          marginTop: "0.75rem",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
