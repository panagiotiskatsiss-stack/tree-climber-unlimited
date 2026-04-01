import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Tree Climber Unlimited — Trusted Tree Care in San Andreas, CA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <img
          src={logoSrc}
          width="120"
          height="120"
          style={{ objectFit: "contain", borderRadius: "16px" }}
        />
        <div
          style={{
            marginTop: "30px",
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Tree Climber Unlimited
        </div>
        <div
          style={{
            marginTop: "16px",
            fontSize: "28px",
            color: "#228B22",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Trusted Tree Care in San Andreas, CA
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "22px",
            color: "#94a3b8",
            textAlign: "center",
          }}
        >
          Tree Removal &bull; Trimming &bull; Stump Grinding &bull; Emergency Services
        </div>
        <div
          style={{
            marginTop: "30px",
            fontSize: "26px",
            color: "white",
            fontWeight: 700,
            background: "#228B22",
            padding: "12px 32px",
            borderRadius: "8px",
          }}
        >
          (209) 660-3450
        </div>
      </div>
    ),
    { ...size }
  );
}
