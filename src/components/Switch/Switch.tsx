import { useState } from "react";
import React from "react";

interface SwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  variant?: "default" | "outline";
  className?: string;
  id?: string;
}

export function Switch({
  defaultChecked = false,
  onChange,
  variant = "default",
  className,
  id,
}: SwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newState = !checked;
    setChecked(newState);
    onChange?.(newState);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleToggle}
      className={className}
      id={id}
      style={{
        backgroundColor: "#00000000",
        border: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to right, var(--mcb-primary) 50%, var(--mcb-secondary-mid) 50%)",
          borderRadius: "0",
          height: "1.5rem",
          width: "3.5rem",
          transition: "background-color 0.2s",
        }}
        className="mcb-switch"
      >
        <div style={{ color: "white", paddingLeft: "0.8em" }}>I</div>
        <div
          style={{
            fontFamily: "Minecraft Seven",
            fontSize: "2em",
            lineHeight: "0.7em",
            fontWeight: "3 !important",
            color: "#333",
          }}
        >
          &nbsp;o
        </div>
        <div
          style={{
            backgroundColor: "var(--mcb-secondary)",
            borderRadius: "0%",
            height: "1.5rem",
            width: "1.25rem",
            transform: checked ? "translateX(1.7rem)" : "translateX(-0.13rem)",
            transition: "transform 0.2s",
          }}
          className="mcb-switch-inner"
        >
          <div className="mcb-switch-inner2" />
        </div>
      </div>
    </button>
  );
}
