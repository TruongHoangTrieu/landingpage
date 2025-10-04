import React, { useState } from "react";
import { Apple, Play } from "lucide-react";

export default function DownloadSection() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section
      id="download"
      style={{
        position: "relative",
        padding: "120px 0",
        background: "linear-gradient(180deg, #24243e 0%, #302b63 50%, #0f0c29 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            padding: "80px 40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Pattern overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              opacity: 0.5,
            }}
          ></div>

          {/* Floating gradient orbs */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "200px",
              height: "200px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.3,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "-50px",
              width: "200px",
              height: "200px",
              background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.3,
            }}
          ></div>

          <div style={{ position: "relative", textAlign: "center" }}>
            {/* Badge */}
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
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: "800",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2",
              }}
            >
              Sẵn sàng bắt đầu?
            </h2>

            {/* Description */}
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
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: hoveredButton === "ios" 
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                    : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: hoveredButton === "ios"
                    ? "2px solid transparent"
                    : "2px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: "220px",
                  boxShadow: hoveredButton === "ios"
                    ? "0 12px 32px rgba(102, 126, 234, 0.4)"
                    : "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform: hoveredButton === "ios" ? "translateY(-2px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredButton("ios")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Apple size={24} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Tải trên</div>
                  <div>App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: hoveredButton === "android" 
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                    : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: hoveredButton === "android"
                    ? "2px solid transparent"
                    : "2px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: "220px",
                  boxShadow: hoveredButton === "android"
                    ? "0 12px 32px rgba(102, 126, 234, 0.4)"
                    : "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transform: hoveredButton === "android" ? "translateY(-2px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredButton("android")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Play size={24} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Tải trên</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>

            {/* Benefits */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "32px",
                marginBottom: "24px",
              }}
            >
              {[
                { icon: "✨", text: "Miễn phí tải xuống" },
                { icon: "💳", text: "Không cần thẻ tín dụng" },
                { icon: "🔒", text: "An toàn & bảo mật" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  4.8★
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)" }}>
                  Đánh giá
                </div>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              ></div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  50K+
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)" }}>
                  Người dùng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}