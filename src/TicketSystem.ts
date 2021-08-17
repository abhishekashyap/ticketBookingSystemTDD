import { Tickets, TimeSlot } from "./types";

export const getMovieInfo = (
  state: Tickets,
  timeSlot: TimeSlot,
  date: string
) => state[date][timeSlot];

export const bookTicket = (
  state: Tickets,
  timeSlot: TimeSlot,
  date: string
) => {
  if (state[date][timeSlot].ticketsAvailable) {
    const updatedState: Tickets = {
      ...state,
      [date]: {
        ...state[date],
        [timeSlot]: {
          ...state[date][timeSlot],
          ticketsAvailable: state[date][timeSlot].ticketsAvailable - 1,
        }
      },
    };

    return updatedState;
  } else {
    return "No tickets available in this slot";
  }
};
