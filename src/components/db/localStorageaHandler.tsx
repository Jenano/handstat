import { PlayedMatchProps, PlayerData } from "../interfaces/interfaces";

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  const storedData = localStorage.getItem(key);
  try {
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return defaultValue;
  }
}

export function setToLocalStorage<T>(key: string, value: T): void {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
}

// Save matches to localStorage
export function saveMatchesToLocalStorage(
  key: string,
  data: PlayedMatchProps[]
): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving matches to localStorage: ${error}`);
  }
}

// Retrieve matches from localStorage
export function getMatchesFromLocalStorage(key: string): PlayedMatchProps[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading matches from localStorage: ${error}`);
    return [];
  }
}

// Delete a specific match by ID
export function deleteMatchFromLocalStorage(
  key: string,
  idZapasu: string
): void {
  try {
    const matches = getMatchesFromLocalStorage(key);
    const updatedMatches = matches.filter(
      (match) => match.idZapasu !== idZapasu
    );
    saveMatchesToLocalStorage(key, updatedMatches);
  } catch (error) {
    console.error(`Error deleting match: ${error}`);
  }
}

// Add or update a match in localStorage
export function upsertMatchInLocalStorage(
  key: string,
  newMatch: PlayedMatchProps
): void {
  try {
    const matches = getMatchesFromLocalStorage(key);
    const existingIndex = matches.findIndex(
      (match) => match.idZapasu === newMatch.idZapasu
    );

    if (existingIndex >= 0) {
      // Update existing match
      matches[existingIndex] = newMatch;
    } else {
      // Add new match
      matches.push(newMatch);
    }

    saveMatchesToLocalStorage(key, matches);
  } catch (error) {
    console.error(`Error adding/updating match: ${error}`);
  }
}

// Save data to localStorage
export function savePlayersToLocalStorage(
  key: string,
  data: PlayerData[]
): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
}

// Retrieve data from localStorage
export function getPlayersFromLocalStorage(key: string): PlayerData[] {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return [];
  }
}

// Delete a specific player by ID
export function deletePlayerFromLocalStorage(
  key: string,
  idPlayer: string
): void {
  try {
    const players = getPlayersFromLocalStorage(key);
    const updatedPlayers = players.filter(
      (player) => player.idPlayer !== idPlayer
    );
    savePlayersToLocalStorage(key, updatedPlayers);
  } catch (error) {
    console.error(`Error deleting player: ${error}`);
  }
}

// Add or update a player in localStorage
export function upsertPlayerInLocalStorage(
  key: string,
  newPlayer: PlayerData
): void {
  try {
    const players = getPlayersFromLocalStorage(key);
    const existingIndex = players.findIndex(
      (player) => player.idPlayer === newPlayer.idPlayer
    );

    if (existingIndex >= 0) {
      // Update existing player
      players[existingIndex] = newPlayer;
    } else {
      // Add new player
      players.push(newPlayer);
    }

    savePlayersToLocalStorage(key, players);
  } catch (error) {
    console.error(`Error adding/updating player: ${error}`);
  }
}
