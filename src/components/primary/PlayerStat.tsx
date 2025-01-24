import { PlayerProfileProps } from "../interfaces/interfaces";

function PlayerStat({ profileImg, name }: PlayerProfileProps) {
  return (
    <div className="h-10 py-2 flex items-center gap-3 max-w-36 overflow-hidden">
      {/* Player Profile Picture Container */}
      <div className="h-8 rounded-full border border-[#fbbc04] justify-start items-center inline-flex flex-shrink-0">
        <img
          className="w-[30px] h-[30px] rounded-full object-cover  p-px"
          src={profileImg}
          alt="Player Profile"
        />
      </div>
      {/* User Name */}
      <span className="truncate text-cerna text-base font-medium">{name}</span>
    </div>
  );
}

export default PlayerStat;
