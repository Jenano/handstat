import PlayerAllStat from "./PlayerAllStat";
import { PlayerData } from "../interfaces/interfaces";

function PlayerDetail({ ...playerData }: PlayerData) {
  return (
    <div className="max-h-screen overflow-y-auto pb-40 scrollbar-none px-2">
      {/* PlayerAllStat */}
      <PlayerAllStat
        sixMetersGoals={playerData.sixMetersGoals}
        sixMetersShots={playerData.sixMetersShots}
        sevenMetersGoals={playerData.sevenMetersGoals}
        sevenMetersShots={playerData.sevenMetersShots}
        nineMetersGoals={playerData.nineMetersGoals}
        nineMetersShots={playerData.nineMetersShots}
        wingGoals={playerData.wingGoals}
        wingShots={playerData.wingShots}
        breakGoals={playerData.breakGoals}
        breakShots={playerData.breakShots}
        differenceOffence={playerData.differenceOffence}
        differenceDefence={playerData.differenceDefence}
        matches={0}
        twoMinSusp={0}
        header="Season Stats"
        playerDetail={true}
      />
    </div>
  );
}

export default PlayerDetail;
