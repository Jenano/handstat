import "./App.css";
import { useState, useEffect } from "react";
import Teampage from "./pages/Team";
import Homepage from "./pages/Homepage";
import NavBar from "./components/agregate/NavBar";
import Play from "./pages/Play";
import Management from "./pages/Management";
import { Route, Routes } from "react-router-dom";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "./components/db/localStorageaHandler";

import { MatchProvider, PlayerProvider } from "./components/db/hooks";

function App() {
  const loggedUser: string = "jan.novak@email.com";

  const teamStrorage = () =>
    String(getFromLocalStorage<string>("teamStrorage", " "));

  const [selectedTeam, setSelectedTeam] = useState(teamStrorage);
  const [teamOptions, setTeamOptions] = useState<string[]>([]);
  useEffect(() => {
    console.log(loggedUser);
    setTeamOptions(["Starší dorost", "Muži - A", "Muži - B", "St. žáci - B"]);
  }, [loggedUser]);

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  useEffect(() => {
    console.log("Selected Team:", selectedTeam);
    setToLocalStorage<string>("teamStrorage", selectedTeam);
  }, [selectedTeam]);

  return (
    <div className="font-roboto bg-bgCustom max-w-3xl mx-auto ">
      <MatchProvider>
        <PlayerProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  defaultValue={selectedTeam}
                  options={teamOptions}
                  onSelect={handleTeamChange}
                  signedUser={loggedUser}
                />
              }
            />

            <Route
              path="/team"
              element={
                <Teampage
                  defaultValue={selectedTeam}
                  options={teamOptions}
                  onSelect={handleTeamChange}
                  signedUser={loggedUser}
                />
              }
            />

            <Route path="/play" element={<Play />} />

            <Route path="/management" element={<Management />} />
          </Routes>
        </PlayerProvider>
      </MatchProvider>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
