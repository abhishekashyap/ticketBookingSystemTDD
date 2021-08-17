export type TimeSlot = 'MORNING' | 'AFTERNOON' | 'EVENING' | 'NIGHT';

export type BookedTickets = { [date in string]: { [slot in TimeSlot]: number } }