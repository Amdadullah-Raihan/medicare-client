import React from 'react'
import PrimaryButton from '../shared/Buttons/PrimaryButton'

const AvailableSlots = () => {

    const slots = [
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },
        { slot: '7-8 pm' },

    ]
    return (
        <section className='container mx-auto mb-16'>
            {/* section title */}
            <div className='mb-8 text-center'>
                <h5 className="text-lg text-[#19D3AE]">Available slots for { }</h5>

            </div>
            {/* slots girds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    slots.map(slot =>
                        // slot card
                        <div className='shadow p-8 leading-10 text-center'>
                            <h5 className="text-lg text-[#19D3AE]">Teeth Orthodontics</h5>
                            <p>  {slot.slot}</p>
                            <PrimaryButton>Book Appointment</PrimaryButton>
                        </div>

                    )
                }
            </div>

        </section>
    )
}

export default AvailableSlots