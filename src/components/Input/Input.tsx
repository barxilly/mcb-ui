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
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const Input = ({
  color,
  textColor,
  font,
  onClick,
  disabled,
  active,
  placeholder,
  style,
  className,
  id,
  value,
  onChange,
  defaultValue,

}: InputProps) => {
  return (
    <input
      className={"mcb-input " + className}
      style={{
        ...style,
        backgroundColor: color === "primary" ? "#333333" : "#FFFFFF",
        color: textColor === "primary" ? "#FFF" : "#000",
        fontFamily: font,
        border: active ? "2px solid #00FF00" : "2px solid #000000",
      }}
      onClick={onClick}
      disabled={disabled}
      type="text"
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
