import StatItem from "../primary/StatItem";
import { MatchStatistics } from "../interfaces/interfaces";

function MyMatches({
  wins,
  draws,
  loses,
  goalsFor,
  goalsAgainst,
}: MatchStatistics) {
  return (
    <div className="p-4 my-3  bg-white rounded-2xl flex flex-col justify-center items-start gap-2">
      {/* Header */}
      <div className="self-stretch flex justify-between items-center">
        <div className="text-cerna text-lg font-medium">My Matches</div>
      </div>

      {/* Statistics */}
      <div className="self-stretch  flex flex-col justify-start items-start">
        {/* Row one */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="Match Played"
            value={wins + draws + loses}
            color="text-cerna"
          />
          <StatItem label="Goals For" value={goalsFor} color="text-[#1dbf73]" />
        </div>

        {/* Row druhy */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem label="Wins" value={wins} color="text-[#1dbf73]" />
          <StatItem
            label="Goals Against"
            value={goalsAgainst}
            color="text-[#f62d2d]"
          />
        </div>

        {/* Row treti */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem label="Draws" value={draws} color="text-[#fbbc04]" />
          <StatItem
            label="Goal Difference"
            value={goalsFor - goalsAgainst}
            color="text-[#fbbc04]"
          />
        </div>

        {/* Row 4 */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem label="Loses" value={loses} color="text-[#f62d2d]" />
          <div className="grow shrink basis-0 h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default MyMatches;
