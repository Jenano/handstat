import welcomeBackImg from "../../assets/elements/welcomeBack.png";
import pracovniLogo from "../../assets/elements/pracovniLogo.webp";
import { HeaderProps } from "../interfaces/interfaces";

function Header({ value }: HeaderProps) {
  return (
    <div className="max-w-3xl bg-white flex justify-between items-center p-4 rounded-b-xl">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Profile Picture */}
        <div className="h-11 w-11 rounded-full border border-[#fbbc04] flex justify-center items-center flex-shrink-0">
          <img
            className="rounded-full p-px"
            src={welcomeBackImg}
            alt="Player Profile"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center items-start">
          <div className="text-text2 text-sm font-normal">Hi, {value}</div>
          <div className="text-cerna text-base font-medium">Welcome Back</div>
        </div>
      </div>

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

export default Header;
