import moment from "moment";
import Calendar from "../Calendar";

const events = [
  {
    start: moment("2024-10-22T10:00:00").toDate(),
    end: moment("2024-10-22T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-10-22T14:00:00").toDate(),
    end: moment("2024-10-22T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

export default function ControlCalendar() {
  return (
    <Calendar
      // imposta solo quella view
      // view={"week"}

      // view da dove parte
      defaultView={"week"}
      // le views che vuoi vedere
      views={["month", "week"]}
      // imposta la data
      // date={moment("2024-09-23").toDate()}
      events={events}
      // imposta gli orari massimi per quella data dalle 8 alle
      min={moment("2024-10-22T08:00:00").toDate()}
      max={moment("2024-10-22T18:00:00").toDate()}
      // permette di eliminare i bottoni per andare avanti con il mese/ giorno
      toolbar={true}
    />
  );
}
