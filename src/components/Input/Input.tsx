import React from "react";
import { useState } from "react";

interface InputProps {
  color?: string;
  textColor?: string;
  font?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  placeholder?: string;
}

const Input = ({
  color,
  textColor,
  font,
  onClick,
  disabled,
  active,
  placeholder,
}: InputProps) => {
  return (
    <input
      className="mcb-input"
      style={{
        backgroundColor: color === "primary" ? "#333333" : "#FFFFFF",
        color: textColor === "primary" ? "#FFF" : "#000",
        fontFamily: font,
        border: active ? "2px solid #00FF00" : "2px solid #000000",
      }}
      onClick={onClick}
      disabled={disabled}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
