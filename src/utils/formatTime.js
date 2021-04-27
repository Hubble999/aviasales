import { DateTime, Duration } from 'luxon';

export default ({ date, duration }) => {
  const dataArrival = DateTime.fromISO(date);
  const msInMinute = 60 * 1000;
  const dataDuration = Duration.fromMillis(duration * msInMinute);
  const dataDepture = dataArrival.plus(dataDuration);
  const formatTime = `${dataArrival.toFormat("hh':'mm")} - ${dataDepture.toFormat("hh':'mm")}`;
  const formatTimeLocale = dataDuration.toFormat("hh'ч 'mm'м'");
  return [formatTime, formatTimeLocale];
};
