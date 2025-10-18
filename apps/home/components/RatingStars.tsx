"use client";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

type Props = {
  value?: number;
  count?: number;
  sizeClass?: string;
  colorClass?: string;
  showNumber?: boolean;
};

export default function RatingStars({
  value = 0,
  count,
  sizeClass = "size-4.5",
  colorClass = "text-[#FFC633]",
  showNumber = true,
}: Props) {
  const rating = Math.max(0, Math.min(5, Math.round(value * 2) / 2));

  const stars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    if (rating >= index) return "full";
    if (rating >= index - 0.5) return "half";
    return "empty";
  });

  return (
    <div
      className="flex items-center gap-1.5 lg:gap-2"
      aria-label={`Rating ${rating} out of 5`}
    >
      <div className={`flex items-center gap-1 ${colorClass}`}>
        {stars.map((t, i) =>
          t === "full" ? (
            <RiStarFill key={i} className={sizeClass} />
          ) : t === "half" ? (
            <RiStarHalfFill key={i} className={sizeClass} />
          ) : (
            <RiStarLine key={i} className={sizeClass} />
          )
        )}
      </div>

      {showNumber && (
        <div className="text-xs lg:text-sm text-black/60">
          {rating}/<span>5</span>
          {typeof count === "number" && <span> ({count})</span>}
        </div>
      )}
    </div>
  );
}
