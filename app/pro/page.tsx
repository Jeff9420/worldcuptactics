"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "../components/Nav";

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else if (res.status === 401) {
        // Not logged in
        router.push("/login?next=/pro");
      } else {
        alert("Error initiating checkout. Please try again.");
      }
    } catch (err) {
      alert("Error connecting to payment provider.");
    }
    setLoading(false);
  };

  return (
    <>
      <Nav />
      <div style={{ background: "var(--bg-main)", minHeight: "calc(100vh - 80px)", color: "var(--text-primary)" }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "6rem 2rem 4rem" }}>
          <div style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.25rem 1rem", borderRadius: "100px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>
            WorldCupTactics PRO
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Unlock the Full Archive
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "3rem" }}>
            Get unrestricted access to the deepest tactical analysis engine on the web. Relive every historic World Cup match with AI-driven insights, beautiful SVG pitch diagrams, and zero distractions.
          </p>
        </section>

        {/* Pricing Card */}
        <section style={{ display: "flex", justifyContent: "center", padding: "0 2rem 6rem" }}>
          <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "3rem", width: "100%", maxWidth: "480px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--accent-green)" }} />
            
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "0.5rem" }}>All-Access Pass</h2>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "2rem" }}>
              <span style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-0.05em" }}>$9.99</span>
              <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>/ month</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Ad-Free Experience",
                "Unlock 900+ Historical Matches",
                "Deep AI Tactical Commentary",
                "Export Tactical Reports to PDF",
                "Early access to 2026 World Cup features"
              ].map((feature, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-secondary)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleSubscribe} 
              disabled={loading}
              style={{
                width: "100%",
                padding: "1rem",
                background: "var(--accent-green)",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.8 : 1,
                transition: "transform 0.1s ease",
              }}
            >
              {loading ? "Processing..." : "Subscribe Now"}
            </button>
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "1rem" }}>
              Cancel anytime. Secure payment via Stripe.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
