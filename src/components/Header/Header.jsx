import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello, my name is</h5>
        <h1>DANIEL</h1>
        <h5 className="text-light">I am a full-stack web developer &amp; software engineer</h5>
        <CTA />
        {/* <HeaderSocials /> */}

        <div className="me">
          <img src={ME} alt="coding cowboy" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header