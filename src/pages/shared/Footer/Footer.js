import React from 'react'
import { Link } from 'react-router-dom';
import footerBg from '../../../assests/images/footer.png';

const Footer = () => {
  return (
    <section className='bg-cover bg-no-repeat' style={{backgroundImage:`url(${footerBg})`}}>
      <footer className="footer py-12 px-4 md:px-0 text-base-content container mx-auto">
        <div>
          <span className="footer-title">Services</span>
         <Link className="link link-hover">Monthly Checkup</Link>
         <Link className="link link-hover">Weekly Checkup</Link>
         <Link className="link link-hover">Deep Checkup</Link>
          <Link className="link link-hover"> Emergency Checkup</Link>
      
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
         <Link className="link link-hover"></Link>
         <Link className="link link-hover">Fluoride Treatment</Link>
         <Link className="link link-hover">Cavity Filling</Link>
         <Link className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
         <Link className="link link-hover">Terms of use</Link>
         <Link className="link link-hover">Privacy policy</Link>
         <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
        <div className="items-center grid-flow-col">
        
          <p>MediCare <br />Providing reliable medical care since 1992</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <i className="fa-brands text-2xl fa-linkedin-in"></i>
            <i className="fa-brands text-2xl fa-facebook-f"></i>
            <i className="fa-brands text-2xl fa-twitter"></i>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;