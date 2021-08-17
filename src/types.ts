export type TimeSlot = "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT";

export type Movie = {
  name: string | null;
  ticketsAvailable: number;
};

export type Tickets = { [date in string]: { [slot in TimeSlot]: Movie } };
