import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { actions } from '../../slices/tickets';
import { filtersSelector } from '../../selectors/selector.js';
import { filtersIdSelector } from '../../selectors/selector.js';
import classes from './Filter.module.css';
import i18n from '../../locales/index.js';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const filtersId = useSelector(filtersIdSelector);

  const handleCheck = (e) => {
    dispatch(
      actions.updateFilter({ name: e.target.name, value: e.target.checked }),
    );
  };

  return (
    <div className={classes.container}>
      <p className={classes.description}>{i18n.t('numberOfTransfers')}</p>
      <ul className={classes.list}>
        {filtersId.map((name) => {
          return (
            <li key={_.uniqueId()}>
              <label className={classes.check}>
                <input
                  className={classes.check__input}
                  type='checkbox'
                  name={name}
                  checked={filters[name]}
                  onChange={handleCheck}
                />
                <span className={classes.check__box} />
                <span className={classes.check__text}>
                  {i18n.t(`transfers.${name}`)}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
