import { ImageResponse } from "next/og";
import { getMatch } from "../../lib/matches";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const match = getMatch(id);

  if (!match) {
    return new ImageResponse(
      <div style={{ width: 1200, height: 630, background: "#040C06", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 48 }}>
        WorldCupTactics
      </div>,
      { width: 1200, height: 630 }
    );
  }

  const score = `${match.home.score}  –  ${match.away.score}`;
  const statusLabel =
    match.status === "PSO"
      ? `Pens ${match.penaltyScore}`
      : match.status === "AET"
      ? "After Extra Time"
      : "Full Time";

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
      {/* Green border top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#2DFF7C", display: "flex" }} />

      {/* Site label */}
      <div style={{ position: "absolute", top: 28, left: 48, fontSize: 18, color: "#2DFF7C", letterSpacing: "0.14em", textTransform: "uppercase", display: "flex" }}>
        WORLDCUPTACTICS.COM
      </div>

      {/* Tournament + stage */}
      <div style={{ fontSize: 18, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32, display: "flex" }}>
        {match.tournament} · {match.stage}
      </div>

      {/* Teams + Score row */}
      <div style={{ display: "flex", alignItems: "center", gap: 40, marginBottom: 24 }}>
        {/* Home team */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, minWidth: 220 }}>
          <div style={{ fontSize: 88 }}>{match.home.flag}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", display: "flex" }}>
            {match.home.name}
          </div>
          <div style={{ fontSize: 16, color: "#555", letterSpacing: "0.06em", display: "flex" }}>{match.home.formation}</div>
        </div>

        {/* Score */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 80, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", display: "flex" }}>{score}</div>
          <div style={{ fontSize: 16, color: "#2DFF7C", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>{statusLabel}</div>
        </div>

        {/* Away team */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, minWidth: 220 }}>
          <div style={{ fontSize: 88 }}>{match.away.flag}</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", display: "flex" }}>
            {match.away.name}
          </div>
          <div style={{ fontSize: 16, color: "#555", letterSpacing: "0.06em", display: "flex" }}>{match.away.formation}</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 48, marginTop: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#2DFF7C", display: "flex" }}>{match.xG.home.toFixed(2)}</div>
          <div style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>xG Home</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F5C518", display: "flex" }}>{match.xG.away.toFixed(2)}</div>
          <div style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>xG Away</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", display: "flex" }}>{match.possession.home}%</div>
          <div style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>Possession</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", display: "flex" }}>{match.topPerformers[0].rating.toFixed(1)}</div>
          <div style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>Top Rating</div>
        </div>
      </div>

      {/* AI badge */}
      <div style={{ position: "absolute", bottom: 28, right: 48, fontSize: 15, color: "#2DFF7C", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex" }}>
        ⚡ AI Tactical Analysis
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
