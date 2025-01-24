import { useState } from "react";
import DatePickerLib from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerProps } from "../interfaces/interfaces";
import calendarIcon from "../../assets/elements/elements.svg";

function DatePicker({ onSelect }: DatePickerProps) {
  const [selected, setSelected] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelected(date);
      onSelect(date);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const today = new Date(); // today date

  return (
    <div className="grow text-starts mt-6 text-base">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img src={calendarIcon} alt="Calendar" className="w-5 h-5" />
        {/* Label and Selected Date */}
        <div className="flex items-center gap-2">
          <span className="text-text2">After:</span>
          <span className="text-pickOpn">
            {selected ? selected.toLocaleDateString("en-GB") : "Show All"}{" "}
            {/* Should never happend */}
          </span>
        </div>
      </div>

      {/* Calendar Picker */}
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-xl z-10 p-2">
          <DatePickerLib
            selected={selected}
            onChange={handleDateChange}
            maxDate={today}
            inline
          />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
