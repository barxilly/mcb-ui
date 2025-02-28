import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  color: string;
  textColor: string;
  font: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  color,
  textColor,
  font,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className="mcb-button"
      style={{
        backgroundColor:
          color === "secondary" ? "var(--mcb-secondary)" : "var(--mcb-primary)",
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
      {text}
    </button>
  );
};

export default Button;
