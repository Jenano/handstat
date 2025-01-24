import React, { useState } from "react";
import {
  getFromLocalStorage,
  upsertMatchInLocalStorage,
} from "../../components/db/localStorageaHandler";
import { PlayedMatchProps } from "../interfaces/interfaces";
import myopponentLogo from "../../assets/docasnaLoga/opoopnetLogo.png";
import myteamLogo from "../../assets/docasnaLoga/myTeamLogo.png";
import { useMatchContext } from "../db/hooks";
import NumberInputRequired from "./NumberInputRequired";
import TextInput from "./TextInput";
function NewMatchForm() {
  const { setMatchesUpdated } = useMatchContext();

  const [formData, setFormData] = useState({
    opponent: "",
    scoredGoals: "",
    concededGoals: "",
    matchDate: new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const playedMatch: PlayedMatchProps = {
      date: formData.matchDate,
      idZapasu: Math.random().toString(36).substring(2, 10),
      myTeam: getFromLocalStorage<string>("teamStrorage", " "),
      awayTeam: formData.opponent,
      myTeamScore: parseInt(formData.scoredGoals, 10) || 0,
      awayteamScore: parseInt(formData.concededGoals, 10) || 0,
      myLogo: myteamLogo,
      awayLogo: myopponentLogo,
      homeMatch: Math.random() > 0.5,
      shadow: Math.random() > 0.5 ? "dark" : "light",
      notes: "Great match!",
      playerDetail: false,
      golas: Math.floor(Math.random() * 10),
      differenceStat: Math.floor(Math.random() * 20) - 10,
    };

    upsertMatchInLocalStorage("playedMatches", playedMatch);
    setMatchesUpdated(true);

    console.log("Match Data Submitted:", formData);

    // Clear form after submission
    setFormData({
      opponent: "",
      scoredGoals: "",
      concededGoals: "",
      matchDate: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="flex flex-col p-4 gap-4 bg-white text-black">
      <h2 className="text-lg font-semibold">Add New Match</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Opponent Name */}
        <div>
          <TextInput
            label={"Opponent Name"}
            id={"opponent"}
            name={"opponent"}
            value={formData.opponent}
            onChange={handleInputChange}
          ></TextInput>
        </div>

        {/* Scored Goals */}
        <div>
          <NumberInputRequired
            label={"Scored Goals"}
            id={"scoredGoals"}
            name="scoredGoals"
            value={formData.scoredGoals}
            onChange={handleInputChange}
          ></NumberInputRequired>
        </div>

        {/* Conceded Goals */}
        <div>
          <NumberInputRequired
            label={"Conceded Goals"}
            id={"concededGoals"}
            name="concededGoals"
            value={formData.concededGoals}
            onChange={handleInputChange}
          ></NumberInputRequired>
        </div>

        {/* Match Date */}
        <div>
          <label htmlFor="matchDate" className="block font-medium">
            Match Date
          </label>
          <input
            type="date"
            id="matchDate"
            name="matchDate"
            value={formData.matchDate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Match
        </button>
      </form>
    </div>
  );
}

export default NewMatchForm;
