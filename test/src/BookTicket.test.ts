import { addMovieInfo, bookTicket, getMovieInfo } from "../../src/TicketSystem";
import { Movie, Tickets } from "../../src/types";
import { initialBookedTickets } from "./mock";

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
          name: "Interstellar",
          ticketsAvailable: 99,
        },
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
          name: "Interstellar",
          ticketsAvailable: 3,
        },
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
      name: "Interstellar",
      ticketsAvailable: 100,
    });
  });

  it("should add the movie where name is null", () => {
    const ticketInfoReturned: Tickets = addMovieInfo(
      initialBookedTickets,
      "AFTERNOON",
      "18-04-2020",
      "Shawshank Redemption"
    );

    expect(ticketInfoReturned).toEqual({
      ...initialBookedTickets,
      "18-04-2020": {
        ...initialBookedTickets["18-04-2020"],
        AFTERNOON: {
          name: "Shawshank Redemption",
          ticketsAvailable: 100,
        },
      },
    });
  });

  it("should add the movie where name is not null", () => {
    const ticketInfoReturned: Tickets = addMovieInfo(
      initialBookedTickets,
      "AFTERNOON",
      "18-04-2020",
      "Shawshank Redemption"
    );

    expect(ticketInfoReturned).toEqual({
      ...initialBookedTickets,
      "18-04-2020": {
        ...initialBookedTickets["18-04-2020"],
        AFTERNOON: {
          name: "Shawshank Redemption",
          ticketsAvailable: 100,
        },
      },
    });
  });

  it("should throw error if adding new movie while seats are booked", () => {
    expect(() =>
      addMovieInfo(
        initialBookedTickets,
        "EVENING",
        "18-04-2020",
        "Shawshank Redemption"
      )
    ).toThrowError("Cannot add movie");
  });
});
