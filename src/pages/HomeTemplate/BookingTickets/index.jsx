import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function BookingTickets() {
  const props = useSelector((state) => state.bookingTicketsReducer);
  const { listSeats, listSeatsSelected } = props;

  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="grid grid-cols-[repeat(13,1fr)] text-sm md:text-base">
        <span></span>
        {data.danhSachGhe.map((item) => (
          <span key={item.soGhe} className="font-bold">
            {item.soGhe}
          </span>
        ))}
      </div>
    );
  };

  const renderListSeats = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;
      return (
        <div
          key={row.hang}
          className="grid grid-cols-[repeat(13,1fr)] text-xs md:text-base"
        >
          <span className="m-1 font-bold">{row.hang}</span>
          {row.danhSachGhe.map((seat) => (
            <Seat key={seat.soGhe} seat={seat} />
          ))}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seat) => (total += seat.gia), 0);
  };

  return (
    <div className="text-center pt-28">
      <h1 className="uppercase text-white font-bold text-3xl">
        Movie Seat Selection
      </h1>
      <div className="w-[96%] mx-auto md:w-[90%] bg-bg-opacity-2 mt-10">
        <div className="p-1 pt-4 md:flex md:p-5 gap-5">
          <div className="w-full md:w-[70%]">
            <p className="text-white font-medium">Màn hình</p>
            <div className="h-5 w-full bg-orange-300 clip-path-custom"></div>

            <div className=" text-white space-y-5 mt-4">
              {renderRowIndex()}
              {renderListSeats()}
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-[30%]">
            <h2 className="text-white text-2xl font-bold pb-10">
              Danh sách ghế bạn chọn
            </h2>
            <div>
              {listSeatsSelected.map((seat) => (
                <div
                  key={seat.soGhe}
                  className="pr-4 text-white inline-flex justify-start"
                >
                  Ghế: {seat.soGhe} - Giá: {seat.gia}
                </div>
              ))}
            </div>
            <div className="pt-5 text-white font-medium">
              Total: {totalPrice()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
