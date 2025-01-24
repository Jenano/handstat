import pracovniLogo from "../../assets/elements/pracovniLogo.webp";
import arrowLeft from "../../assets/elements/arrow-left.svg";
import { DetailHeaderProps } from "../interfaces/interfaces";

function DetailHeader({ heading, onClick }: DetailHeaderProps) {
  return (
    <div className="max-w-3xl bg-white flex justify-between items-center p-4 rounded-t-xl">
      <div
        onClick={onClick}
        className="h-11 p-2.5 bg-bgCustom rounded-full flex justify-center items-center gap-2.5"
      >
        <img className="w-6 h-6" src={arrowLeft} alt="Back" />
      </div>

      {/* Text */}
      <div className="text-xl font-semibold text-cerna">{heading}</div>

      {/* Right Section */}
      <a href="https://github.com/Jenano/HandStats">
        <img
          className="w-11 h-11 rounded-full"
          src={pracovniLogo}
          alt="HandStats"
        />
      </a>
    </div>
  );
}

export default DetailHeader;
