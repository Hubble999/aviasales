import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { actions } from '../../slices/tickets';
import classes from './Buttons.module.css';

const Buttons = () => {
  const typeSort = useSelector((state) => state.tickets.sort);
  const btnClassRight = cn(classes.btn, classes.right, {
    [classes.active]: typeSort === 'fast',
  });
  const btnClassLeft = cn(classes.btn, classes.left, {
    [classes.active]: typeSort === 'cheap',
  });
  const dispatch = useDispatch();
  const handleClickCheap = () => {
    dispatch(actions.updateSortType({ type: 'cheap' }));
  };
  const handleClickFast = () => {
    dispatch(actions.updateSortType({ type: 'fast' }));
  };
  return (
    <div className={classes.container}>
      <button
        className={btnClassLeft}
        onClick={handleClickCheap}
      >
        Самые дешевые
      </button>
      <button
        className={btnClassRight}
        onClick={handleClickFast}
      >
        Самые быстрые
      </button>
    </div>
  );
};

export default Buttons;
