import { HeaderProps } from "../interfaces/interfaces";

function OneStat({ value }: HeaderProps) {
  return (
    <div className="text-center flex items-center justify-center text-text2 text-base">
      {value}
    </div>
  );
}

export default OneStat;
