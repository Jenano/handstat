import plusIcon from "../../assets/elements/plus.svg";
import DropdownPicker from "./DrpPicker";
import { DropdownPickerProps } from "../interfaces/interfaces";

function TeamSelector({
  defaultValue,
  options,
  onSelect,
}: DropdownPickerProps) {
  return (
    <div className="h-12 pl-3 pr-2 py-2 rounded-lg border border-text2/20 flex justify-between items-center">
      {/* Team Dropdown */}
      <div className="flex justify-start items-center gap-1.5">
        <DropdownPicker
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
          color="text-cerna font-medium"
          margin="m-0"
        />
      </div>

      {/* Add Button */}
      <div className="w-8 h-8 p-2.5 bg-[#56ccf2] rounded-full flex justify-center items-center">
        <img src={plusIcon} alt="Add" className="w-5 h-5 object-contain" />
      </div>
    </div>
  );
}

export default TeamSelector;
