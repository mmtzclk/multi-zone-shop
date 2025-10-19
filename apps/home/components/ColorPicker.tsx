"use client";

import { useId, useMemo, useState } from "react";
import { RxCheck } from "react-icons/rx";

type Props = {
  colors: string[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  sizeClass?: string;
  buttonClass?: string;
  borderClass?: string;
  className?: string;
  id?: string;
};

export default function ColorPicker({
  colors,
  label = "Select Colors",
  value,
  defaultValue,
  onChange,
  sizeClass = "size-8 xl:size-9",
  buttonClass = "",
  borderClass = "border-paper",
  className = "",
  id,
}: Props) {
  const autoId = useId();
  const inputId = id ?? `colorpicker-${autoId}`;

  const isControlled = typeof value !== "undefined";
  const [inner, setInner] = useState<string | undefined>(defaultValue);

  const selected = isControlled ? value : inner;

  const select = (c: string) => {
    if (!isControlled) setInner(c);
    onChange?.(c);
  };

  const index = useMemo(
    () =>
      Math.max(
        0,
        colors.findIndex((c) => c === selected)
      ),
    [colors, selected]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const last = colors.length - 1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = colors[(index + 1) % colors.length];
      select(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = colors[(index - 1 + colors.length) % colors.length];
      select(prev);
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (selected) select(selected);
    }
  };

  return (
    <div className={`flex flex-col gap-3 xl:gap-4 ${className}`}>
      <label htmlFor={inputId} className="text-sm xl:text-base text-black/60">
        {label}
      </label>

      <div
        id={inputId}
        role="radiogroup"
        aria-label={label}
        className="flex items-center gap-3 xl:gap-4 flex-wrap"
        onKeyDown={onKeyDown}
      >
        {colors.map((c) => {
          const isSelected = c === selected;
          return (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => select(c)}
              title={c}
              style={{ backgroundColor: c }}
              className={[
                sizeClass,
                "flex items-center justify-center rounded-full border",
                borderClass || "border-black/10",
                buttonClass,
              ].join(" ")}
            >
              <RxCheck
                className={[
                  "size-4 xl:size-5 text-white mix-blend-difference",
                  isSelected ? "opacity-100" : "opacity-0",
                  "transition-opacity",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
