import React, { createContext, useContext, useState } from "react";

const MatchContext = createContext<{
  matchesUpdated: boolean;
  setMatchesUpdated: (updated: boolean) => void;
}>({
  matchesUpdated: true,
  setMatchesUpdated: () => {},
});

export const MatchProvider = ({ children }: { children: React.ReactNode }) => {
  const [matchesUpdated, setMatchesUpdated] = useState(true);

  return (
    <MatchContext.Provider value={{ matchesUpdated, setMatchesUpdated }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = () => useContext(MatchContext);

const PlayerContext = createContext<{
  playersUpdated: boolean;
  setPlayersUpdated: (updated: boolean) => void;
}>({
  playersUpdated: false,
  setPlayersUpdated: () => {},
});

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [playersUpdated, setPlayersUpdated] = useState(false);

  return (
    <PlayerContext.Provider value={{ playersUpdated, setPlayersUpdated }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
