import { useState } from "react";
import down_arrow from "../../assets/elements/arrow-down.svg";
import { DropdownPickerProps } from "../interfaces/interfaces";

function DropdownPicker({
  defaultValue,
  options,
  onSelect,
  color = "text-pickOpn",
  margin = "mt-3",
}: DropdownPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDatePick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // Pass the selected value to homescreen
  };

  return (
    <div className={`grow text-start ${margin} text-base`}>
      <div
        className="h-5 justify-start items-center gap-0.5 inline-flex cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className={`overflow-hidden ${color}`}>{selected}</div>
        <div className="w-5 h-5 relative">
          <img
            src={down_arrow}
            alt="See more"
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute mt-1 bg-white shadow-lg rounded-lg z-10 overflow-hidden max-w-xs">
          {options.map((option, index) => (
            <div
              key={index}
              className="text-text2 text-[15px] font-normal font-['Roboto'] px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleDatePick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownPicker;
