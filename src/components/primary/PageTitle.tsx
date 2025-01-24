import { HeaderProps } from "../interfaces/interfaces";

function PageTitle({ value }: HeaderProps) {
  return <div className="text-cerna text-xl font-medium my-5">{value}</div>;
}

export default PageTitle;
