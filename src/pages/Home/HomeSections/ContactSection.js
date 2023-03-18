import React from 'react'
import PrimaryButton from '../../shared/Buttons/PrimaryButton'
import bg from '../../../assests/images/appointment.png';

const ContactSection = () => {
  return (
    <section className='relative bg-cover bg-no-repeat py-16 px-4 mb-16' style={{backgroundImage:`url(${bg})`}}>
          <div className='w-full container mx-auto '>
            <form className='max-w-sm leading-10 mx-auto'>
                <input type="text" placeholder='You Email' className='border rounded-lg mb-4 px-4 w-full' /> <br />
                <input type="text" placeholder='Subject' className='border rounded-lg mb-4 px-4 w-full' /> <br />
                <textarea className='h-24 border w-full rounded-lg px-4' placeholder='Write Your Message Here'></textarea> <br />
                <PrimaryButton type='submit'>Send Massege</PrimaryButton>
            </form>
        </div>
    </section>
  )
}

export default ContactSection