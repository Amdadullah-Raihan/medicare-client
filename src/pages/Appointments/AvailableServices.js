import React from 'react'

const AvailableServices = () => {

 const services = [
     "teet orthodontics",
    "cosmetic dentistry",
    "teeth cleaning",
   " cavity protection",
   " pediatric dental", 
    "oral surgery"
 ]

  return (
    <section className='container mx-auto my-16 px-4 md:px-0'>
        {/* section title */}
        <div className='text-center mb-8'>
              <h5 className="text-lg text-[#19D3AE]">Available Services on {}</h5>
              <p className='text-gray-500'>Please Select a Service</p>
        </div>
        {/* services grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {
            services.map((service, i) => 
            // SERVICE CARD
                <div className='p-6 shadow-md rounded-lg'>
                    <h5 className='text-[#19D3AE] font-semibold'> {service[i]}</h5>
                </div>


            )
           }
        </div>
    </section>
  )
}

export default AvailableServices