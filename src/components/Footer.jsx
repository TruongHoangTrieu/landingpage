import React, { useState } from "react";
import {
  Mail,
  MessageCircle,
  FileText,
  Shield,
  Cookie,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const footerLinks = {
    product: [
      { label: "Tính năng", href: "#features" },
      { label: "Thẻ bài", href: "#cards" },
      { label: "Tải xuống", href: "#download" },
    ],
    support: [
      { label: "Trung tâm trợ giúp", href: "#", icon: HelpCircle },
      { label: "Liên hệ", href: "#contact", icon: Mail },
      { label: "Cộng đồng", href: "#community", icon: MessageCircle },
    ],
    legal: [
      { label: "Điều khoản", href: "#", icon: FileText },
      { label: "Bảo mật", href: "#", icon: Shield },
      { label: "Cookie", href: "#", icon: Cookie },
    ],
  };

  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0f0c29 0%, #1a1733 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <div className="row" style={{ padding: "60px 0 40px" }}>
          {/* Brand Column */}
          <div className="col-lg-4 mb-4">
            <div style={{ marginBottom: "20px" }}>
              <a
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/kado.png"
                    alt="KĀDO Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "2px",
                  }}
                >
                  KĀDO
                </span>
              </a>
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "1rem",
                lineHeight: "1.7",
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              Ứng dụng quản lý thẻ bài hàng đầu cho người sưu tập và người chơi
              chuyên nghiệp.
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {["facebook", "twitter", "instagram", "discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.6)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
                letterSpacing: "0.5px",
              }}
            >
              Sản phẩm
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.product.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href={link.href}
                    style={{
                      color:
                        hoveredLink === `product-${index}`
                          ? "white"
                          : "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={() => setHoveredLink(`product-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h5
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
                letterSpacing: "0.5px",
              }}
            >
              Hỗ trợ
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.support.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href={link.href}
                    style={{
                      color:
                        hoveredLink === `support-${index}`
                          ? "white"
                          : "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={() => setHoveredLink(`support-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h5
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "20px",
                letterSpacing: "0.5px",
              }}
            >
              Pháp lý
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.legal.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href={link.href}
                    style={{
                      color:
                        hoveredLink === `legal-${index}`
                          ? "white"
                          : "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={() => setHoveredLink(`legal-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "24px 0",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p
                style={{
                  margin: 0,
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "1rem",
                }}
              >
                © 2025 KĀDO. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p
                style={{
                  margin: 0,
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.85rem",
                }}
              >
                Made with{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "600",
                  }}
                >
                  ♥
                </span>{" "}
                in Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
