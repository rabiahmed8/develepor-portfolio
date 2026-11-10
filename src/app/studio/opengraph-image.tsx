import { ImageResponse } from "next/og";

// The card business owners see when the /studio link is shared in an email, WhatsApp or LinkedIn message.
export const alt = "Rabi Ahmed. Websites, web apps and fixes for businesses. Free homepage mockup first.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const offers = ["New websites", "Redesigns", "Bug fixes", "Booking & payments", "Web apps", "AI assistants"];

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
          background: "#f6f4ef",
          color: "#16171d",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            Rabi Ahmed<span style={{ color: "#059669" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              background: "#ffffff",
              border: "2px solid rgba(0,0,0,0.1)",
              fontSize: 24,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 14, background: "#10b981" }} />
            Taking on new projects
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 82, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>
            <span>Websites that bring you&nbsp;</span>
            <span style={{ color: "#047857" }}>customers,</span>
            <span>&nbsp;not headaches.</span>
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 32, color: "rgba(0,0,0,0.62)" }}>
            You see a free homepage mockup before you spend anything.
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {offers.map((o) => (
            <div
              key={o}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                background: "#d1fae5",
                color: "#065f46",
                fontSize: 25,
              }}
            >
              {o}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
