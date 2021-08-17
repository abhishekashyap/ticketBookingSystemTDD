import { TOTAL_TICKETS } from "./constants";
import { Movie, Tickets, TimeSlot } from "./types";

export const getMovieInfo = (
  state: Tickets,
  timeSlot: TimeSlot,
  date: string
): Movie => state[date][timeSlot];

export const addMovieInfo = (
  state: Tickets,
  timeSlot: TimeSlot,
  date: string,
  movieName: string,
): Tickets => {
  const { ticketsAvailable } = state[date][timeSlot];

  if (ticketsAvailable < TOTAL_TICKETS) {
    throw new Error('Cannot add movie');
  }

  const updatedState = {
    ...state,
    [date]: {
      ...state[date],
      [timeSlot]: {
        ...state[date][timeSlot],
        name: movieName
      }
    }
  }
  
  return updatedState;
};

export const bookTicket = (
  state: Tickets,
  timeSlot: TimeSlot,
  date: string
): Tickets | string => {
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
