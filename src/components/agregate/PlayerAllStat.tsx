import StatItem from "../primary/StatItem";
import { AllPlayersDataprops } from "../interfaces/interfaces";

function PlayerAllStat({
  sixMetersGoals,
  sixMetersShots,
  sevenMetersGoals,
  sevenMetersShots,
  nineMetersGoals,
  nineMetersShots,
  wingGoals,
  wingShots,
  breakGoals,
  breakShots,
  technicalfaluts,
  twoMinSusp,
  header,
  playerDetail,
  matches,
  differenceDefence,
  differenceOffence,
}: AllPlayersDataprops) {
  const goalsTotal: number =
    sixMetersGoals +
    sevenMetersGoals +
    nineMetersGoals +
    breakGoals +
    wingGoals;
  const shotsTotal: number =
    sixMetersShots +
    sevenMetersShots +
    nineMetersShots +
    wingShots +
    breakShots;

  function calculateAccuracy(goals: number, shots: number): string {
    if (shots === 0) {
      return "0%";
    }
    const accuracy = ((goals / shots) * 100).toFixed(1);
    return `${accuracy}%`;
  }

  return (
    <div className="p-4 my-3 max-w-3xl bg-white rounded-2xl flex flex-col justify-center items-start gap-2">
      {/* Header */}
      <div className="self-stretch flex justify-between items-center">
        <div className="text-cerna text-lg font-medium">{header}</div>
      </div>

      {/* Statistics */}
      <div className="self-stretch flex flex-col justify-start items-start">
        {/* Conditional StatItem for Matches */}
        {playerDetail && matches !== undefined && (
          <div className="self-stretch flex justify-start items-start gap-4">
            <StatItem
              label="Matches"
              value={matches}
              color="text-cerna"
              bold={true}
            />
          </div>
        )}

        {/* Row One */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="Golas/Shots"
            value={goalsTotal + "/" + shotsTotal}
            color="text-cerna"
            bold={true}
          />

          <StatItem
            label="Accuracy"
            value={calculateAccuracy(goalsTotal, shotsTotal)}
            color={
              parseFloat(calculateAccuracy(goalsTotal, shotsTotal)) > 85
                ? "text-[#1dbf73]"
                : parseFloat(calculateAccuracy(goalsTotal, shotsTotal)) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
            bold={true}
          />
        </div>

        {/* Row Two */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="6m"
            value={sixMetersGoals + "/" + sixMetersShots}
            color="text-cerna"
          />

          <StatItem
            label="6m"
            value={calculateAccuracy(sixMetersGoals, sixMetersShots)}
            color={
              parseFloat(calculateAccuracy(sixMetersGoals, sixMetersShots)) > 85
                ? "text-[#1dbf73]"
                : parseFloat(
                      calculateAccuracy(sixMetersGoals, sixMetersShots)
                    ) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
          />
        </div>

        {/* Row Three */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="7m"
            value={sevenMetersGoals + "/" + sevenMetersShots}
            color="text-cerna"
          />

          <StatItem
            label="7m"
            value={calculateAccuracy(sevenMetersGoals, sevenMetersShots)}
            color={
              parseFloat(
                calculateAccuracy(sevenMetersGoals, sevenMetersShots)
              ) > 85
                ? "text-[#1dbf73]"
                : parseFloat(
                      calculateAccuracy(sevenMetersGoals, sevenMetersShots)
                    ) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
          />
        </div>

        {/* Row Four */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="9m"
            value={nineMetersGoals + "/" + nineMetersShots}
            color="text-cerna"
          />

          <StatItem
            label="9m"
            value={calculateAccuracy(nineMetersGoals, nineMetersShots)}
            color={
              parseFloat(calculateAccuracy(nineMetersGoals, nineMetersShots)) >
              85
                ? "text-[#1dbf73]"
                : parseFloat(
                      calculateAccuracy(nineMetersGoals, nineMetersShots)
                    ) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
          />
        </div>

        {/* Row Five */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="Wing"
            value={wingGoals + "/" + wingShots}
            color="text-cerna"
          />

          <StatItem
            label="Wing"
            value={calculateAccuracy(wingGoals, wingShots)}
            color={
              parseFloat(calculateAccuracy(wingGoals, wingShots)) > 85
                ? "text-[#1dbf73]"
                : parseFloat(calculateAccuracy(wingGoals, wingShots)) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
          />
        </div>

        {/* Row Six */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label="Break"
            value={breakGoals + "/" + breakShots}
            color="text-cerna"
          />

          <StatItem
            label="Break"
            value={calculateAccuracy(breakGoals, breakShots)}
            color={
              parseFloat(calculateAccuracy(breakGoals, breakShots)) > 85
                ? "text-[#1dbf73]"
                : parseFloat(calculateAccuracy(breakGoals, breakShots)) >= 60
                  ? "text-cerna"
                  : "text-[#f62d2d]"
            }
          />
        </div>

        {/* Row Seven */}
        {/* Conditional StatItem for Matches */}
        {!playerDetail && technicalfaluts !== undefined && (
          <div className="self-stretch flex justify-start items-start gap-4">
            <StatItem
              label="Technical Faluts"
              value={technicalfaluts}
              color="text-[#f62d2d]"
              bold={true}
            />
          </div>
        )}

        {/* Conditional StatItem for Matches */}
        {playerDetail &&
          differenceOffence !== undefined &&
          differenceDefence !== undefined && (
            <div className="self-stretch flex justify-start items-start gap-4">
              <StatItem
                label="Offence +-"
                value={differenceOffence}
                color="text-cerna"
                bold={true}
              />
              <StatItem
                label="Defence +-"
                value={differenceDefence}
                color="text-cerna"
                bold={true}
              />
            </div>
          )}

        {/* Row Seven */}
        <div className="self-stretch flex justify-start items-start gap-4">
          <StatItem
            label='2" suspensions'
            value={twoMinSusp}
            color="text-[#1e90ff]"
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerAllStat;
