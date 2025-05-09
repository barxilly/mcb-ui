import React from "react";
import { useState } from "react";

interface ButtonGroupProps {
  children?: React.ReactNode;
  color?: string;
  textColor?: string;
  font?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}

const ButtonGroup = ({
  children,
  color,
  textColor,
  font,
  onClick,
  disabled,
  active,
}: ButtonGroupProps) => {
  return (
    <>
      <button
        className={"mcb-button" + (active ? " mcb-button-active" : "")}
        style={{
          backgroundColor:
            color === "secondary"
              ? "var(--mcb-secondary)"
              : "var(--mcb-primary)",
          borderBottomColor:
            color === "secondary"
              ? "var(--mcb-secondary-dark)"
              : "var(--mcb-primary-dark)",
          color:
            textColor === "secondary"
              ? "var(--mcb-secondary-text)"
              : "var(--mcb-primary-text)",
          fontFamily:
            font === "Minecraft Ten"
              ? "Minecraft Ten,sans-serif"
              : "Minecraft Seven,sans-serif",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <button
        className={"mcb-button" + (active ? " mcb-button-active" : "")}
        style={{
          backgroundColor:
            color === "secondary"
              ? "var(--mcb-secondary)"
              : "var(--mcb-primary)",
          borderBottomColor:
            color === "secondary"
              ? "var(--mcb-secondary-dark)"
              : "var(--mcb-primary-dark)",
          color:
            textColor === "secondary"
              ? "var(--mcb-secondary-text)"
              : "var(--mcb-primary-text)",
          fontFamily:
            font === "Minecraft Ten"
              ? "Minecraft Ten,sans-serif"
              : "Minecraft Seven,sans-serif",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <button
        className={"mcb-button" + (active ? " mcb-button-active" : "")}
        style={{
          backgroundColor:
            color === "secondary"
              ? "var(--mcb-secondary)"
              : "var(--mcb-primary)",
          borderBottomColor:
            color === "secondary"
              ? "var(--mcb-secondary-dark)"
              : "var(--mcb-primary-dark)",
          color:
            textColor === "secondary"
              ? "var(--mcb-secondary-text)"
              : "var(--mcb-primary-text)",
          fontFamily:
            font === "Minecraft Ten"
              ? "Minecraft Ten,sans-serif"
              : "Minecraft Seven,sans-serif",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonGroup;
