import { ImageResponse } from "next/og";

// The card people see when the developer portfolio link is shared (LinkedIn, WhatsApp, Slack, job forms).
export const alt = "Rabi Ahmed, Full-Stack Engineer. Next.js, TypeScript and AI integrations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AI integrations"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0b1120 0%, #050811 100%)",
          color: "#e2e8f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#ff5f57" }} />
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#febc2e" }} />
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#28c840" }} />
          <div style={{ display: "flex", marginLeft: 16, fontSize: 24, color: "#64748b" }}>
            rabiahmed-portfolio.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, color: "#10b981" }}>{"> whoami"}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 96, fontWeight: 700, color: "#ffffff", letterSpacing: -3 }}>
            Rabi Ahmed
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 40, color: "#94a3b8" }}>
            Full-Stack Engineer · 3+ years · Open to remote roles
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {stack.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid rgba(16,185,129,0.45)",
                color: "#6ee7b7",
                fontSize: 26,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
