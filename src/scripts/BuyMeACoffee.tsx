"use client";

import React from "react";

export const BuyMeACoffee: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
      <a 
        href="https://www.buymeacoffee.com/partlows" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "12px 20px",
          backgroundColor: "#FFDD00",
          color: "#000000",
          textDecoration: "none",
          borderRadius: "8px",
          fontFamily: "Cookie, cursive",
          fontSize: "16px",
          fontWeight: "bold",
          border: "2px solid #000000",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ☕ Buy me a coffee
      </a>
    </div>
  );
};
