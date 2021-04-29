import React, { useState } from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";

import { Navbar } from "../ui/Navbar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from "../../helpers/calendar-message-es";

import 'moment/locale/es'
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";

moment.locale('es');

const localizer = momentLocalizer(moment); 

// const events = [{
//     title: 'title fin',
//     start: moment().toDate(),
//     end: moment().add( 2, 'hour').toDate(),
//     bgColor: '#fafaff',
//     notes: 'Aprender React',
//     user: {
//       _id: '123',
//       name: 'Daniel'
//     }
// }]

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(     localStorage.getItem('lastView') || "month" )
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.calendar)

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  }

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  }

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style= {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return{
      style
    }

  }

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={ onViewChange }
        view={lastView}
        components={{
          event:CalendarEvent
        }}
      />
        <AddNewFab />
        <CalendarModal />

    </div>
    
  );
};
