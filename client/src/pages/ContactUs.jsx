import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactUsForm from '../constants/ContactUsForm'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function ContactUs() {
  return (
    <div className='contact-us'>
      <div className="contact-us__top-section">
      <h1>Contact Us</h1>
     
      <ul className="contact-items">
        <li>
          <a className='map-icon' href="https://www.google.com/maps/place/QA+Higher+Education+London+Campus/@51.5225706,-0.1137181,17z/data=!3m1!4b1!4m6!3m5!1s0x48761b4ed4849d71:0x905ec2bd752b3aa8!8m2!3d51.5225706!4d-0.1115294!16s%2Fg%2F1tfzwzsl">

          <i className="fa-solid fa-location-dot fa-bounce"></i>
          </a>

         </li>
        <li>

          <a className='tel-icon' href="tel:+447835112411">

          <i className="fa-solid fa-phone fa-beat-fade"></i>
          </a>

         </li>

        <li> 
          <a className='email-icon' href="mailto:sukhrobgit@gmail.com">
          <i className="fa-sharp fa-solid fa-paper-plane fa-spin fa-spin-reverse"></i>
          </a>

        <div>
        </div>
         </li>
    
      </ul>
      </div>

      <ContactUsForm className={"contact-form"}/>
    </div>
  )
}

export default ContactUs
