import React from 'react';
import formatTime from '../../utils/formatTime';
import classes from './Ticket.module.css';

const Ticket = ({ data }) => {
  const { price, carrier, segments } = data;
  const [arrival, depture] = segments;
  const [time1, duration1] = formatTime(arrival);
  const [time2, duration2] = formatTime(depture);
  
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <span className={classes.price}>{price} P</span>
        <img
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt='логотип авиакомпании'
        />
      </div>
      <div className={classes.item}>
        <div className={classes.info}>
          <span
            className={classes.direction}
          >{`${arrival.origin} - ${arrival.destination}`}</span>
          <span className={classes.time}>{time1}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.direction}>В пути</span>
          <span className={classes.time}>{duration1}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.direction}>
            {arrival.stops.length} пересадки
          </span>
          <span className={classes.time}>{arrival.stops.join(', ')}</span>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.info}>
          <span
            className={classes.direction}
          >{`${depture.origin} - ${depture.destination}`}</span>
          <span className={classes.time}>{time2}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.direction}>В пути</span>
          <span className={classes.time}>{duration2}</span>
        </div>
        <div className={classes.info}>
          <span className={classes.direction}>
            {depture.stops.length} пересадки
          </span>
          <span className={classes.time}>{depture.stops.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
