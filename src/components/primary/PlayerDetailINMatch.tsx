import { OneStatSlashProps } from "../interfaces/interfaces";

function PlayerDetailINMatch({ goals, shots }: OneStatSlashProps) {
  return (
    <div className="h-8 border-t border-[#787878]/20 justify-center items-center gap-4 inline-flex">
      {/* Goals */}
      <div className="grow shrink basis-0 text-right text-[#56ccf2] text-xs font-medium font-['Roboto']">
        Goals: {goals}
      </div>
      {/* Divider */}
      <div className="w-3 h-[0px] origin-top-left rotate-90 border border-[#ff4e4e]"></div>
      {/* Rating */}
      <div className="grow shrink basis-0 text-[#fbbc04] text-xs font-medium font-['Roboto']">
        Rating: +{shots}
      </div>
    </div>
  );
}

export default PlayerDetailINMatch;
