import React, { useState } from "react";

const Circular = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const movementY = e.movementY;
      const nav = document.querySelector("nav");
      const navStyle = window.getComputedStyle(nav);
      const navTop = parseInt(navStyle.top);
      const navHeight = parseInt(navStyle.height);
      const windHeight = window.innerHeight;

      let newTop = navTop + movementY;
      if (navTop > 0) {
        newTop = Math.max(newTop, 1);
      } else {
        newTop = Math.min(newTop, windHeight - navHeight);
      }

      nav.style.top = newTop + "px";
    }
  };

  const navStyle = {
    position: "absolute",
    top: "20px",
    right: "0",
    width: "80px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
  };

  const navContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(-45deg)",
  };

  const toggleBtnStyle = {
    height: "60px",
    width: "60px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    fontSize: "35px",
    color: "#0e2431",
    zIndex: "100",
    cursor: "pointer",
    transform: "rotate(-225deg)",
    transition: "all 0.6s ease",
  };

  const navOpenToggleBtnStyle = {
    transform: "rotate(0deg)",
  };

  const spanStyle = {
    position: "absolute",
    transition: "all 0.6s ease",
    opacity: "0",
  };

  const openNavSpanStyle = {
    transform: "rotate(calc(var(--i) * (360deg/8))) translateY(120px)",
    opacity: "1",
  };

  const anchorStyle = {
    textDecoration: "none",
    transform: "rotate(45deg)",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "#0e2431",
    opacity: "0.8",
    transition: "0.2s",
  };

  const handleHoverIcon = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <nav
      style={navStyle}
      className={isNavOpen ? "open" : ""}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div style={navContentStyle} className="nav-content">
        <div
          style={{ ...toggleBtnStyle, ...(isNavOpen && navOpenToggleBtnStyle) }}
          className="toggle-btn"
          onClick={handleToggle}
        >
          <i className="bx bx-plus"></i>
        </div>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            style={{ ...spanStyle, ...(isNavOpen && openNavSpanStyle) }}
          >
            <a href="#" style={anchorStyle}>
              <i
                className={`bx bxs-${getIconName(index)}`}
                style={iconStyle}
                onMouseOver={handleHoverIcon}
              ></i>
            </a>
          </span>
        ))}
      </div>
    </nav>
  );
};

const getIconName = (index) => {
  switch (index) {
    case 1:
      return "home";
    case 2:
      return "camera";
    case 3:
      return "alarm";
    case 4:
      return "map";
    case 5:
      return "cog";
    default:
      return "";
  }
};

export default Circular;
