import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {GrSwift} from 'react-icons/gr'
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiHandlebarsdotjs} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'

import {SiSequelize} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>just a few</h5>

      <h2>Relevant Skills</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Technologies</h3>
          
          <div className="experience__content">

            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon"/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>•••••••••••••••••••••••••</small>
              </div>
            </article>

            <article className="experience__details">
              <GrSwift className="experience__details-icon"/>
              <div>
                <h4>Swift</h4>
                <small className='text-light'>••••••••••</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon"/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>•••••••••••••••••••••••</small>
              </div>
            </article>

            <article className="experience__details">
              <FaPython className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>•••••••••••••••••</small>
              </div>
            </article>

            <article className="experience__details">
              <FaBootstrap className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>•••••••••••••••</small>
              </div>
            </article>

            <article className="experience__details">
              <SiHandlebarsdotjs className="experience__details-icon"/>
              <div>
                <h4>Handlebars</h4>
                <small className='text-light'>••••••••</small>
              </div>
            </article>
          </div>
        </div>
      

        <div className="experience__backend">
          <h3>Backend Technologies</h3>
            
            <div className="experience__content">

              <article className="experience__details">
                <SiJavascript className="experience__details-icon"/>
                <div>
                  <h4>Express.js</h4>
                  <small className='text-light'>•••••••••••••••••</small>
                </div>
              </article>

              <article className="experience__details">
                <FaNode className="experience__details-icon"/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>•••••••••••••••••••••••</small>
                </div>
              </article>

              <article className="experience__details">
                <SiMysql className="experience__details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>••••••••••••••••</small>
                </div>
              </article>

              <article className="experience__details">
                <SiMongodb className="experience__details-icon"/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>•••••••••••••••••••</small>
                </div>
              </article>

              <article className="experience__details">
                <FaAws className="experience__details-icon"/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>••••••••••</small>
                </div>
              </article>

              <article className="experience__details">
                <SiSequelize className="experience__details-icon"/>
                <div>
                  <h4>Sequelize</h4>
                  <small className='text-light'>•••••••••••••••••</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience