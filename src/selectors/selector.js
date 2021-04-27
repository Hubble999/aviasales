import { createSelector } from '@reduxjs/toolkit';
import sortedTickets from '../utils/sortedTickets.js';

const ticketsSelector = (state) => state.tickets.ticketsPack;
const typeSortSelector = (state) => state.tickets.sort;
const filtersSelector = (state) => state.tickets.filters;
const filtersIdSelector = (state) => state.tickets.filterIds;

const countTransfers = {
  withoutTransfers: 0,
  oneTransfer: 1,
  twoTransfers: 2,
  treeTransfers: 3,
};

export const filteredTicketsSelector = createSelector(
  [ticketsSelector, filtersSelector, filtersIdSelector],
  (tickets, filters, ids) => {
    const activeOptions = ids.filter((id) => filters[id]);
    if (activeOptions.includes('all')) {
      return tickets;
    }

    const countTrans = activeOptions.map((options) => countTransfers[options]);
    return tickets.filter(({ segments }) => {
      const [arrival, depture] = segments;
      const total = arrival.stops.length + depture.stops.length;
      return countTrans.includes(total);
    });
  },
);

export const sortTickets = createSelector(
  [typeSortSelector, ticketsSelector],
  (typeSort, tickets) => {
    return sortedTickets[typeSort](tickets).slice(0, 6);
  },
);

export default createSelector(
  [typeSortSelector, filteredTicketsSelector],
  (typeSort, filtersTickets) => {
    const slice = filtersTickets.slice(0, 6);
    const res = sortedTickets[typeSort](slice);
    return res;
  },
);
