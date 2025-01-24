import DetailHeader from "../primary/DetailHeader";
import { PopUpProps } from "../interfaces/interfaces";

function PopUp({ open, heading, children, onClick }: PopUpProps) {
  if (!open) return null;

  return (
    <div className="fixed rounded-xl inset-0 flex justify-center z-10 max-w-3xl mx-auto">
      <div className=" bg-cerna/20 rounded-xl  p-8 shadow-lg w-full">
        {/* Header */}
        <DetailHeader heading={heading} onClick={onClick}></DetailHeader>
        {/* Children */}
        <div className="bg-bgCustom">{children}</div>
      </div>
    </div>
  );
}

export default PopUp;
