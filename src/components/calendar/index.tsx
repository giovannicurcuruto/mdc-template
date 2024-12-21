import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messagesOnCalendar } from './util';
import { Calendario } from '../../types/ourschedule/calendario';
import { parseISO } from 'date-fns';

// Tipo para eventos personalizados
// type Event = {
//   id: number;
//   title: string;
//   start: Date;
//   end: Date;
//   allDay: boolean;
//   description: string;
// }


interface CalendarComponentProps {
  events: Calendario[];
}


const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  moment.locale('pt-br');
  const localizer = momentLocalizer(moment);

  console.log(events[0]);

  const formattedEvents = events.map((event) => ({
    id: event.id,
    title: event.titulo,
    start: parseISO(event.datainicio.replace(" ", "T")),
    end: parseISO(event.datafim.replace(" ", "T")),
    allDay: event.allday,
    description: event.description
  }));


  return (
    <div style={{
      maxWidth: `var(--max-width)`,
      width: 'var(--max-width)',
      height: '500px',
      color: '#000'
    }}>
      <Calendar
        localizer={localizer}
        events={formattedEvents}
        messages={messagesOnCalendar}
        startAccessor="start"
        endAccessor="end"
        style={{
          backgroundColor: `var(--mc-grey-text)`,
          width: '100%',
        }}
      />
    </div>
  );
};

export default CalendarComponent;

