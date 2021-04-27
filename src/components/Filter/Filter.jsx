import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { actions } from '../../slices/tickets';
import classes from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = Object.entries(useSelector((state) => state.tickets.filters));
  const options = ['все', 'без пересадок', '1 пересадка', '2 пересадаки', '3 пересадки'];

  const handleCheck = (e) => {
    dispatch(
      actions.updateFilter({ name: e.target.name, value: e.target.checked }),
    );
  };

  return (
    <div className={classes.container}>
      <p className={classes.description}>Количество пересадок</p>
      <ul className={classes.list}>
        {filters.map(([name, checked], index) => {
          return (
            <li key={_.uniqueId()}>
              <label className={classes.check}>
                <input
                  className={classes.check__input}
                  type='checkbox'
                  name={name}
                  checked={checked}
                  onChange={handleCheck}
                />
                <span className={classes.check__box} />
                <span className={classes.check__text}>{options[index]}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Filter;
