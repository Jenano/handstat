import { useState, useEffect } from "react";
import PlayerStatTable from "../components/agregate/PlayerStatTable";
import DropdownPicker from "../components/primary/DrpPicker";
import BTNSelect from "../components/primary/BTNSelect";
import PageTitle from "../components/primary/PageTitle";
import PlayerAllStat from "../components/agregate/PlayerAllStat";
import TeamSelector from "../components/primary/TeamSelector";
import {
  DropdownPickerProps,
  AllPlayersDataprops,
  PlayerData,
} from "../components/interfaces/interfaces";
import Header from "../components/primary/Header";
import PopUp from "../components/agregate/PopUp";
import PlayerDetail from "../components/agregate/PlayerDetail";
import { getPlayersFromLocalStorage } from "../components/db/localStorageaHandler";
import { filterAndOrderPlayers } from "../components/controllers/filterCoontroller";

function Team({
  defaultValue,
  options,
  onSelect,
  signedUser,
}: DropdownPickerProps) {
  const fictitalallPlayersStats: AllPlayersDataprops = {
    sixMetersGoals: 15,
    sixMetersShots: 20,
    sevenMetersGoals: 10,
    sevenMetersShots: 12,
    nineMetersGoals: 8,
    nineMetersShots: 15,
    wingGoals: 5,
    wingShots: 7,
    breakGoals: 12,
    breakShots: 14,
    technicalfaluts: 3,
    twoMinSusp: 2,
    differenceOffence: 10,
    differenceDefence: -5,
  };

  const [selectedPostition, setSelectedPostition] = useState("All Positions");
  const handlePostionChange = (value: string) => {
    setSelectedPostition(value);
  };

  const [selectedOrder, setSelectedOrder] = useState("Goals");
  const handleOrderChange = (value: string) => {
    setSelectedOrder(value);
  };
  const [activeButton, setActiveButton] = useState("Players");
  const handleActiveButtonChange = (label: string) => {
    setActiveButton(label);
    setSelectedPostition(label === "Players" ? "All Positions" : "GK");
  };

  const [playerData, setPlayerData] = useState<PlayerData[]>([]);

  const [openPopup, setOpenPopup] = useState(false);

  const [playerDetailData, setPlayerDetailData] = useState<PlayerData>();

  const handleMatchClick = (idPlayer: string) => {
    const selectedPlayer = playerData.find(
      (player) => player.idPlayer === idPlayer
    );

    if (selectedPlayer) {
      console.log("Selected Match:", selectedPlayer);

      setPlayerDetailData(selectedPlayer);
    }
    setOpenPopup(true);
  };

  useEffect(() => {
    console.log(activeButton + " " + selectedPostition + " " + selectedOrder);

    setPlayerData(
      filterAndOrderPlayers(
        getPlayersFromLocalStorage("players"),
        activeButton,
        selectedPostition,
        selectedOrder
      )
    );
    console.log("hraciPodle filtrů");
  }, [activeButton, selectedOrder, selectedPostition, defaultValue]);

  //Toto už se nemění <- harddoded
  const positonOptions = ["All Positions", "LW", "RW", "LB", "RB", "CB", "LP"];

  const orderOptions =
    activeButton === "Players" ? ["Goals", "Shots"] : ["Saves", "Shots"];
  return (
    <>
      <Header value={signedUser || " "}></Header>
      <div className="mx-5 pt-5 pb-24">
        <PopUp
          open={openPopup}
          onClick={() => setOpenPopup(!openPopup)}
          heading="Player Details"
        >
          {playerDetailData && <PlayerDetail {...playerDetailData} />}
        </PopUp>
        <TeamSelector
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
        ></TeamSelector>
        <PageTitle value="My Players"></PageTitle>
        <PlayerAllStat
          {...fictitalallPlayersStats}
          header="Total Stats"
          playerDetail={false}
        />
        <div className="h-6 self-stretch flex justify-between items-center">
          <BTNSelect
            active={activeButton === "Players"}
            onClick={(label) => handleActiveButtonChange(label)}
            label="Players"
          />
          <BTNSelect
            active={activeButton === "Goalkeepers"}
            onClick={(label) => handleActiveButtonChange(label)}
            label="Goalkeepers"
          />
        </div>
        <div className="px-4 mb-3 pt-1">
          {activeButton === "Players" && (
            <DropdownPicker
              defaultValue={selectedPostition}
              options={positonOptions}
              onSelect={handlePostionChange}
              margin="mt-6"
            />
          )}

          <div className="flex items-center gap-2">
            {/* Filter By Text */}
            <div className="mt-3 font-medium">Order By:</div>

            {/* Dropdown Picker */}
            <DropdownPicker
              defaultValue="Golas"
              options={orderOptions}
              onSelect={handleOrderChange}
            />
          </div>
        </div>
        <PlayerStatTable
          playerData={playerData}
          goalkeeper={activeButton === "Goalkeepers"}
          onClick={(idHrace: string) => handleMatchClick(idHrace)}
        ></PlayerStatTable>
      </div>
    </>
  );
}

export default Team;
