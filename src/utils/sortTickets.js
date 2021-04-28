export default {
  'cheap': (tickets) => tickets.sort((a, b) => a.price - b.price),
  'fast': (tickets) => tickets.sort((a, b) => b.price - a.price),
};