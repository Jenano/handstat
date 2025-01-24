import React, { useState } from "react";
import { upsertPlayerInLocalStorage } from "../db/localStorageaHandler";
import { usePlayerContext } from "../db/hooks";
import myplayerLogo from "../../assets/docasnaLoga/p1.png";
import TextInput from "./TextInput";
import NumberInputRequired from "./NumberInputRequired";
import { PlayerData } from "../interfaces/interfaces";

function NewPlayerForm() {
  const { setPlayersUpdated } = usePlayerContext();

  const positions = ["GK", "LW", "RW", "PT", "LB", "CB", "RB"];

  const [formData, setFormData] = useState({
    name: "",
    position: positions[0],
    jerseyNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPlayer: PlayerData = {
      idPlayer: Math.random().toString(36).substring(2, 10), // Unique ID for the player
      name: formData.name,
      position: formData.position,
      dresNumber: parseInt(formData.jerseyNumber, 10),
      playedMatches: Math.floor(Math.random() * 100), // Random number of matches
      goals: Math.floor(Math.random() * 500), // Random number of goals
      shots: Math.floor(Math.random() * 1000), // Random number of shots
      assists: Math.floor(Math.random() * 300), // Random number of assists
      accuracy: Math.floor(Math.random() * 101), // Random accuracy percentage (0-100)
      profileImg: myplayerLogo,
      sixMetersGoals: Math.floor(Math.random() * 100), // Random 6m goals
      sixMetersShots: Math.floor(Math.random() * 150), // Random 6m shots
      sevenMetersGoals: Math.floor(Math.random() * 50), // Random 7m goals
      sevenMetersShots: Math.floor(Math.random() * 75), // Random 7m shots
      nineMetersGoals: Math.floor(Math.random() * 100), // Random 9m goals
      nineMetersShots: Math.floor(Math.random() * 150), // Random 9m shots
      wingGoals: Math.floor(Math.random() * 100), // Random wing goals
      wingShots: Math.floor(Math.random() * 150), // Random wing shots
      breakGoals: Math.floor(Math.random() * 50), // Random fast break goals
      breakShots: Math.floor(Math.random() * 75), // Random fast break shots
      differenceOffence: Math.floor(Math.random() * 20) - 10, // Random difference (-10 to 10)
      differenceDefence: Math.floor(Math.random() * 20) - 10, // Random difference (-10 to 10)
      yellowCards: Math.floor(Math.random() * 5), // Random yellow cards
      twoMinutes: Math.floor(Math.random() * 10), // Random 2-minute suspensions
      redCards: Math.floor(Math.random() * 3), // Random red cards
    };

    upsertPlayerInLocalStorage("players", newPlayer);
    setPlayersUpdated(true);

    console.log("Player Data Submitted:", formData);

    // Clear form after submission
    setFormData({
      name: "",
      position: "",
      jerseyNumber: "",
    });
  };

  return (
    <div className="flex flex-col p-4 gap-4 bg-white text-black">
      <h2 className="text-lg font-semibold">Add New Player</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Player Name */}
        <div>
          <TextInput
            label={"Player Name"}
            id={"name"}
            name={"name"}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position" className="block font-medium">
            Position
          </label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          >
            {positions.map((pos, index) => (
              <option key={index} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        {/* Jersey Number */}
        <div>
          <NumberInputRequired
            label={"Jersey Number"}
            id={"jerseyNumber"}
            name={"jerseyNumber"}
            value={formData.jerseyNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Player
        </button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
