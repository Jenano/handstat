import { useEffect, useState } from "react";
import {
  getMatchesFromLocalStorage,
  deleteMatchFromLocalStorage,
  upsertMatchInLocalStorage,
} from "../../components/db/localStorageaHandler";
import { PlayedMatchProps } from "../interfaces/interfaces";

import { useMatchContext } from "../../components/db/hooks";
import PlayedMatch from "./PlayedMatch";
import NumberInput from "./NumberInput";

function MatchesUpdate() {
  const [matches, setMatches] = useState<PlayedMatchProps[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingMatch, setEditingMatch] = useState<PlayedMatchProps | null>(
    null
  );
  const { matchesUpdated, setMatchesUpdated } = useMatchContext();

  // Fetch matches from localStorage on component mount
  useEffect(() => {
    const fetchedMatches = getMatchesFromLocalStorage("playedMatches");
    setMatches(fetchedMatches);
  }, []);

  useEffect(() => {
    if (matchesUpdated) {
      const fetchedMatches = getMatchesFromLocalStorage("playedMatches");
      setMatches(fetchedMatches.reverse());
      console.log("do");
      setMatchesUpdated(false);
    }
  }, [matchesUpdated]);

  // Handle delete match
  const handleDelete = (idZapasu: string) => {
    deleteMatchFromLocalStorage("playedMatches", idZapasu);
    setMatchesUpdated(true);
  };

  // Handle modify match
  const handleModify = (match: PlayedMatchProps) => {
    setIsEditing(true);
    setEditingMatch(match);
  };

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingMatch) return;

    upsertMatchInLocalStorage("playedMatches", editingMatch);
    setMatchesUpdated(true);

    setIsEditing(false);
    setEditingMatch(null);
  };

  // Handle input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof PlayedMatchProps
  ) => {
    if (editingMatch) {
      setEditingMatch({
        ...editingMatch,
        [field]: event.target.value,
      });
    }
  };

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Matches</h1>
      {isEditing && editingMatch ? (
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md p-4 rounded-lg border border-gray-200 space-y-4"
        >
          <h2 className="text-lg font-semibold">Edit Match</h2>
          <div>
            <NumberInput
              label={"My Team Score"}
              name={"myTeamScore"}
              value={editingMatch.myTeamScore}
              onChange={(e) => handleInputChange(e, "myTeamScore")}
            ></NumberInput>
          </div>
          <div>
            <NumberInput
              label={"Opponent Score"}
              name={"awayteamScore"}
              value={editingMatch.awayteamScore}
              onChange={(e) => handleInputChange(e, "awayteamScore")}
            ></NumberInput>
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
      ) : matches.length === 0 ? (
        <p className="text-center text-gray-500">No matches available.</p>
      ) : (
        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.idZapasu}
              className="flex-col justify-between items-center bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <div className="pb-2 flex space-x-4">
                <button
                  onClick={() => handleModify(match)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Modify
                </button>
                <button
                  onClick={() => handleDelete(match.idZapasu)}
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
              <PlayedMatch
                date={match.date}
                idZapasu={match.idZapasu}
                myTeam={match.myTeam}
                awayTeam={match.awayTeam}
                myTeamScore={match.myTeamScore}
                awayteamScore={match.awayteamScore}
                myLogo={match.myLogo}
                awayLogo={match.awayLogo}
                homeMatch={match.homeMatch}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MatchesUpdate;
