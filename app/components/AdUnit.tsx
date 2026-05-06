"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
  style?: React.CSSProperties;
}

export default function AdUnit({ slot, format = "auto", style }: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div style={{ textAlign: "center", overflow: "hidden", ...style }}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7585038406357402"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
