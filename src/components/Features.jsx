import React, { useState } from "react";
import { Camera, TrendingUp, Users, Shield, Zap, Database } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Quét thẻ bài",
    description: "Sử dụng camera để quét và thêm thẻ bài vào bộ sưu tập chỉ trong vài giây",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
  },
  {
    icon: TrendingUp,
    title: "Theo dõi giá trị",
    description: "Cập nhật giá thị trường real-time để biết giá trị bộ sưu tập của bạn",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f5576c",
  },
  {
    icon: Users,
    title: "Cộng đồng",
    description: "Kết nối với người chơi khác, trao đổi thẻ bài và chia sẻ deck",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
  },
  {
    icon: Shield,
    title: "Bảo mật",
    description: "Dữ liệu được mã hóa và sao lưu tự động trên cloud",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    color: "#43e97b",
  },
  {
    icon: Zap,
    title: "Deck Builder",
    description: "Công cụ xây dựng deck mạnh mẽ với gợi ý thông minh",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    color: "#fa709a",
  },
  {
    icon: Database,
    title: "Database đầy đủ",
    description: "Hơn 35,000 thẻ bài với thông tin chi tiết và hình ảnh chất lượng cao",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    color: "#30cfd0",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="features"
      style={{
        position: "relative",
        padding: "100px 0",
        background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "15%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(245, 87, 108, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
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
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "1rem" }}>⚡</span>
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
              Tính năng
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: "800",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tính năng nổi bật
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Mọi thứ bạn cần để quản lý và phát triển bộ sưu tập thẻ bài của mình
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  style={{
                    height: "100%",
                    padding: "32px 28px",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: isHovered
                      ? `2px solid ${feature.color}40`
                      : "2px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "20px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 20px 40px ${feature.color}30`
                      : "0 8px 16px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isHovered ? feature.gradient : "rgba(255, 255, 255, 0.05)",
                      borderRadius: "16px",
                      marginBottom: "24px",
                      transition: "all 0.4s ease",
                      boxShadow: isHovered ? `0 8px 24px ${feature.color}40` : "none",
                    }}
                  >
                    <IconComponent
                      size={28}
                      style={{
                        color: isHovered ? "white" : feature.color,
                        transition: "color 0.4s ease",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h5
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: "700",
                      marginBottom: "12px",
                      color: "white",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feature.title}
                  </h5>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "rgba(255, 255, 255, 0.6)",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  {isHovered && (
                    <div
                      style={{
                        marginTop: "20px",
                        paddingTop: "16px",
                        borderTop: `1px solid ${feature.color}30`,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          background: feature.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        Tìm hiểu thêm
                        <span style={{ fontSize: "0.8rem" }}>→</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}