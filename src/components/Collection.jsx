import React from "react";

const cardTypes = [
  {
    name: "Yu-Gi-Oh!",
    description:
      "Quản lý bộ sưu tập thẻ bài Yu-Gi-Oh! với database đầy đủ và cập nhật liên tục.",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_15_638409453164226537_game-yugioh-tua-game-an-khach-duoc-lay-cam-hung-tu-bo-truyen-tranh-noi-tieng-cung-ten-1.jpg",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea",
    stats: { cards: "12,000+", decks: "500+" },
  },
  {
    name: "One Piece",
    description:
      "Theo dõi thẻ bài One Piece Card Game với giá trị thị trường real-time.",
    image:
      "https://cdn-media.sforum.vn/storage/app/media/ctv_seo8/nh%C3%A2n%20v%E1%BA%ADt%20ch%C3%ADnh%20c%E1%BB%A7a%20one%20piece/nhan-vat-chinh-cua-one-piece-1.jpg",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f5576c",
    stats: { cards: "8,000+", decks: "300+" },
  },
  {
    name: "Pokémon",
    description:
      "Bộ sưu tập Pokemon TCG hoàn chỉnh từ các set cổ điển đến hiện đại.",
    image:
      "https://deadline.com/wp-content/uploads/2024/09/Pokemon_f45a58.jpg?w=681&h=383&crop=1",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe",
    stats: { cards: "15,000+", decks: "800+" },
  },
];

export default function Collection() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <div style={{ 
      background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background particles */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(245, 87, 108, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)
        `,
        animation: "float 20s ease-in-out infinite"
      }}></div>

      <section id="cards" className="py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="container text-center" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          {/* Header with glow effect */}
          <div style={{ marginBottom: "70px" }}>
            <h2 
              className="fw-bold mb-4" 
              style={{ 
                fontSize: "3.5rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-1px",
                textShadow: "0 0 80px rgba(102, 126, 234, 0.5)"
              }}
            >
              Hỗ trợ 3 loại thẻ bài phổ biến
            </h2>
            <p
              className="mx-auto"
              style={{ 
                maxWidth: "700px",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "1.15rem",
                lineHeight: "1.8"
              }}
            >
              Quản lý toàn bộ bộ sưu tập của bạn ở một nơi với database được cập nhật thường xuyên
            </p>
          </div>

          <div className="row g-4" style={{ marginTop: "40px" }}>
            {cardTypes.map((type, index) => (
              <div key={type.name} className="col-md-4">
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "24px",
                    border: hoveredCard === index 
                      ? `2px solid ${type.color}40` 
                      : "2px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredCard === index ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                    boxShadow: hoveredCard === index 
                      ? `0 20px 60px ${type.color}40, 0 0 0 1px ${type.color}20` 
                      : "0 8px 32px rgba(0, 0, 0, 0.3)",
                    overflow: "hidden",
                    height: "100%",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image container */}
                  <div style={{ 
                    height: "280px", 
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "22px 22px 0 0"
                  }}>
                    <img
                      src={type.image}
                      alt={type.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: hoveredCard === index ? "scale(1.15)" : "scale(1)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(180deg, transparent 0%, ${type.color}40 100%)`,
                        opacity: hoveredCard === index ? 0.8 : 0.4,
                        transition: "opacity 0.4s ease"
                      }}
                    ></div>
                    
                    {/* Floating badge */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      color: type.color,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                    }}>
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "32px 28px" }}>
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        background: type.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "1.75rem",
                        letterSpacing: "-0.5px",
                        textAlign: "left"
                      }}
                    >
                      {type.name}
                    </h5>
                    <p style={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      marginBottom: "28px",
                      textAlign: "left"
                    }}>
                      {type.description}
                    </p>

                    {/* Stats */}
                    <div
                      style={{ 
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <div style={{ 
                          fontWeight: "700",
                          fontSize: "1.4rem",
                          background: type.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          {type.stats.cards}
                        </div>
                        <small style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}>
                          Thẻ bài
                        </small>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ 
                          fontWeight: "700",
                          fontSize: "1.4rem",
                          background: type.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          {type.stats.decks}
                        </div>
                        <small style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}>
                          Deck mẫu
                        </small>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "14px 24px",
                        background: hoveredCard === index ? type.gradient : "rgba(255, 255, 255, 0.1)",
                        border: "none",
                        borderRadius: "12px",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        transform: hoveredCard === index ? "scale(1.02)" : "scale(1)"
                      }}
                    >
                      Khám phá ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
}