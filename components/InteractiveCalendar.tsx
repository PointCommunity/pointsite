'use client';

import { useMemo, useState } from 'react';
import { calendarEvents } from '@/content/site';

export function InteractiveCalendar() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const month = cursor.getMonth();
  const year = cursor.getFullYear();
  const cells = useMemo(() => {
    const first = new Date(year, month, 1).getDay();
    const count = new Date(year, month + 1, 0).getDate();
    return [...Array(first).fill(null), ...Array.from({ length: count }, (_, index) => index + 1)];
  }, [month, year]);

  return (
    <section className="calendar" aria-label="Community calendar">
      <div className="calendar-toolbar">
        <button onClick={() => setCursor(new Date(year, month - 1, 1))} aria-label="Previous month">←</button>
        <h2>{cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setCursor(new Date(year, month + 1, 1))} aria-label="Next month">→</button>
      </div>
      <div className="calendar-grid calendar-weekdays" aria-hidden="true">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="calendar-grid">
        {cells.map((day, index) => {
          const dateKey = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
          const dayEvents = calendarEvents.filter((event) => event.date === dateKey);
          return (
            <div className="calendar-day" key={`${dateKey}-${index}`}>
              {day ? <span className="day-number">{day}</span> : null}
              {dayEvents.map((event) => <p key={event.title}><strong>{event.title}</strong>{event.time ? <small>{event.time}</small> : null}</p>)}
            </div>
          );
        })}
      </div>
      <p className="calendar-empty">Events can be added in one data list without changing the calendar component.</p>
    </section>
  );
}
