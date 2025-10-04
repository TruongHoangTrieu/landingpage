import React, { useState } from "react";

export default function DownloadSection() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section
      id="download"
      style={{
        position: "relative",
        padding: "120px 0",
        background:
          "linear-gradient(180deg, #24243e 0%, #302b63 50%, #0f0c29 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            padding: "80px 40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50px",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "1rem" }}>🚀</span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Tải xuống ngay
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: "800",
                marginBottom: "20px",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2",
              }}
            >
              Sẵn sàng bắt đầu?
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "700px",
                margin: "0 auto 48px",
                lineHeight: "1.8",
              }}
            >
              Tải xuống <strong style={{ color: "white" }}>KĀDO</strong> ngay hôm nay và bắt đầu quản lý
              bộ sưu tập thẻ bài của bạn một cách chuyên nghiệp.
            </p>

            {/* Download Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background:
                    hoveredButton === "ios"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border:
                    hoveredButton === "ios"
                      ? "2px solid transparent"
                      : "2px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: "220px",
                  boxShadow:
                    hoveredButton === "ios"
                      ? "0 12px 32px rgba(102, 126, 234, 0.4)"
                      : "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform:
                    hoveredButton === "ios" ? "translateY(-2px)" : "translateY(0)",
                  textDecoration: "none",
                }}
                onMouseEnter={() => setHoveredButton("ios")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img
                  src="/App_Store.png"
                  alt="App Store"
                  width="28"
                  height="28"
                />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Tải trên</div>
                  <div>App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background:
                    hoveredButton === "android"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border:
                    hoveredButton === "android"
                      ? "2px solid transparent"
                      : "2px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: "220px",
                  boxShadow:
                    hoveredButton === "android"
                      ? "0 12px 32px rgba(102, 126, 234, 0.4)"
                      : "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform:
                    hoveredButton === "android" ? "translateY(-2px)" : "translateY(0)",
                  textDecoration: "none",
                }}
                onMouseEnter={() => setHoveredButton("android")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <img
                  src="/Google_Play.png"
                  alt="Google Play"
                  width="28"
                  height="28"
                />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Tải trên</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
