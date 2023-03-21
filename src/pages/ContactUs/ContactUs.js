import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import PrimaryButton from '../shared/Buttons/PrimaryButton'
import SectionHeader from '../shared/SectionsHeader/SectionHeader'


const ContactUs = () => {
  return (
    <div className='mb-16'>
      <SectionHeader route='Contact Us'></SectionHeader>


      {/* Map Container starts */}
      <section>
        <div className="container md:p-8 bg-white p-4 -mt-24 relative mx-auto shadow mx">
          <section className="w-full grid grid-cols-2 py-6 lg:grid-cols-4 gap-4 ">
            <div className='text-center'>
              <i className='fa-solid fa-phone text-teal-500 md:text-3xl'></i>
              <h3 className='md:text-2xl'>Phone</h3>
              <p>+088-123456789</p>

            </div>
            <div className='text-center'>
              <i className='fa-solid fa-location-dot text-teal-500 md:text-3xl'></i>
              <h3 className='md:text-2xl'>Address</h3>
              <p>Vatara, Gulshan, Dhaka-1212</p>

            </div>
            <div className='text-center'>
              <i className='fa-regular fa-clock text-teal-500 md:text-3xl'></i>
              <h3 className='md:text-2xl'>Open Time</h3>
              <p>10:00 am to 23:00 pm</p>

            </div>
            <div className='text-center'>
              <i className='fa-regular fa-envelope text-teal-500 md:text-3xl'></i>
              <h3 className='md:text-2xl'>Email</h3>
              <p className='break-words'>amdadullahrayhan@gmail.com</p>

            </div>
          </section>
          <section className='container mx-auto w-full '>
            <MapContainer center={[23.798919, 90.434168]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[23.798919, 90.434168]}>
                <Popup>
                  <p>MediCare Hospital and Diganosis Center</p>
                </Popup>
              </Marker>
            </MapContainer>
          </section>
        </div>
      </section>
      {/* Map container ends  */}
      {/* Form container starts */}
      <section className='text-center my-16 px-12 container mx-auto'>
        <h4 className="uppercase text-lg text-teal-500">Contact us</h4>
        <h1 className="font-bold capitalize text-3xl">leave message</h1>

        <form className='mt-12'>
          <div className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <input className='border h-12 px-6' type="text" name="" id="" placeholder='Your Name' />
            <input className='border h-12  px-6' type="text" name="" id="" placeholder='Your Email' />
          </div>
          <div>
            <textarea className='h-[200px] border w-full p-6' placeholder='Write your message here'></textarea>
            <input type="submit" className='btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none px-16 rounded-none mt-8' />
          </div>

        </form>
      </section>

    </div>
  )
}

export default ContactUs