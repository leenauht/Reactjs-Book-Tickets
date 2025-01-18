import "./style.scss";
import { useState } from "react";
import { setSeatSelected } from "./slice";
import { useDispatch } from "react-redux";

export default function Seat({ seat, listSeatsSelected }) {
  // const [isChoosing, setIsChoosing] = useState(false);
  const isActive = listSeatsSelected.some((item) => item.soGhe === seat.soGhe);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        // setIsChoosing(!isChoosing);
        dispatch(setSeatSelected(seat));
      }}
      disabled={seat.daDat}
      className={`seat m-0.5 ${seat.daDat ? "seatSold" : ""} ${
        isActive ? "seatChoosing" : ""
      }
      }`}
    >
      {seat.soGhe}
    </button>
  );
}
