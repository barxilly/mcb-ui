import React from "react";
import { useState } from "react";

interface TitleProps {
  level?: number;
  font?: string;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({
  level,
  font,
  children,
  left,
  center,
  right,
  style,
}: TitleProps) => {
  return (
    <div
      className={`mcb-title mcb-title-${level || 1}`}
      style={{
        ...style,
        fontFamily:
          level && level > 3
            ? font === "Minecraft Ten"
              ? "Minecraft Ten,sans-serif"
              : "Minecraft Seven,sans-serif"
            : "Minecraft Ten,sans-serif",
        textAlign: left ? "left" : center ? "center" : right ? "right" : "left",
      }}
    >
      {children}
    </div>
  );
};

export default Title;
