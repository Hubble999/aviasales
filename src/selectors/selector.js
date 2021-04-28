import { createSelector } from '@reduxjs/toolkit';
import sortTickets from '../utils/sortTickets.js';
import numberOfTransfers from '../config/numberOfTransfers.js';

export const ticketsSelector = (state) => state.tickets.ticketsPack;
export const sortingTypeSelector = (state) => state.tickets.sort;
export const filtersSelector = (state) => state.tickets.filters;
export const filtersIdSelector = (state) => state.tickets.filterIds;

export const filteredTicketsSelector = createSelector(
  [ticketsSelector, filtersSelector, filtersIdSelector],
  (tickets, filters, ids) => {
    const activeOptions = ids.filter((id) => filters[id]);
    if (activeOptions.includes('all')) {
      return tickets;
    }

    const transfers = activeOptions.map((options) => numberOfTransfers[options]);
    return tickets.filter(({ segments }) => {
      const [departureThere, flightBack] = segments;
      const totalStops = departureThere.stops.length + flightBack.stops.length;
      return transfers.includes(totalStops);
    });
  },
);

const sortedTicketsSelector = createSelector(
  [sortingTypeSelector, filteredTicketsSelector],
  (typeSort, filteredTickets) => {
    const sliceTickets = filteredTickets.slice(0, 6);
    return sortTickets[typeSort](sliceTickets);
  },
);

export default sortedTicketsSelector;
