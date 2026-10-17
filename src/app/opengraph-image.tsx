import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Rohan Naagar — Cybersecurity student and web developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 68, background: "#080b10", color: "#e9eef2", fontFamily: "Arial, sans-serif", backgroundImage: "linear-gradient(90deg, rgba(32,42,52,.42) 1px, transparent 1px), linear-gradient(rgba(32,42,52,.42) 1px, transparent 1px)", backgroundSize: "72px 72px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#19d3b5", fontSize: 22, letterSpacing: 3 }}><span style={{ border: "1px solid #19d3b5", borderRadius: 8, padding: "10px 12px", fontSize: 17 }}>ir</span><span>IRNCYBER</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ color: "#19d3b5", fontSize: 18, letterSpacing: 3 }}>CYBERSECURITY · WEB</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 62, fontWeight: 700, letterSpacing: -3 }}><span>I build for the web.</span><span style={{ color: "#9aa8b5" }}>I learn how to defend it.</span></div>
        <div style={{ color: "#9aa8b5", fontSize: 25 }}>Rohan Naagar · Gurugram, India</div>
      </div>
      <div style={{ color: "#71818c", fontSize: 18 }}>irncyber.github.io</div>
    </div>,
    size,
  );
}
