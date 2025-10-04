import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Tính năng", href: "#features" },
    { label: "Thẻ bài", href: "#cards" },
    { label: "Tải xuống", href: "#download" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? "rgba(15, 12, 41, 0.95)" 
          : "rgba(15, 12, 41, 0.7)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        borderBottom: scrolled 
          ? "1px solid rgba(255, 255, 255, 0.1)" 
          : "1px solid transparent",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: scrolled 
          ? "0 4px 20px rgba(0, 0, 0, 0.3)" 
          : "none",
      }}
    >
      <nav style={{ padding: "16px 0" }}>
        <div className="container">
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between" 
          }}>
            {/* Logo */}
            <a 
              href="#" 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                textDecoration: "none",
                gap: "12px"
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                  transition: "transform 0.3s ease",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05) rotate(-5deg)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0deg)"}
              >
                <img
                  src="/kado.png"
                  alt="Kado Logo"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover" 
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "2px",
                }}
              >
                KĀDO
              </span>
            </a>

            {/* Desktop Menu */}
            <div 
              style={{ 
                display: "none",
                gap: "8px",
                alignItems: "center"
              }}
              className="d-none d-lg-flex"
            >
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    textDecoration: "none",
                    padding: "10px 20px",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="#download"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  marginLeft: "12px",
                  boxShadow: "0 4px 16px rgba(249, 115, 22, 0.4)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(249, 115, 22, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(249, 115, 22, 0.4)";
                }}
              >
                Tải ứng dụng
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "block",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                padding: "10px 12px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              className="d-lg-none"
            >
              <div style={{
                width: "24px",
                height: "2px",
                background: "white",
                marginBottom: "5px",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none"
              }}></div>
              <div style={{
                width: "24px",
                height: "2px",
                background: "white",
                marginBottom: "5px",
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "all 0.3s ease"
              }}></div>
              <div style={{
                width: "24px",
                height: "2px",
                background: "white",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none"
              }}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            style={{
              maxHeight: mobileMenuOpen ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              marginTop: mobileMenuOpen ? "20px" : "0"
            }}
            className="d-lg-none"
          >
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    color: "rgba(255, 255, 255, 0.9)",
                    textDecoration: "none",
                    padding: "14px 16px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    borderRadius: "10px",
                    marginBottom: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.paddingLeft = "24px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.paddingLeft = "16px";
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginTop: "12px",
                  boxShadow: "0 4px 16px rgba(249, 115, 22, 0.4)",
                }}
              >
                Tải ứng dụng
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}