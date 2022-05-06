import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <div className='about'>
      <div className="about-page-background">
        <h2>
            Haqqımızda
        </h2>
        
      </div>
      <div className="container">
        <div className="about-content">


          <div className="about-content-roaster">
            <div className="roaster-text" data-aos="fade-right">
              <h3>25 il əvvəl biz qəhvə qovurmağa başladıq.</h3>
              <h4>Qarajda</h4>
              <h4>Kanada Qayalı Dağlarında, demək olar ki, heç bir yerin ortasında.</h4>
            </div>
            <div className="roaster-img" data-aos="fade-left">
              <img className='w-100 ' src="https://cdn.sanity.io/images/0cvyr85o/us/486a11decadb478c21d8ac837d9841766a4765b9-1912x2448.jpg?w=1366&h=1749&auto=format" alt="" />
            </div>


          </div>

          <div className="about-content-roaster">
            <div className="roaster-img" data-aos="fade-right">
              <img src="https://cdn.sanity.io/images/0cvyr85o/us/ae6f861404dfc62f67d1e774cb34b49d1958fe5b-1912x2448.jpg?w=1366&h=1749&auto=format" className='w-100' alt="" />
            </div>

            <div className="roaster-text" data-aos="fade-left">
              <h3>O vaxt belə idi.</h3>
              <h4>Bu günə sürətlə irəliləyin və bu, hələ də eynidir.</h4>
            </div>
          </div>




        </div>



      </div>

      <div className="about-content-changes">
        <div className="container">
          <div className="changes-text" >
            <h3>Nə dəyişdi?</h3>
            <h4>Qaraj indi bir az böyüyüb.</h4>
            <h4>Bir az daha çox qəhvə qovururuq.</h4>
            <h4>Deyəsən, komandamıza getdikcə daha çox insan əlavə edirik.</h4>
            <h4>İndi də bəzi insanlar bizi çağırdılar <span>Kanadada işləmək üçün ən yaxşı yer!</span> </h4>
          </div>
        </div>
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

      <div className="container">

        <div className="about-content1">
          <div className="about-content-roaster">
            <div className="roaster-text" data-aos="fade-right">
              <h3>Eyni nədir?</h3>
              <h5>ELANA HƏLƏ BOSSDUR.</h5>
              <h4>(Baş direktorumuz Elana Rosenfeld də bizi işə saldı.)</h4>
              <h4>Keçən dəfə biz yoxladıq, Rockies hələ də ön qapının qarşısındadır.</h4>
              <h4>Həyətdə oynamaq üçün hələ də fasilələr veririk.</h4>
              <h4>And as always, the beans are nothing but 100% kick-ass.</h4>
            </div>
            <div className="roaster-img" data-aos="fade-left">
              <img src="https://cdn.sanity.io/images/0cvyr85o/us/8fb3517b549f7d28b83ae23a380528163ec68dde-1912x2900.jpg?w=1366&h=2072&auto=format" className='w-100' alt="" />
            </div>


          </div>
          <div className="about-content-roaster">
            <div className="roaster-img" data-aos="fade-right">
              <img src="https://cdn.sanity.io/images/0cvyr85o/us/2e5ace280d6a4e0dbf87dad23b8767bdd391e8aa-1912x2900.jpg?w=1366&h=2072&auto=format" className='w-100' alt="" />
            </div>

            <div className="roaster-text" data-aos="fade-left">
              <h3>Bu bizim hekayəmizdir.</h3>
              <h5>İNDİ BU ƏFSANƏDİR.</h5>
              <h4>Qaya dağının kəşfiyyatçısı at tərəfindən başından təpiklə vuruldu.</h4>
              <h4>Səyahət yoldaşları onun öldüyünü düşünüb qəbir qazmağa başladılar.</h4>
              <h4>Amma, vay! Rəvayətə görə, o, bir fincan qəhvə ilə oyandı.</h4>
              <h4>Bu qarmaqarışıqlığı düzəldə bilmədi.</h4>
            </div>
          </div>
        </div>


        

        
      </div>
    </div>
  )
}

export default About