import React from "react";
import { useState } from "react";

interface CheckboxProps {
  label?: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input type="checkbox" className="mcb-checkbox-dummy" />
      <div
        className={checked ? "mcb-checkbox-checked" : "mcb-checkbox"}
        onClick={(event) => {
          const parent = (event.currentTarget as HTMLElement).parentElement
            ?.parentElement;
          const checkbox = parent?.querySelector(
            "input[type=checkbox]"
          ) as HTMLInputElement;
          checkbox.checked = !checkbox.checked;
          setChecked(checkbox.checked);
        }}
      >
        <p>{checked ? "✔" : ""}</p>
      </div>
      <label
        style={{
          fontFamily: "Minecraft Seven",
          fontSize: "1.5rem",
          marginLeft: "0.5rem",
          verticalAlign: "top",
        }}
        htmlFor="checkbox"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
