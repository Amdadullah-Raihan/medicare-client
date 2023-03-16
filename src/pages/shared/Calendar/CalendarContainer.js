import React, { useState } from 'react';
import Calendar from 'react-calendar';


function ReactCalendar() {
    const [value, onChange] = useState(new Date());

    return <Calendar  onChange={onChange} value={value} />
      
   
}
export default ReactCalendar;