import { HeaderProps } from "../interfaces/interfaces";

function TableHead({ value }: HeaderProps) {
  return (
    <th className="px-4 py-2 text-center font-medium text-[#404145]">
      {value}
    </th>
  );
}

export default TableHead;
