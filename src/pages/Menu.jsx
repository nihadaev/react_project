import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";


import { Pagination } from "swiper";
function Menu() {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state)
    console.log(products);
    return (
        <div className='menupage container'>
            <h1>Menu</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    products.length > 0 ?
                        products.map((index, key) => (
                            <SwiperSlide key={key}>
                                <div className="card" >
                                    <img className="card-img-top" src={index.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"> {index.title} </h5>


                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        : <h2>No Item</h2>
                }


            </Swiper>
           
        </div>
    )
}

export default Menu