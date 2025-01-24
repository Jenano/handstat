import calendarIcon from "../../assets/elements/elements.svg";
import { PlayedMatchProps } from "../interfaces/interfaces";
import PlayerDetailINMatch from "./PlayerDetailINMatch";

function PlayedMatch({
  date,
  myTeam,
  awayTeam,
  myTeamScore,
  awayteamScore,
  myLogo,
  homeMatch,
  shadow = "shadow-md border rounded-xl",
  playerDetail,
  golas,
  differenceStat,
  awayLogo,
}: PlayedMatchProps) {
  return (
    <div className={`flex flex-col p-4 gap-4  ${shadow} bg-white text-cerna`}>
      {/* Top Row */}
      <div className="flex justify-between items-center self-stretch">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <img
            src={calendarIcon}
            alt="date"
            className="w-4 h-4 object-contain"
          />
          <p className="text-center text-[10px] font-normal">{date}</p>
        </div>
        {/* Right Side */}
        <div>
          <p className="text-center text-[0.625rem] font-normal leading-normal">
            {homeMatch ? "At Home" : "Away Game"}
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      {homeMatch ? (
        <div className="flex justify-between items-center self-stretch">
          {/* Home Team */}
          <div className="flex flex-col w-[5.5rem] items-center gap-2">
            <img
              src={myLogo}
              alt={`${myTeam} Logo`}
              className="w-12 h-12 object-cover rounded-full"
            />
            <p className="text-center text-[0.9375rem] font-medium">{myTeam}</p>
          </div>

          {/* Score */}
          <div className="text-center text-2xl font-semibold">
            {myTeamScore} : {awayteamScore}
          </div>

          {/* Away Team */}
          <div className="flex flex-col w-[5.5rem] items-center gap-2">
            <img
              src={awayLogo}
              alt={`${awayTeam} Logo`}
              className="w-12 h-12 object-cover rounded-full"
            />
            <p className="text-center text-[0.9375rem] font-medium">
              {awayTeam}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center self-stretch">
          {/* Away Team */}
          <div className="flex flex-col w-[5.5rem] items-center gap-2">
            <img
              src={awayLogo}
              alt={`${awayTeam} Logo`}
              className="w-12 h-12 object-cover rounded-full"
            />
            <p className="text-center text-[0.9375rem] font-medium">
              {awayTeam}
            </p>
          </div>

          {/* Score */}
          <div className="text-center text-2xl font-semibold">
            {awayteamScore} : {myTeamScore}
          </div>

          {/* Home Team */}
          <div className="flex flex-col w-[5.5rem] items-center gap-2">
            <img
              src={myLogo}
              alt={`${myTeam} Logo`}
              className="w-12 h-12 object-cover rounded-full"
            />
            <p className="text-center text-[0.9375rem] font-medium">{myTeam}</p>
          </div>
        </div>
      )}
      {/* Player Detail Section */}
      {playerDetail && (
        <PlayerDetailINMatch goals={golas || 0} shots={differenceStat || 0} />
      )}
    </div>
  );
}

export default PlayedMatch;
