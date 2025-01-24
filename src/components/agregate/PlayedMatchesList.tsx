import PlayedMatch from "../primary/PlayedMatch";
import { PlayedMatchesListProps } from "../interfaces/interfaces";

function PlayedMatchesList({ matches, onClick }: PlayedMatchesListProps) {
  return (
    <div className="flex flex-col gap-2">
      {matches.map((match, index) => (
        <div
          key={index}
          onClick={() => onClick(match.idZapasu)} // Pass the match ID to the handler
        >
          <PlayedMatch
            idZapasu={match.idZapasu}
            date={match.date}
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
  );
}

export default PlayedMatchesList;
