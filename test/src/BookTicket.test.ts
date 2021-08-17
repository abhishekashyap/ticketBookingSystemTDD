import { bookTicket, getMovieInfo } from "../../src/TicketSystem";
import { Tickets } from "../../src/types";

const initialBookedTickets: Tickets = {
  "16-04-2020": {
    MORNING: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    AFTERNOON: {
      name: "Interstellar",
      ticketsAvailable: 4,
    },
    EVENING: {
      name: "Interstellar",
      ticketsAvailable: 0,
    },
    NIGHT: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
  },
  "17-04-2020": {
    MORNING: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    AFTERNOON: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    EVENING: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    NIGHT: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
  },
  "18-04-2020": {
    MORNING: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    AFTERNOON: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    EVENING: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
    NIGHT: {
      name: "Interstellar",
      ticketsAvailable: 100,
    },
  },
};

describe("Ticket System", () => {
  it("should allow single user should be able to book tickets and get the ticket number", () => {
    const bookTicketReturned = bookTicket(
      initialBookedTickets,
      "MORNING",
      "16-04-2020"
    );

    expect(bookTicketReturned).toEqual({
      ...initialBookedTickets,
      "16-04-2020": {
        ...initialBookedTickets["16-04-2020"],
        MORNING: {
            name: 'Interstellar',
            ticketsAvailable: 99,
        }
      },
    });
  });

  it("should allow third user to book tickets and get the ticket number", () => {
    const bookTicketReturned = bookTicket(
      initialBookedTickets,
      "AFTERNOON",
      "16-04-2020"
    );
    
    expect(bookTicketReturned).toEqual({
        ...initialBookedTickets,
        "16-04-2020": {
          ...initialBookedTickets["16-04-2020"],
          AFTERNOON: {
              name: 'Interstellar',
              ticketsAvailable: 3,
          }
        },
      });
  });

  it("Should show error if no tickets are available", () => {
    const bookTicketReturned = bookTicket(
      initialBookedTickets,
      "EVENING",
      "16-04-2020"
    );
    expect(bookTicketReturned).toEqual("No tickets available in this slot");
  });

  it("should verify the movie information received", () => {
    const ticketInfoReturned = getMovieInfo(
      initialBookedTickets,
      "NIGHT",
      "16-04-2020"
    );

    expect(ticketInfoReturned).toEqual({
        name: 'Interstellar',
        ticketsAvailable: 100
      });
  });
});
