import React, {useEffect} from 'react'

// USE REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// USE REDUX

// SWIPER SLIDE
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import { Pagination, Navigation, Autoplay, EffectCube } from "swiper";
//SWIPER SLIDE

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

//AOS

function About() {
  //AOS

  useEffect(() => {
    Aos.init({ duration: 1500 })
}, [])

//AOS

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const dispatch = useDispatch()

  const { story } = useSelector(state => state)
  console.log(story.find(e => e.id == 1));
  return (
    <div className='about'>
      <div className="container">
        <div className="about-content">
          <h2>
            bizim haqqımızda
          </h2>
          {
            story.map((index, key) => (
              <div className="about-content-text" key={key}>
                <img src={index.image} alt="" data-aos="fade-up" />
                <h3 data-aos="fade-down"> {index.title} </h3>
                <p data-aos="fade-down"> {index.description} </p>
              </div>
            ))
          }


        </div>

        <div className="partners">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}

            breakpoints={{
              250: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/5-170x70.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/3-170x70.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/6-170x70.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/4-170x70.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/1-170x70.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://opencart.mahardhi.com/MT04/coffeemugs/image/cache/catalog/manufactures/2-170x70.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default About