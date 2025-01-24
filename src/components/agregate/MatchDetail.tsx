import PlayedMatch from "../primary/PlayedMatch";

import { MatchDetailProps } from "../interfaces/interfaces";

function MatchDetail({ playedMatchData }: MatchDetailProps) {
  return (
    <div className="max-h-screen overflow-y-auto pb-40 scrollbar-none ">
      {/* PlayedMatch */}
      <PlayedMatch
        idZapasu={playedMatchData.idZapasu}
        date={playedMatchData.date}
        myTeam={playedMatchData.myTeam}
        awayTeam={playedMatchData.awayTeam}
        myTeamScore={playedMatchData.myTeamScore}
        awayteamScore={playedMatchData.awayteamScore}
        myLogo={playedMatchData.myLogo}
        awayLogo={playedMatchData.awayLogo}
        homeMatch={playedMatchData.homeMatch}
        shadow="border-t"
      />

      {/* Notes */}
      <div className=" min-h-20 p-2 mx-4 mt-4 bg-white rounded-xl flex flex-col justify-start items-start gap-1">
        {/* Notes Title */}
        <div className="self-stretch text-cerna text-md font-medium">
          Notes:
        </div>

        {/* Notes Content */}
        <div className="self-stretch text-[#787878] text-[15px] font-normal font-['Roboto']">
          {playedMatchData.notes
            ? playedMatchData.notes
            : "No specific notes to this match"}
        </div>
      </div>
    </div>
  );
}

export default MatchDetail;
