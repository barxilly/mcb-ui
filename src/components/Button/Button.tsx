import React, { useState, useEffect, useRef } from "react";
//const clickSound = require("../../assets/click.mp3");

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  textColor?: string;
  font?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  style?: React.CSSProperties;
}

const darkenColor = (color: string, amount: number): string => {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  r = r > 255 ? 255 : r < 0 ? 0 : r;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  b = b > 255 ? 255 : b < 0 ? 0 : b;

  return (
    (usePound ? "#" : "") +
    ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")
  );
};

const Button = ({
  children,
  color,
  textColor,
  font,
  onClick,
  disabled,
  active,
  style,
}: ButtonProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    //audioRef.current = new Audio(clickSound)    ;
  }, []);

  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const darkenedColor = color ? darkenColor(color, -50) : undefined;
  const lessDarkenedColor = color ? darkenColor(color, -25) : undefined;

  // Get button element
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      className={"mcb-button" + (active ? " mcb-button-active" : "")}
      style={{
        ...style,
        backgroundColor: isPressed
          ? color === "secondary"
            ? "var(--mcb-secondary-dark)"
            : color === "primary"
            ? "var(--mcb-primary-dark)"
            : darkenedColor
          : isHovered
          ? color === "secondary"
            ? "var(--mcb-secondary-mid)"
            : color === "primary"
            ? "var(--mcb-primary-mid)"
            : lessDarkenedColor
          : color === "secondary"
          ? "var(--mcb-secondary)"
          : color === "primary"
          ? "var(--mcb-primary)"
          : color,
        borderBottomColor:
          color === "secondary"
            ? "var(--mcb-secondary-dark)"
            : color === "primary"
            ? "var(--mcb-primary-dark)"
            : darkenedColor,
        color:
          textColor === "secondary"
            ? "var(--mcb-secondary-text)"
            : textColor === "primary"
            ? "var(--mcb-primary-text)"
            : textColor,
        fontFamily:
          font === "Minecraft Ten"
            ? "Minecraft Ten,sans-serif"
            : font === "Minecraft Seven"
            ? "Minecraft Seven,sans-serif"
            : font,
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
      onBlur={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      ref={buttonRef}
      disabled={disabled}
    >
      {children}
      <div
        className={isPressed ? "mcb-button-border-a" : "mcb-button-border"}
      ></div>
    </button>
  );
};

export default Button;
