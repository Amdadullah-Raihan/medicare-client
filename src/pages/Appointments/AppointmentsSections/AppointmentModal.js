import React, { useState } from 'react'

const AppointmentModal = () => {


    const handleBookAppointment = (e) =>{
        e.preventDefault()
    }

  return (
    <div>
          {/* The button to open modal */}
       

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
              <div className="modal-box relative">
                  <div>
                      <h3 className='text-xl'>Cavity Protection</h3>
                      <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  </div>
                  <form onSubmit={handleBookAppointment} >

                      <input type="text" className='border rounded-md w-full  mt-4 h-12 px-4' name="" id="" value={new Date().toDateString()} />
                      <input type="text" className='border rounded-md w-full  mt-4 h-12 px-4' />
                      <input type="text" className='border rounded-md w-full  mt-4 h-12 px-4' />
                      <input type="text" className='border rounded-md w-full  mt-4 h-12 px-4' />
                      <input type="text" className='border rounded-md w-full  mt-4 h-12 px-4' />
                    
                      <input type="submit" className='w-full mt-4 btn' />

                  </form>
              </div>
          </div>
    </div>
  )
}

export default AppointmentModal