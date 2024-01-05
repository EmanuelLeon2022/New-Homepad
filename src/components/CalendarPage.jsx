import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dates from '../models/dates';
import Header from './header/Header';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendarWrapper'>
      <Header/>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='tent'>
      <h1 className='title'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      </div>

      <div id="Upcoming">
        Upcoming Events

        <div className="eventsList">
          {dates.map((event, index) => (
            <div className="eventItem" key={index}>
              <p><b>{event.event}</b></p>
              <p>Frequency: {event.frequency}</p>
            </div>
          ))}
        </div>
      
      </div>

    </div>
  );
}

export default CalendarPage;