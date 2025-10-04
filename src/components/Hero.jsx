import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(245, 87, 108, 0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite reverse",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "30%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 12s ease-in-out infinite",
        }}
      ></div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6" style={{ marginBottom: "40px" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50px",
                marginBottom: "24px",
                animation: "fadeInUp 0.8s ease-out",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>✨</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Quản lý thẻ bài thông minh
              </span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.15",
                marginBottom: "24px",
                animation: "fadeInUp 0.8s ease-out 0.2s both",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Quản lý bộ sưu tập
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                }}
              >
                thẻ bài của bạn
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.8",
                marginBottom: "36px",
                maxWidth: "540px",
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              Ứng dụng quản lý thẻ bài toàn diện cho Yu-Gi-Oh!, One Piece và
              Pokémon. Theo dõi bộ sưu tập, xây dựng deck và kết nối với cộng
              đồng người chơi.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "48px",
                animation: "fadeInUp 0.8s ease-out 0.6s both",
              }}
            >
              <a
                href="#download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "14px",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(102, 126, 234, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.4)";
                }}
              >
                <span>⬇️</span>
                <span>Tải xuống miễn phí</span>
              </a>

              <a
                href="#demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "14px",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <span>▶️</span>
                <span>Xem demo</span>
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "32px",
                animation: "fadeInUp 0.8s ease-out 0.8s both",
              }}
            >
              {[
                { value: "50K+", label: "Người dùng" },
                { value: "1M+", label: "Thẻ bài" },
                { value: "4.8★", label: "Đánh giá" },
              ].map((stat, index) => (
                <div key={index}>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      marginBottom: "4px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <small style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9rem" }}>
                    {stat.label}
                  </small>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                animation: "fadeInRight 1s ease-out 0.4s both",
              }}
            >
              {/* Glow effect */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)",
                  borderRadius: "24px",
                  filter: "blur(60px)",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>

              {/* Main Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <img
                  src="https://cdn.dribbble.com/userupload/44244485/file/3a80b5ea248868184e19a0f88cef1a4a.png?resize=1504x1128&vertical=center"
                  alt="CardMaster App"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              {/* Floating cards decoration */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(245, 87, 108, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                🎴
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-10px",
                  width: "70px",
                  height: "70px",
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(79, 172, 254, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                }}
              >
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}