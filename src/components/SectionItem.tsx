import React, { CSSProperties } from "react";

interface Props {
  mainImg: string;
  title: string;
}

export default function SectionItem(props: Props) {
  return (
    <div style={imgStyle}>
      <img style={imageStyling} src={props.mainImg} />
      <h3 style={styleTitel}>{props.title}</h3>
    </div>
  );
}

const imgStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "1rem 2rem",
  alignItems: "center",
  position: "relative"
};

const styleTitel: CSSProperties = {
  position: "absolute",
  translate: "translate(-50%, -50%)",
  color: "white",
  fontSize: "3rem",
  justifyContent: "center",
  alignItems: "center",
  top: "10%"
};

const imageStyling: CSSProperties = {
  objectFit: "cover",
  height: "26.5vh",
  width: "100%"
};
