import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";
import Layout from "../../components/layout";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <Layout>
      <FullCalendar
        innerRef={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin]}
        editable
        selectable
      />
    </Layout>
  );
};

export default Calendar;
