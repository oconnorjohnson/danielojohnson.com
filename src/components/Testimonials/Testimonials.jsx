import React from 'react'
import './Testimonials.css'

// import Swiper core and required modules 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  // {
  //   name: 'Patrick Loungway',
  //   title: 'Film Director/Director of Photography',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente illum qui dolorum laboriosam dolore velit quod eveniet totam esse eius impedit a ipsam alias error, placeat consequatur. Porro, pariatur.'
  // },
  {
    name: 'Derar Zawaydeh',
    title: 'Managing Owner, Crepeville',
    review: 'Daniel is a hidden gem. He is a reliable and upstanding individual whose work speaks for itself. He makes light-work of difficult tasks, and never fails to inspire others to do the same. Daniel is a truly cross-functional employee. For the same reasons I am sad to see him go, I am certain he will make an invaluable contribution to any team lucky enough to have him.'
  },
  {
    name: 'Chris Montenegro',
    title: 'General Manager, Burgers and Brew',
    review: 'Daniel is an outstanding individual with a tremendous work ethic. With a great attitude and a gentle personality, he is always ready and looking for what is next. He attacks problems with thrill and never shies away from a challenge.'
  },
  // {
  //   name: 'Greg Simmons',
  //   title: 'Doctorate of Psychology, Product Designer',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente illum qui dolorum laboriosam dolore velit quod eveniet totam esse eius impedit a ipsam alias error, placeat consequatur. Porro, pariatur.'
  // }
 
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>from previous employers</h5>
      <h2>Testimonials</h2>

      <Swiper 
      className="container testimonials__container"
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('Slide change')}
      >
        {
          data.map(({avatar, name, title, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                {/* <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div> */}
                <h5 className="client__name">{name}</h5>
                <h6 className="client__title">{title}</h6>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials