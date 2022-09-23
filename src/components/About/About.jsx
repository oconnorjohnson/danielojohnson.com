import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h5>who am I?</h5>

      <h2>About Me</h2> 
      
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"></img>
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>SELF-STARTER</h5>
              <small>Without discipline and drive, a good idea is useless</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>TOLERANT</h5>
              <small>To listen is grand, to sympathize is paramount</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>ARDENT</h5>
              <small>I appreciate skill and value effort</small>
            </article>
          </div>

          <p>
          I am a passionate, communicative, and collaborative team-player with excellent leadership skills, adept at tackling complex and ambiguous problems. I live and breathe Python and JavaScript, and am experienced with a variety of front- and back-end development technologies. I challenge my knowledge daily, and am currently familiarizing myself with C++, C# and BUN.js. My past experiences in graphic design and cinematography give me an eagle eye for aesthetics, while my university focus on the social sciences have broadened my interpersonal skills. When it matters, I sweat the small stuff!
          </p>

          
        </div>
        <div className="contactBtn">
          <a href="#contact" className='btn btn-primary' >Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About