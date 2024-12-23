// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { messagesOnCalendar } from './util';
// import { Calendario } from '../../types/ourschedule/calendario';
// import { parseISO } from 'date-fns';

// // Tipo para eventos personalizados
// // type Event = {
// //   id: number;
// //   title: string;
// //   start: Date;
// //   end: Date;
// //   allDay: boolean;
// //   description: string;
// // }


// interface CalendarComponentProps {
//   events: Calendario[];
// }


// const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
//   moment.locale('pt-br');
//   const localizer = momentLocalizer(moment);

//   console.log(events[0]);

//   const formattedEvents = events.map((event) => ({
//     id: event.id,
//     title: event.titulo,
//     start: parseISO(event.datainicio.replace(" ", "T")),
//     end: parseISO(event.datafim.replace(" ", "T")),
//     allDay: event.allday,
//     description: event.description
//   }));


//   return (
//     <div style={{
//       maxWidth: `var(--max-width)`,
//       width: 'var(--max-width)',
//       height: '500px',
//       color: '#000'
//     }}>
//       <Calendar
//         localizer={localizer}
//         events={formattedEvents}
//         messages={messagesOnCalendar}
//         startAccessor="start"
//         endAccessor="end"
//         style={{
//           backgroundColor: `var(--mc-grey-text)`,
//           width: '100%',
//         }}
//       />
//     </div>
//   );
// };

// export default CalendarComponent;
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import { messagesOnCalendar } from "./util";
import { Calendario } from "../../types/ourschedule/calendario";
import { parseISO } from "date-fns";

const CalendarWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: 500px;
  color: #000;
  width: 100%;
  padding: 1rem;

  .rbc-calendar {
    background-color: var(--mc-grey-text);
    width: 100%;
    height: 100%;
    font-size: 14px;

    .rbc-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      button {
        padding: 0.5rem 1rem;
        font-size: 14px;
        border-radius: 4px;
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        cursor: pointer;

        &:hover {
          background-color: var(--primary-dark);
        }
      }
    }

    .rbc-event {
      font-size: 12px;
      padding: 2px 4px;
    }

    .rbc-header {
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    height: auto;

    .rbc-calendar {
      font-size: 12px;

      .rbc-toolbar {
        flex-direction: column;
        gap: 10px;

        button {
          width: 100%;
        }
      }

      .rbc-event {
        font-size: 10px;
      }

      .rbc-header {
        font-size: 10px;
      }
    }
  }
`;

interface CalendarComponentProps {
  events: Calendario[];
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  moment.locale("pt-br");
  const localizer = momentLocalizer(moment);

  const formattedEvents = events.map((event) => ({
    id: event.id,
    title: event.titulo,
    start: parseISO(event.datainicio.replace(" ", "T")),
    end: parseISO(event.datafim.replace(" ", "T")),
    allDay: event.allday,
    description: event.description,
  }));

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={formattedEvents}
        messages={messagesOnCalendar}
        startAccessor="start"
        endAccessor="end"
      />
    </CalendarWrapper>
  );
};

export default CalendarComponent;
