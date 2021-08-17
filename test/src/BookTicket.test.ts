import { totalTickets } from '../../src/constants';
import { bookTicket } from '../../src/TicketSystem'
import { BookedTickets } from '../../src/types';

const initialBookedTickets: BookedTickets = {
    '16-04-2020': {
        MORNING: 0,
        AFTERNOON: 2,
        EVENING: 100,
        NIGHT: 0,
    },
    '17-04-2020': {
        MORNING: 0,
        AFTERNOON: 2,
        EVENING: 100,
        NIGHT: 0,
    },
    '18-04-2020': {
        MORNING: 0,
        AFTERNOON: 2,
        EVENING: 100,
        NIGHT: 0,
    },
}

describe("Ticket System", () => {

    it("should allow single user should be able to book tickets and get the ticket number", () => {
        const bookTicketReturned = bookTicket(initialBookedTickets, 'MORNING', '16-04-2020');
        expect(bookTicketReturned).toEqual({
            ...initialBookedTickets,
            '16-04-2020': {
                ...initialBookedTickets['16-04-2020'],
                MORNING: 1,
            }
        });
    });

    it("should allow third user to book tickets and get the ticket number", () => {
        const bookTicketReturned3 = bookTicket(initialBookedTickets, 'AFTERNOON', '16-04-2020');
        expect(bookTicketReturned3).toEqual({
            ...initialBookedTickets,
            '16-04-2020': {
                ...initialBookedTickets['16-04-2020'],
                AFTERNOON: 3,
            }
        });
    });

    it("Should show error if no tickets are available", () => {        
        const bookTicketReturned = bookTicket(initialBookedTickets, 'EVENING', '16-04-2020');
        expect(bookTicketReturned).toEqual('No tickets available in this slot')
    });
})