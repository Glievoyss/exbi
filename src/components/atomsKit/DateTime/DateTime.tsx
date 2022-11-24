import moment from "moment";
// @ts-ignore
import classes from "./DateTime.module.css";

interface IProps {
  date?: string
};

const DateTime: React.FC<IProps> = (props) => {
  const {date} =props;
  if (
    (
      date === "-" ||
      date === "NA" ||
      date === "1970-01-01T00:00:00.000Z"
    )
  ) {
   return <>-</>
  }

  return (
    <p className={classes.dateTime}>
      {moment(date).format("DD MMM, YYYY")} {' '}
      <span className={classes.time}>{moment(date).format("HH:mm")}</span>
    </p>
  );
};

export default DateTime;
