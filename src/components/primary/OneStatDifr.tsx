import { OneStatDifrProps } from "../interfaces/interfaces";

function OneStatDifr({ rating }: OneStatDifrProps) {
  // color based on the rating value
  const getColor = (): string => {
    if (rating < 0) return "#f62d2d";
    if (rating >= 0 && rating <= 5) return "var(--text2, #787878)";
    return "#1dbf73";
  };

  return (
    <div
      className="text-center flex items-center justify-center text-base"
      style={{ color: getColor() }}
    >
      {rating}
    </div>
  );
}

export default OneStatDifr;
