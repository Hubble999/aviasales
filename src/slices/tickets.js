import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const { data: { searchId } } = await axios.get(routes.getSearchIdPath());
  try {
    const response = await axios.get(routes.getTicketsPath(searchId));
    const { tickets } = response.data;
    return tickets;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: 'idle',
    ticketsPack: [],
    sort: 'cheap',
    filters: {
      all: false,
      withoutTransfers: true,
      oneTransfer: false,
      twoTransfers: false,
      treeTransfers: false,
    },
    filterIds: [
      'all',
      'withoutTransfers',
      'oneTransfer',
      'twoTransfers',
      'treeTransfers',
    ],
    error: null,
  },
  reducers: {
    updateSortType(state, { payload }) {
      const { type } = payload;
      state.sort = type;
    },
    updateFilter(state, { payload }) {
      const { name, value } = payload;
      if (name === 'all') {
        state.filterIds.forEach((id) => (state.filters[id] = value));
      } else {
        state.filters.all = false;
        state.filters[name] = value;
      }
    },
  },
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.loading = 'panding';
    },
    [fetchTickets.fulfilled]: (state, { payload }) => {
      state.loading = 'idle';
      state.ticketsPack = payload;
    },
    [fetchTickets.rejected]: (state, { error }) => {
      state.loading = 'rejected';
      state.errors = error.message;
    },
  },
});

const { actions, reducer } = ticketsSlice;

actions.fetchTickets = fetchTickets;

export { actions };

export default reducer;
