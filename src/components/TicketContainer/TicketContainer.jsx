import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import sortTickets from '../../selectors/selector.js';
import Ticket from '../Ticket/Ticket';
import Error from '../Error/Error';

const TicketContainer = () => {
  const tickets = useSelector(sortTickets);
  const error = useSelector((state) => state.tickets.error);

  return error ? (
    <Error error={error} />
  ) : (
    <div>
      {tickets.map((data) => {
        return <Ticket key={_.uniqueId()} data={data} />
      })}
    </div>
  );
};

export default TicketContainer;
