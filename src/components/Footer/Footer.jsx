import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DANIEL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.github.com/oconnorjohnson"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/oconnorjohnson"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DANIEL JOHNSON. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer