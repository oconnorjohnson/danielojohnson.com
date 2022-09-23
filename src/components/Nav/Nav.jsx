import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillFilePersonFill} from 'react-icons/bs'
import {GiBrain} from 'react-icons/gi'
import {GiGears} from 'react-icons/gi'
import {GiStrong} from 'react-icons/gi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}><BsFillFilePersonFill /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}><GiBrain /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}><GiGears /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}><GiStrong /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')}><FaUserFriends /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav