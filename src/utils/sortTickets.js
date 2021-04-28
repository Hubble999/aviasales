export default {
  cheap: (tickets) => tickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price),
  fast: (tickets) => tickets.sort((ticketA, ticketB) => ticketB.price - ticketA.price),
};
