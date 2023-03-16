import React from 'react'
import AppointmentsHeader from './AppointmentsHeader'
import AvailableServices from './AvailableServices'
import AvailableSlots from './AvailableSlots'

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