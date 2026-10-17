import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "IRNCyber blog — notes on cybersecurity and web development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#080b10", color: "#e9eef2", fontFamily: "Arial, sans-serif", backgroundImage: "linear-gradient(90deg, rgba(32,42,52,.42) 1px, transparent 1px), linear-gradient(rgba(32,42,52,.42) 1px, transparent 1px)", backgroundSize: "72px 72px" }}>
      <div style={{ color: "#19d3b5", fontSize: 24, letterSpacing: 4 }}>IRNCYBER · NOTES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 62, fontWeight: 700, letterSpacing: -2 }}>Cybersecurity &amp; web</div>
        <div style={{ color: "#9aa8b5", fontSize: 26 }}>Learning, building, and sharing along the way.</div>
      </div>
      <div style={{ color: "#71818c", fontSize: 20 }}>irncyber.github.io/blog</div>
    </div>,
    size,
  );
}
