import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "#040C06",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#2DFF7C", display: "flex" }} />

      {/* Site label */}
      <div style={{ position: "absolute", top: 28, left: 56, fontSize: 18, color: "#2DFF7C", letterSpacing: "0.14em", textTransform: "uppercase", display: "flex" }}>
        WORLDCUPTACTICS.COM
      </div>

      {/* Faint pitch lines */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.04 }}>
        <div style={{ width: 700, height: 460, border: "2px solid #2DFF7C", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 2, height: 460, background: "#2DFF7C", display: "flex" }} />
        </div>
      </div>

      {/* Main title */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <div style={{ fontSize: 96, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9, display: "flex" }}>
          WORLD
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, color: "#2DFF7C", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9, display: "flex" }}>
          CUP
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9, display: "flex" }}>
          TACTICS
        </div>
      </div>

      {/* Tagline */}
      <div style={{ marginTop: 36, fontSize: 22, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>
        AI Tactical Analysis · 30 Classic Matches · 2026 Coverage
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 56, marginTop: 40 }}>
        {[
          { val: "30", label: "Matches" },
          { val: "15", label: "Articles" },
          { val: "1954", label: "to 2022" },
        ].map(({ val, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 36, fontWeight: 900, color: "#2DFF7C", display: "flex" }}>{val}</div>
            <div style={{ fontSize: 14, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Bottom badge */}
      <div style={{ position: "absolute", bottom: 28, right: 56, fontSize: 15, color: "#2DFF7C", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>
        ⚡ AI Tactical Analysis
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
