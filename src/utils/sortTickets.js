export default {
  cheap: (tickets) => tickets.sort((ticketA, ticketB) => ticketA.price - ticketB.price),
  expensive: (tickets) => tickets.sort((ticketA, ticketB) => ticketB.price - ticketA.price),
};
