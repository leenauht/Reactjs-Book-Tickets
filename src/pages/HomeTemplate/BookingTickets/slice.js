import { createSlice } from "@reduxjs/toolkit";
import data from "./danhSachGhe.json";

const initialState = { listSeats: data, listSeatsSelected: [] };

const findIndexSeat = (data, numberSeat) => {
  return data.findIndex((seat) => seat.soGhe === numberSeat);
};

const bookingTicketsSlice = createSlice({
  name: "bookingTicketsSlice",
  initialState,
  reducers: {
    setSeatSelected: (state, action) => {
      const { payload } = action;
      const index = findIndexSeat(state.listSeatsSelected, payload.soGhe);
      const listSeatsSelectedClone = [...state.listSeatsSelected];
      if (index !== -1) {
        listSeatsSelectedClone.splice(index, 1);
      } else {
        listSeatsSelectedClone.push(payload);
      }
      state.listSeatsSelected = listSeatsSelectedClone;
    },
  },
});

export const { setSeatSelected } = bookingTicketsSlice.actions;

export default bookingTicketsSlice.reducer;
