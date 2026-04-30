import { ImageResponse } from "next/og";
import { getArticle } from "../../lib/articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return new ImageResponse(
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#040C06",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 48,
          fontFamily: "sans-serif",
        }}
      >
        WorldCupTactics
      </div>,
      { width: 1200, height: 630 }
    );
  }

  // Wrap title at ~45 chars per line
  const words = article.title.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length > 42) {
      lines.push(current.trim());
      current = w;
    } else {
      current = (current + " " + w).trim();
    }
  }
  if (current) lines.push(current.trim());
  const titleLines = lines.slice(0, 3);

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "#040C06",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            article.categoryColor === "#FF4444"
              ? "#FF4444"
              : article.categoryColor === "#F5C518"
              ? "#F5C518"
              : "#2DFF7C",
          display: "flex",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "36px 56px 0",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#2DFF7C",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          WORLDCUPTACTICS.COM
        </div>
        <div
          style={{
            padding: "6px 18px",
            background: article.categoryColor + "20",
            border: `1px solid ${article.categoryColor}60`,
            borderRadius: 4,
            fontSize: 15,
            color: article.categoryColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {article.category}
        </div>
      </div>

      {/* Title block */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 56px",
          flex: 1,
          justifyContent: "center",
          gap: 0,
        }}
      >
        {titleLines.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: titleLines.length === 1 ? 72 : titleLines.length === 2 ? 64 : 54,
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            {line}
          </div>
        ))}
        <div
          style={{
            fontSize: 20,
            color: "#555",
            marginTop: 20,
            display: "flex",
          }}
        >
          {article.readTime} min read · Tactical Analysis
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px 36px",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 16,
            color: "#333",
            display: "flex",
          }}
        >
          {article.excerpt.length > 90
            ? article.excerpt.slice(0, 88) + "…"
            : article.excerpt}
        </div>
      </div>

      {/* Bottom right badge */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 56,
          fontSize: 15,
          color: "#2DFF7C",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          display: "flex",
        }}
      >
        ⚡ AI Tactical Analysis
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
