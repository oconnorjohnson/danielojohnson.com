import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eefagyx', 'template_jdwlmcw', form.current, 'Dobo4jEVKGW5R-xSZ')
      .then((result) => {
        alert("Thank your! Your message has been sent.");
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:daniel@danielojohnson.com">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h3>Email</h3>
              <h5>get in touch</h5>
            </article>
          </a>
          <a href="https://www.linkedin.com/in/oconnorjohnson">
            <article className="contact__option">
              <BsLinkedin className='contact__option-icon' />
              <h3>LinkedIn</h3>
              <h5>let's connect</h5>
            </article>
            </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='E-Mail' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
     
    </section>
  )
}

export default Contact