import React, { useEffect, useState } from "react";
import {
  getPlayersFromLocalStorage,
  deletePlayerFromLocalStorage,
  upsertPlayerInLocalStorage,
} from "../../components/db/localStorageaHandler";
import { PlayerData } from "../interfaces/interfaces";
import { usePlayerContext } from "../db/hooks";
import TextInput from "./TextInput";
import NumberInputRequired from "./NumberInputRequired";

function PlayersUpdate() {
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<PlayerData | null>(null);
  const { playersUpdated, setPlayersUpdated } = usePlayerContext();

  // Fetch players from localStorage on component mount
  useEffect(() => {
    const fetchedPlayers = getPlayersFromLocalStorage("players");
    setPlayers(fetchedPlayers);
  }, []);

  useEffect(() => {
    if (playersUpdated) {
      const fetchedPlayers = getPlayersFromLocalStorage("players");
      setPlayers(fetchedPlayers);
      setPlayersUpdated(false);
    }
  }, [playersUpdated]);

  // Handle delete player
  const handleDelete = (idPlayer: string) => {
    deletePlayerFromLocalStorage("players", idPlayer);
    setPlayersUpdated(true);
  };

  // Handle modify player
  const handleModify = (player: PlayerData) => {
    setIsEditing(true);
    setEditingPlayer(player);
  };

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingPlayer) return;

    upsertPlayerInLocalStorage("players", editingPlayer);
    setPlayersUpdated(true);

    setIsEditing(false);
    setEditingPlayer(null);
  };

  // Handle input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof PlayerData
  ) => {
    if (editingPlayer) {
      setEditingPlayer({
        ...editingPlayer,
        [field]:
          field === "dresNumber"
            ? parseInt(event.target.value, 10)
            : event.target.value,
      });
    }
  };

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Players</h1>
      {isEditing && editingPlayer ? (
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md p-4 rounded-lg border border-gray-200 space-y-4"
        >
          <h2 className="text-lg font-semibold">Edit Player</h2>
          <div>
            <TextInput
              label={"Player Name"}
              name={"name"}
              id={"name"}
              value={editingPlayer.name}
              onChange={(e) => handleInputChange(e, "name")}
            ></TextInput>
          </div>
          <div>
            <TextInput
              label={"Position"}
              id={"position"}
              name={"position"}
              value={editingPlayer.position}
              onChange={(e) => handleInputChange(e, "position")}
            ></TextInput>
          </div>
          <div>
            <NumberInputRequired
              label={"Jersey Number"}
              name={"jerseyNumber"}
              id={"jerseyNumber"}
              value={editingPlayer.dresNumber.toString()}
              onChange={(e) => handleInputChange(e, "dresNumber")}
            ></NumberInputRequired>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : players.length === 0 ? (
        <p className="text-center text-gray-500">No players available.</p>
      ) : (
        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.idPlayer}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <div>
                <p className="font-semibold text-lg">{player.name}</p>
                <p className="text-sm text-gray-500">{player.position}</p>
                <p className="text-sm text-gray-500">
                  Jersey: {player.dresNumber}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleModify(player)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Modify
                </button>
                <button
                  onClick={() => handleDelete(player.idPlayer)}
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayersUpdate;
