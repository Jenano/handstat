import {
  PlayedMatchProps,
  PlayerData,
} from "../../components/interfaces/interfaces";

export function filterMatches(
  matches: PlayedMatchProps[],
  selectedOpponent: string,
  pickedDate: Date | null,
  activeButton: string
): PlayedMatchProps[] {
  console.log("probíhá");
  // Constant for filtering by opponent
  const filterByOpponent = matches.filter((match) => {
    if (selectedOpponent === "All Opponents") {
      return true;
    }
    return match.awayTeam === selectedOpponent;
  });

  // Constant for filtering by date
  const filterByDate = filterByOpponent.filter((match) => {
    if (pickedDate === null) {
      return true;
    }
    return new Date(match.date) >= pickedDate;
  });

  // Constant for filtering by home/away match
  const filterByHomeMatch = filterByDate.filter((match) => {
    if (activeButton === "Home") return match.homeMatch === true;
    if (activeButton === "Away") return match.homeMatch === false;
    return true; // Default: show all matches
  });

  // Combine all filters
  return filterByHomeMatch;
}

export function filterAndOrderPlayers(
  players: PlayerData[],
  activeButton: string,
  selectedPosition: string,
  selectedOrder: string
): PlayerData[] {
  // Step 1: Filter by activeButton
  const filteredByActiveButton = players.filter((player) => {
    if (activeButton === "Players") {
      return player.position !== "GK"; // Exclude goalkeepers
    } else if (activeButton === "Goalkeepers") {
      return player.position === "GK"; // Include only goalkeepers
    }
    return true; // Show all players for other values
  });

  // Step 2: Filter by selectedPosition
  const filteredByPosition = filteredByActiveButton.filter((player) => {
    if (selectedPosition === "All Positions") {
      return true; // Show all players
    }
    return player.position === selectedPosition; // Match the specific position
  });

  // Step 3: Order by selectedOrder
  const orderedPlayers = filteredByPosition.sort((a, b) => {
    const aValue = a[selectedOrder as keyof PlayerData];
    const bValue = b[selectedOrder as keyof PlayerData];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return bValue - aValue; // Descending order
    }

    // Fallback for non-numeric sorting
    if (typeof aValue === "string" && typeof bValue === "string") {
      return bValue.localeCompare(aValue); // Descending order for strings
    }

    return 0; // In case of type mismatch or undefined values
  });

  return orderedPlayers;
}
