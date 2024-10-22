import moment from "moment";
import Calendar from "../Calendar";

const events = [
  {
    start: moment("2024-10-22T10:00:00").toDate(),
    end: moment("2024-10-22T11:00:00").toDate(),
    title: "Giacomo",
  },
  {
    start: moment("2024-10-22T14:00:00").toDate(),
    end: moment("2024-10-22T15:30:00").toDate(),
    title: "Tony",
  },
];

export default function BasicCalendar() {
  return <Calendar events={events} />;
}
