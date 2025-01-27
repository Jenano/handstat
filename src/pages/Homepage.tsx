import { useState, useEffect } from "react";
import PlayedMatchesList from "../components/agregate/PlayedMatchesList";
import MyMatches from "../components/agregate/MyMatches";
import BTNSelect from "../components/primary/BTNSelect";
import DropdownPicker from "../components/primary/DrpPicker";
import DatePicker from "../components/primary/DatePicker";
import PageTitle from "../components/primary/PageTitle";
import TeamSelector from "../components/primary/TeamSelector";
import {
  DropdownPickerProps,
  PlayedMatchProps,
} from "../components/interfaces/interfaces";
import Header from "../components/primary/Header";
import PopUp from "../components/agregate/PopUp";
import MatchDetail from "../components/agregate/MatchDetail";

import { getMatchesFromLocalStorage } from "../components/db/localStorageaHandler";
import { useMatchContext } from "../components/db/hooks";
import { filterMatches } from "../components/controllers/filterCoontroller";

function Homepage({
  defaultValue,
  options,
  onSelect,
  signedUser,
}: DropdownPickerProps) {
  const fictitalTeamStats = {
    wins: 2,
    draws: 1,
    loses: 0,
    goalsFor: 8,
    goalsAgainst: 3,
  };

  const [matches, setMatches] = useState<PlayedMatchProps[]>([]);
  const { matchesUpdated, setMatchesUpdated } = useMatchContext();

  const [selectedOpponent, setSelectedOpponent] = useState("All Opponents");
  const handleOpponentChange = (value: string) => {
    setSelectedOpponent(value); // Update the selected opponent
  };

  const [pickedDate, setPickedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setPickedDate(date);
  };

  const pickerOptions = ["All Opponents"];

  const [openPopup, setOpenPopup] = useState(false);
  const [matchDetailData, setMatchDetailData] = useState<{
    playedMatchData: PlayedMatchProps;
  } | null>(null);

  const handleMatchClick = (idZapasu: string) => {
    const selectedMatch = matches.find((match) => match.idZapasu === idZapasu);

    if (selectedMatch) {
      console.log("Selected Match:", selectedMatch);

      setMatchDetailData({
        playedMatchData: selectedMatch,
      });
    }
    setOpenPopup(true);
  };

  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    console.log(
      activeButton +
        " " +
        selectedOpponent +
        " " +
        pickedDate +
        " " +
        defaultValue
    );

    setMatches(
      filterMatches(
        getMatchesFromLocalStorage("playedMatches"),
        selectedOpponent,
        pickedDate,
        activeButton
      )
    );
    console.log("tymy filtrů");
  }, [activeButton, selectedOpponent, pickedDate]);

  return (
    <>
      <Header value={signedUser || " "}></Header>
      <div className="max-w-3xl mx-5 pt-5 pb-24">
        <PopUp
          open={openPopup}
          children={
            matchDetailData && (
              <MatchDetail playedMatchData={matchDetailData.playedMatchData} />
            )
          }
          onClick={() => setOpenPopup(!openPopup)}
          heading="Match Details"
        ></PopUp>
        <TeamSelector
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
        ></TeamSelector>
        <PageTitle value="My Matches"></PageTitle>

        <div className="h-6 self-stretch flex justify-between items-center">
          <BTNSelect
            active={activeButton === "All"}
            onClick={(label) => setActiveButton(label)}
            label="All"
          />
          <BTNSelect
            active={activeButton === "Home"}
            onClick={(label) => setActiveButton(label)}
            label="Home"
          />
          <BTNSelect
            active={activeButton === "Away"}
            onClick={(label) => setActiveButton(label)}
            label="Away"
          />
        </div>

        <div className="px-4">
          <DatePicker onSelect={handleDateChange}></DatePicker>
          <DropdownPicker
            defaultValue="All Opponents"
            options={pickerOptions}
            onSelect={handleOpponentChange}
          />
        </div>

        <MyMatches {...fictitalTeamStats} />
        <PlayedMatchesList
          matches={matches.reverse()}
          onClick={(idZapasu: string) => handleMatchClick(idZapasu)}
        />
      </div>
    </>
  );
}

export default Homepage;
