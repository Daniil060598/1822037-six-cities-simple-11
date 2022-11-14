import { MONTHS } from '../../const';

type TimeProps = {
  date: string;
  className: string;
}

function Time ({date, className}: TimeProps): JSX.Element {
  const dateTime = new Date(date);
  const formattedDate = `${MONTHS[dateTime.getMonth()]} ${dateTime.getFullYear()}`;
  return (
    <time className={className} dateTime={date}>{formattedDate}</time>
  );
}

export default Time;
