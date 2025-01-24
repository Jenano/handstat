import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { BarItemProps } from "../interfaces/interfaces";

function BarItem({ to, label, icon }: BarItemProps) {
  const resolvedpPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedpPath.pathname, end: true });
  return (
    <li
      className={`grow flex flex-1 flex-col justify-center items-center gap-1`}
    >
      <Link
        to={to}
        className={`flex flex-col items-center ${
          isActive ? "text-active font-semibold" : "text-navGray"
        }`}
      >
        <img src={icon} alt={label} className="w-6 h-6" />
        <span className="text-center text-sm">{label}</span>
      </Link>
    </li>
  );
}

export default BarItem;
