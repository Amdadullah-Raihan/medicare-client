import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import SectionHeader from '../shared/SectionsHeader/SectionHeader'


const ContactUs = () => {
  return (
    <div className='mb-16'>
      <SectionHeader route='Contact Us'></SectionHeader>
      <div className="container p-6 bg-white -mt-24 relative mx-auto shadow ">
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
                <p>Roberto Hotel and Resort</p>
              </Popup>
            </Marker>
          </MapContainer>
        </section>
      </div>
      
    </div>
  )
}

export default ContactUs