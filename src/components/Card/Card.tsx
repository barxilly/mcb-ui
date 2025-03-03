import React from "react";
import { useState } from "react";

interface CardProps {
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card = ({ w, h, p, m, children, style }: CardProps) => {
  return (
    <div className={`mcb-card`} style={style}>
      {children}
    </div>
  );
};

export default Card;
