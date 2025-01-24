import { BTNSelectProps } from "../interfaces/interfaces";

function BTNSelect({ active, onClick, label }: BTNSelectProps) {
  return (
    <button
      className={`grow shrink basis-0 text-center text-lg mt-3 ${
        active
          ? "text-active font-medium pb-1 border-b-2 border-active"
          : "text-text2 font-normal"
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default BTNSelect;
