import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  const {
    data: { searchId },
  } = await axios.get('https://front-test.beta.aviasales.ru/search');
  try {
    const response = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`,
    );
    const { tickets } = response.data;
    return tickets;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.message);
  }
});

/* [
  { name: 'all', checked: true },
  { name: 'wihtoutTransfers', stops: 0, checked: false },
  { name: 'oneTransfer', stops: 1, checked: false },
  { name: 'twoTransfers', stops: 2, checked: false },
  { name: 'threeTransfers', stops: 3, checked: false },
],
 */
const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: 'idle',
    ticketsPack: [],
    sort: 'cheap',
    filters: {
      all: true,
      withoutTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      treeTransfers: false,
    },
    filterIds: ['all', 'withoutTransfers', 'oneTransfer', 'twoTransfers', 'treeTransfers'],
    errors: null,
  },
  reducers: {
    updateSortType(state, { payload }) {
      const { type } = payload;
      state.sort = type;
    },
    updateFilter(state, { payload }) {
      const { name, value } = payload;
      if (name !== 'all' && state.filters.all === true) {
        state.filters.all = false;
      }
      if (name === 'all' && value === true) {
        state.filterIds.forEach((id) => {
          if (id === name) {
            state.filters[id] = true;
          } else {
            state.filters[id] = false;
          }
        });
      } else {
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
