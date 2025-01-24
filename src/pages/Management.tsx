import { useState } from "react";
import NewPlayerInput from "../components/agregate/NewPlayerInput";
import BTNSelect from "../components/primary/BTNSelect";
import NewMatchInput from "../components/agregate/NewMatchInput";

function Management() {
  const [activeButton, setActiveButton] = useState("Matches");
  const handleActiveButtonChange = (label: string) => {
    setActiveButton(label);
  };
  return (
    <div className="mx-5 pt-5 pb-24">
      <div className="h-6 self-stretch flex justify-between items-center">
        <BTNSelect
          active={activeButton === "Matches"}
          onClick={(label) => handleActiveButtonChange(label)}
          label="Matches"
        />
        <BTNSelect
          active={activeButton === "Players"}
          onClick={(label) => handleActiveButtonChange(label)}
          label="Players"
        />
      </div>
      <div className="mt-5">
        {activeButton === "Matches" && <NewMatchInput />}
        {activeButton === "Players" && <NewPlayerInput />}
      </div>
    </div>
  );
}

export default Management;
