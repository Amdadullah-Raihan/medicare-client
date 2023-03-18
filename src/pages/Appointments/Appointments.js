import React from 'react'
import AppointmentsHeader from './AppointmentsSections/AppointmentsHeader'
import AvailableServices from './AppointmentsSections/AvailableServices'
import AvailableSlots from './AppointmentsSections/AvailableSlots'

const Appointments = () => {
  return (
    <div>
      <AppointmentsHeader/>
      <AvailableServices/>
      <AvailableSlots/>
    </div>
  )
}

export default Appointments