import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Daniel</h1>
        <h5 className="text-light">Full-stack Web Developer &amp; Software Engineer</h5>
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