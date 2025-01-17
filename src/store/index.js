import { configureStore } from "@reduxjs/toolkit";
import bookingTicketsReducer from "../pages/HomeTemplate/BookingTickets/slice.js";

export const store = configureStore({
  reducer: {
    // Add your child reducers here
    bookingTicketsReducer,
  },
});
