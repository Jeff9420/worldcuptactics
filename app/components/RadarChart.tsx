"use client";

import { PlayerStats, STAT_LABELS } from "../lib/players";

interface RadarChartProps {
  stats: PlayerStats;
  color?: string;
  size?: number;
}

// Axis display order (clockwise from top)
const AXES: (keyof PlayerStats)[] = ["pace", "shooting", "dribbling", "defending", "clutch", "passing"];
const N = AXES.length;

// Fixed internal coordinate space: 260×260, center at (130,130)
const CX = 130;
const CY = 130;
const R = 80;   // chart polygon radius
const LR = 108; // label radius

function pt(angleDeg: number, r: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export default function RadarChart({ stats, color = "#2DFF7C", size = 200 }: RadarChartProps) {
  const step = 360 / N;
  const angles = AXES.map((_, i) => i * step);

  function hexPoints(r: number) {
    return angles.map((a) => pt(a, r)).map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  }

  const statPts = AXES.map((k, i) => pt(angles[i], (stats[k] / 99) * R));
  const polyPts = statPts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      style={{ display: "block" }}
    >
      {/* Background rings at 20/40/60/80/100% */}
      {[0.2, 0.4, 0.6, 0.8, 1].map((f) => (
        <polygon
          key={f}
          points={hexPoints(R * f)}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}

      {/* Axes */}
      {angles.map((a, i) => {
        const e = pt(a, R);
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={e.x.toFixed(1)}
            y2={e.y.toFixed(1)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        );
      })}

      {/* Stat fill polygon */}
      <polygon
        points={polyPts}
        fill={color + "20"}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Vertex dots */}
      {statPts.map((p, i) => (
        <circle key={i} cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="3" fill={color} />
      ))}

      {/* Labels */}
      {AXES.map((k, i) => {
        const lp = pt(angles[i], LR);
        const rad = (angles[i] - 90) * (Math.PI / 180);
        const cosA = Math.cos(rad);
        const sinA = Math.sin(rad);
        const anchor = Math.abs(cosA) < 0.15 ? "middle" : cosA > 0 ? "start" : "end";
        // Push text away from center along axis
        const y1 = sinA < -0.4 ? lp.y - 14 : sinA > 0.4 ? lp.y + 2 : lp.y - 6;
        const y2 = sinA < -0.4 ? lp.y - 1 : sinA > 0.4 ? lp.y + 16 : lp.y + 8;
        const val = stats[k];
        return (
          <g key={k}>
            <text
              x={lp.x.toFixed(1)}
              y={y1.toFixed(1)}
              textAnchor={anchor}
              fill="rgba(255,255,255,0.38)"
              fontSize="10"
              fontFamily="sans-serif"
            >
              {STAT_LABELS[k]}
            </text>
            <text
              x={lp.x.toFixed(1)}
              y={y2.toFixed(1)}
              textAnchor={anchor}
              fill={color}
              fontSize="13"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {val}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
