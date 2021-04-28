import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../../slices/tickets.js';
import Filter from '../Filter/Filter';
import TicketContainer from '../TicketContainer/TicketContainer';
import Buttons from '../Buttons/Buttons';
import classes from './App.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchTickets());
  }, [dispatch]);

  return (
    <>
      <div className={classes.logo}>
        <a href='/'>
          <Logo />
        </a>
      </div>
      <div className={classes.container}>
        <Filter />
        <div>
          <Buttons />
          <TicketContainer />
        </div>
      </div>
    </>
  );
}

export default App;
