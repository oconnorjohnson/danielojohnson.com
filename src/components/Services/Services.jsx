import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>what I bring to the table</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>The Brand, <i>not</i> The Trend, informs experience</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Simplicity is effective, but not imperative</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>The function of the hero component must persist throughout the experience</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Software Engineer</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Small installments of agile code are the building blocks of complex and efficient programs</p>
            </li>
            {/* <BiCheck className='service__list-icon' /> */}
            <li>
              
              <p>Deep Learning systems mimic the regenerative design of the natural world, a design that is vital to the integrity of life</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Patterns are key, no matter how complex</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Project Manager</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Difference in perspective is the cradle of metamorphosis</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Challenges inspire innovation but necessitate collaboration; they are our <i>greatest</i> hope</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services