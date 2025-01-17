import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center pt-28">
      <NavLink to="booking-tickets" aria-current="page">
        <button className="rounded-xl bg-blue-600 p-2 hover:bg-blue-800 text-white">
          Booking Tickets
        </button>
      </NavLink>
    </div>
  );
}
