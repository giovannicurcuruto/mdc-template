import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messagesOnCalendar } from './util';

// Tipo para eventos personalizados
interface CustomEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  description?: string;
}

const CalendarComponent: React.FC = () => {
  moment.locale('pt-br');
  const localizer = momentLocalizer(moment);


  // Lista de eventos
  const events: CustomEvent[] = [
    {
      title: 'Louvor ao vivo!',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      description: 'Louvor com o Pastor Ricardo',
    },
    {
      title: 'Kids reunião!',
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      description: 'Louvor com o Pastor Ricardo com as crianças',
      // allDay: true,
    },
    {
      title: 'Louvor matinal!',
      start: new Date('2024-12-12T14:00:00Z'),
      end: new Date('2024-12-12T15:30:00Z'),
      description: 'Louvor com o Pastor Ricardo pela manha!',
      //allDay: true,
    },
  ];


  const formats = {
    timeGutterFormat: 'HH:mm', // Exibe os horários na barra lateral (24h)
    eventTimeRangeFormat: ({ start, end }: { start: Date; end: Date }) =>
      `${moment(start).format('HH:mm')} – ${moment(end).format('HH:mm')}`, // Formato do intervalo de horários dos eventos
    agendaTimeFormat: 'HH:mm', // Exibe os horários na agenda
    dayHeaderFormat: 'dddd, DD/MM/YYYY', 
    dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) =>
      `${moment(start).format('DD/MM')} – ${moment(end).format('DD/MM')}`, // Cabeçalho para o intervalo
  };

  return (
    <div style={{
      maxWidth: `var(--max-width)`,
      width: 'var(--max-width)',
      height: '500px'
    }}>
      <Calendar
        localizer={localizer} 
        events={events}
        messages={messagesOnCalendar}
        formats={formats}
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
