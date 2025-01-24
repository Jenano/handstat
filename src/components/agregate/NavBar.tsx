import BarItem from "../primary/BarItem";
import management from "../../assets/elements/management.svg";
import matches from "../../assets/elements/matches.svg";
//import play from "../../assets/elements/play.svg";
import team from "../../assets/elements/team.svg";

function NavBar() {
  return (
    <div className="fixed bottom-0 z-1 font-['Roboto_Flex'] w-full max-w-3xl h-20 bg-white/75 shadow-[0px_-0.33px_0px_rgba(0,0,0,0.30)] flex items-center ">
      <ul className="w-full shrink flex justify-between items-center">
        {/* Matches */}
        <BarItem to="/" label="Matches" icon={matches} />
        {/* Team */}
        <BarItem to="/team" label="Team" icon={team} />
        {/* Play 
        <BarItem to="/play" label="Play" icon={play} />
        */}
        {/* Management */}
        <BarItem to="/management" label="Management" icon={management} />
      </ul>
    </div>
  );
}

export default NavBar;
