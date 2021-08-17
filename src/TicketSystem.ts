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
  const { name, ticketsAvailable } = state[date][timeSlot];

  if (name || (ticketsAvailable >= 0)) {
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
