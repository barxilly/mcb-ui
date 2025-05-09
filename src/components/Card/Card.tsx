import React from "react";
import { useState } from "react";

interface CardProps {
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Card = ({ w, h, p, m, children, style,onClick, className}: CardProps) => {
  return (
    <div className={"mcb-card "+className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
