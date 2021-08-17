import { totalTickets } from "./constants";
import { BookedTickets, TimeSlot } from "./types";

export const bookTicket = (
  state: BookedTickets,
  timeSlot: TimeSlot,
  date: string
) => {
  if (state[date][timeSlot] < totalTickets) {
    const updatedState = {
      ...state,
      [date]: {
        ...state[date],
        [timeSlot]: state[date][timeSlot] + 1,
      },
    };

    return updatedState;
  } else {
    return "No tickets available in this slot";
  }
};
