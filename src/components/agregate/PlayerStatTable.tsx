import PlayerStat from "../primary/PlayerStat";
import OneStat from "../primary/OneStatNormal";
import OneStatSlash from "../primary/OneStatSlash";
import OneStatDifr from "../primary/OneStatDifr";
import TableHead from "../primary/TableHead";
import { PlayerStatTableProps } from "../interfaces/interfaces";

function PlayerStatTable({
  playerData,
  goalkeeper,
  onClick,
}: PlayerStatTableProps) {
  return (
    <div className=" bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className=" min-w-full">
        {/* Table Header */}
        <thead>
          <tr>
            {/* Sticky */}
            <th className="sticky left-0 bg-white px-4 py-2 text-start font-medium w-36 text-cerna">
              Players
            </th>
            <TableHead value="#Number" />
            <TableHead value="Position" />
            <TableHead value="Matches Played" />
            <TableHead value={goalkeeper ? "Saves" : "Goals"} />
            <TableHead value={goalkeeper ? "Shots Faced" : "Shots"} />
            <TableHead value="Assists" />
            <TableHead value={goalkeeper ? "Save Accuracy" : "Shot Accuracy"} />
            <TableHead value="6m" />
            <TableHead value="7m" />
            <TableHead value="9m" />
            <TableHead value="Wing" />
            <TableHead value="Break" />
            <TableHead value="Offence +-" />
            <TableHead value="Defence +-" />
            <TableHead value='2"' />
            <TableHead value="YC🟨" />
            <TableHead value="RC🟥" />
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {playerData.map((player, index) => (
            <tr key={index}>
              {/* Sticky Name */}
              <td
                className="sticky left-0 bg-white px-4 py-2 flex items-center gap-3 cursor-pointer"
                onClick={() => onClick(player.idPlayer)}
              >
                <PlayerStat name={player.name} profileImg={player.profileImg} />
              </td>
              {/* Number */}
              <td className="px-4 py-2 text-center">
                <OneStat value={"#" + player.dresNumber} />
              </td>
              {/* Posistion */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.position} />
              </td>
              {/* Played matches */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.playedMatches.toString()} />
              </td>
              {/* Goals */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.goals.toString()} />
              </td>
              {/* Strely */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.shots.toString()} />
              </td>
              {/* Asistence */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.assists.toString()} />
              </td>
              {/* Accuracy */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.accuracy + "%"} />
              </td>
              {/* 6m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.sixMetersGoals}
                  shots={player.sixMetersShots}
                ></OneStatSlash>
              </td>
              {/* 7m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.sevenMetersGoals}
                  shots={player.sevenMetersShots}
                ></OneStatSlash>
              </td>
              {/* 9m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.nineMetersGoals}
                  shots={player.nineMetersShots}
                ></OneStatSlash>
              </td>
              {/* Wing */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.wingGoals}
                  shots={player.wingShots}
                ></OneStatSlash>
              </td>
              {/* Break */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.breakGoals}
                  shots={player.breakShots}
                ></OneStatSlash>
              </td>
              {/* Rating of */}
              <td className="px-4 py-2 text-center">
                <OneStatDifr rating={player.differenceOffence}></OneStatDifr>
              </td>
              {/* Rating def */}
              <td className="px-4 py-2 text-center">
                <OneStatDifr rating={player.differenceDefence}></OneStatDifr>
              </td>
              {/* Vylouceni */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.twoMinutes.toString()} />
              </td>
              {/* Zluta */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.yellowCards.toString()} />
              </td>
              {/* Cervena */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.redCards.toString()} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStatTable;
