import Image from "next/image";
import { imageSelecter } from "../../../images";

export default function PositionChart({ value, classType }) {
  return (
    <div className="chart--container">
      <div className="chart--chartWrapper">
        <div className="chart--outer" />
        <div
          className={`chart--inner ${classType}`}
          style={{ height: `${value}%` }}
        />
      </div>
      <div className="chart--positionIcon">
        <Image
          src={imageSelecter(classType)}
          width="30px"
          height="30px"
          alt="position"
        />
      </div>
    </div>
  );
}
