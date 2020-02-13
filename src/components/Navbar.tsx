import React, { CSSProperties } from "react";

export default function Navbar() {
  return (
    <header style={header}>
      <h3 style={headerItem}>React Playground</h3>
    </header>
  );
}

const header: CSSProperties = {
  display: "flex",
  backgroundColor: "black",
  height: "4rem",
  color: "#E1E1E1",
  padding: "0 1em ",
  alignItems: "stretch"
};

const headerItem: CSSProperties = {
  fontSize: "1.7em",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  margin: "0 1rem",
  padding: 0
};
