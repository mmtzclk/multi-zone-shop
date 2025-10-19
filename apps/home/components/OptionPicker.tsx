"use client";

import { useEffect, useId, useMemo, useState } from "react";

export type Option = {
  value: string;
  label?: string;
  disabled?: boolean;
};

type Props = {
  options: Option[] | string[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  buttonClass?: string;
};

function normalize(opts: Props["options"]): Option[] {
  return (opts as any[]).map((o) =>
    typeof o === "string" ? ({ value: o, label: o } as Option) : (o as Option)
  );
}

export default function OptionPicker({
  options,
  label = "Select an option",
  value,
  defaultValue,
  onChange,
  className = "",
  buttonClass = "",
}: Props) {
  const opts = useMemo(() => normalize(options), [options]);
  const autoId = useId();
  const groupId = `optionpicker-${autoId}`;

  const isControlled = typeof value !== "undefined";
  const [inner, setInner] = useState<string | undefined>(defaultValue);
  useEffect(() => {
    if (!isControlled && defaultValue && !inner) setInner(defaultValue);
  }, []);

  const selected = isControlled ? value : inner;
  const setSelected = (v: string) => {
    if (!isControlled) setInner(v);
    onChange?.(v);
  };

  const index = useMemo(
    () =>
      Math.max(
        0,
        opts.findIndex((o) => o.value === selected)
      ),
    [opts, selected]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!opts.length) return;
    const enabled = opts.filter((o) => !o.disabled);
    const curIdx = Math.max(
      0,
      enabled.findIndex((o) => o.value === selected)
    );
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setSelected(enabled[(curIdx + 1) % enabled.length].value);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setSelected(
        enabled[(curIdx - 1 + enabled.length) % enabled.length].value
      );
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (selected) setSelected(selected);
    }
  };

  return (
    <div className={`flex flex-col gap-3 xl:gap-4 ${className}`}>
      <label htmlFor={groupId} className="text-sm xl:text-base text-black/60">
        {label}
      </label>

      <div
        id={groupId}
        role="radiogroup"
        aria-label={label}
        className="flex items-center flex-wrap gap-2.5 xl:gap-3"
        onKeyDown={onKeyDown}
      >
        {opts.map((opt) => {
          const active = opt.value === selected;
          const disabled = !!opt.disabled;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              aria-disabled={disabled}
              disabled={disabled}
              onClick={() => !disabled && setSelected(opt.value)}
              className={[
                "h-10 xl:h-11 flex items-center px-4 xl:px-6 rounded-4xl text-sm xl:text-base transition-colors",
                disabled
                  ? "bg-muted text-black/30 !cursor-not-allowed"
                  : active
                  ? "bg-black text-white"
                  : "bg-muted text-black/60 hover:bg-black/5",
                buttonClass,
              ].join(" ")}
            >
              {opt.label ?? opt.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
