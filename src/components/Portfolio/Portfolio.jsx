import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CLI Content Management System',
    description: 'A command line interface application that manages a company employee base and cost of labor, built using Node.js, Inquirer.js and MySQL.',
    github: 'https://github.com/oconnorjohnson/CLI-Content-Management-System',
    demo: 'https://drive.google.com/file/d/1xNW0-iYvIcTp6PT_sMkXXZ9lKlKgY1GW/view'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SmartPack',
    description: 'A web app that utilizes third-party flight- and weather-APIs to generate a packing list based on the flight information input by the user.',
    github: 'https://github.com/mayalorimer/SmartPack',
    demo: 'https://mayalorimer.github.io/SmartPack/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Cream Finder',
    description: 'A full-stack web app built with an MVC framework which allows ice cream truck drivers to post their routes for customers to locate them.',
    github: 'https://github.com/oconnorjohnson/cream-finder',
    demo: 'https://enthousiaste-monsieur-80020.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Mix Easy',
    description: 'A full-stack web app built using the MERN stack that allows users to create and rank custom cocktails.',
    github: 'https://github.com/ChrisDeng1999/Mix-Me',
    demo: 'https://guarded-reef-56811.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Timed JavaScript Quiz',
    description: 'A 60-second, timed-JavaScript quiz generated with HTML/CSS and ES6 that deducts 10 seconds for every incorrect answer.',
    github: 'https://github.com/oconnorjohnson/javascript-quiz-game',
    demo: 'https://oconnorjohnson.github.io/javascript-quiz-game/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'OpenWeather API Dashboard',
    description: 'A front-end web application that allows users to search a city name and return a 6-day forecast using the OpenWeather API.',
    github: 'https://github.com/oconnorjohnson/openweather_dashboard',
    demo: 'https://oconnorjohnson.github.io/openweather_dashboard/'
  }
]

const Portfolio = () => {
  return (
    <section id="porftolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio