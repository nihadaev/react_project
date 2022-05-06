import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// SWIPER SLIDE
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

// USE REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// USE REDUX

// SWEETALERT
import swal from 'sweetalert';
// SWEETALERT

function Home() {
    //AOS

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    //AOS


    const dispatch = useDispatch()
    //POPULAR PRODUCTS
    const { popular } = useSelector(state => state)
    //POPULAR PRODUCTS

    // SALE PRODUCTS
    const { saleproducts } = useSelector(state => state)
    // SALE PRODUCTS


    // CART
    const { cart } = useSelector(state => state)
    // CART

    // STORY
    const { story } = useSelector(state => state)
    //STORY

    //WISHLIST
    const { wish, usercontacts } = useSelector(state => state)
    //WISHLIST

    const state = useSelector(state => state)

    // OPEN OR CLOSE MODAL
    const [mymodal, setMymodal] = useState(false)
    // OPEN OR CLOSE MODAL

    //DATA FOR MODAL
    const [moreData, setMoreData] = useState({})

    //DATA FOR MODAL




    // SET DATA FOR MODAL
    const readMore = (id) => {
        setMymodal(!mymodal)
        let a = popular.find(e => e.id === id)
        setMoreData(a)
    }
    // SET DATA FOR MODAL

    // ADD TO CART
    const addtocart = (id) => {

        let check = cart.some(e => e.id === id)
        check ?
            dispatch({ type: "INCCOUNT", payload: id }) :
            dispatch({ type: "ADD", payload: id })

    }
    // ADD TO CART

    //ADD TO WISHLIST
    const addToWishlist = (id) => {
        dispatch({ type: "WISH", payload: id })
    }
    // ADD TO WISHLIST


    useEffect(() => {

        window.scrollTo(0, 0)


    }, [])

    console.log(usercontacts);


    return (


        <>

            {/* <button className="btn btn-success scroll-to"  >
                GO
            </button> */}

            <div className={mymodal ? 'mymodal opened' : 'mymodal'} onClick={() => setMymodal(!mymodal)}>
                <div className="mymodal-content" onClick={e => e.stopPropagation()}>

                    <div className="close-content" onClick={() => setMymodal(!mymodal)}>
                        <div className="line">

                        </div>
                        <div className="line">

                        </div>
                    </div>

                    <h2 className='w-100'> {moreData.title} </h2>

                    <div className="mymodal-content-img">
                        <img src={moreData.image} alt=""  />
                    </div>

                    <div className="mymodal-content-text">
                        <h4> Reytinq : <i className="fa-solid fa-star"></i> {moreData.rating} </h4>
                        <h3>Category: {moreData.category} </h3>
                        <p> <span>Tərkibi</span> : {moreData.description} </p>

                        <h2> {moreData.price} ₼ </h2>
                        
                    </div>

                    <div className="add-to-cart-content w-100">
                            
                            <button onClick={() => addtocart(moreData.id)}> Səbətə Əlavə Et</button>
                            {
                                wish.some(e => e.id === moreData.id) ?
                                    <span className='addedtowish' onClick={() => dispatch({ type: "DELETEFROMWISH", payload: moreData.id })}>
                                        <i className="fa-solid fa-heart"></i>
                                    </span> :
                                    <span onClick={() => addToWishlist(moreData.id)} >
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                            }
                            
                        </div>
                </div>
            </div>

            <div className="different-pages">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay, EffectCube]}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    speed={1500}
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    className="mySwiper">

                    <SwiperSlide>

                        <div className="different-pages-menu">
                            <div className="different-pages-content">
                                <h2>Bizim Menumuz</h2>
                                <NavLink to="/react_project/menu">Ətraflı</NavLink>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="different-pages-courier">

                            <div className="different-pages-content">
                                <h2>Şəhərin ən dadlı  </h2>
                                <h2>isti içkiləri</h2>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="popular-products">
                <div className="container">

                    <h2> <span>Çox Satılanlar</span> <span><NavLink to="/react_project/menu">Bütün Məhsullar</NavLink></span></h2>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        loop={true}
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
                        {
                            popular.length > 0 ?

                                popular.map((index, key) => (
                                    <SwiperSlide key={key}>


                                        <div className="mycard-img w-100" >
                                            <img src={index.image} alt="" className='w-100' />
                                            <span className='hot'>HOT</span>
                                            <div className="mycard-img-overlay">
                                                <ul>

                                                    <li>
                                                        {
                                                            wish.some(e => e.id === index.id) ?
                                                                <span className='addedtowish' onClick={() => dispatch({ type: "DELETEFROMWISH", payload: index.id })}>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </span> :
                                                                <span onClick={() => addToWishlist(index.id)} >
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </span>
                                                        }

                                                    </li>
                                                    <li>
                                                        <span className='seemore' onClick={() => readMore(index.id)}>
                                                            <i className="fa-solid fa-eye" ></i>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span onClick={() => addtocart(index.id)}>
                                                            <i className="fa-solid fa-cart-shopping"></i>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mycard-content w-100">
                                            <p> <i className="fa-solid fa-star"></i> {index.rating} </p>
                                            <h3> {index.title} </h3>
                                            <p> {index.price} ₼ </p>

                                        </div>

                                    </SwiperSlide>

                                ))
                                : <h2>Məhsul yoxdu</h2>
                        }

                    </Swiper>
                </div>
            </div>

            <div className="sale-products">
                <div className="container">
                    <h2>Endirimdə Olan Məhsullarımız</h2>
                    <div className="sale-products-content">

                        {
                            saleproducts.length > 0 ?
                                saleproducts.map((index, key) => (
                                    <div className="sale-product" key={key} data-aos="zoom-in-up" >
                                        <img src={index.image} alt="" className='w-100 h-100' />
                                        <span className='sale'> {index.sale}% ENDİRİM </span>
                                        <span className='addtocart' onClick={() => addtocart(index.id)}>Səbətə Göndər</span>
                                        <div className="sale-product-overlay">
                                            <div className="sale-product-overlay-content">

                                                <h2> {index.title} </h2>
                                                <h4> <span> {index.saleprice}₼ </span> <span> {index.price}₼ </span> </h4>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <h2>Məhsul yoxdu</h2>
                        }
                    </div>
                </div>
            </div>

            <div className="actions">
                <div className="container">
                    <h2>Sərfəli Təkliflər</h2>
                    <div className="actions-content">
                        <div className="action-1">
                            <img src="https://sun9-88.userapi.com/impg/doK3wZCuGh6hKvKCRz51M_YQiCY1zvXSfe3pOw/l1dxNJnDMdY.jpg?size=564x698&quality=95&sign=90081e8b0857b462e78a1e1bb53569e5&type=album" alt="" className='w-100 h-100' />
                            <div className="action-1-content">
                                <span data-aos="fade-down" data-aos-duration="800">1+1 Aksiyası</span>
                            </div>
                        </div>
                        <div className="action-2">
                            <div className="action-4">
                                
                                <img src="https://images.wallpaperscraft.ru/image/single/kofe_kniga_ochki_140830_1920x1080.jpg" alt="" className='w-100 h-100' />
                                <div className="action-1-content">
                                    <span data-aos="fade-down" data-aos-duration="800">Ad günündə bütün məhsullar pulsuz </span>
                                </div>
                            </div>
                            <div className="action-5">
                                <img src="https://sun9-35.userapi.com/impg/Rq9mC_vuOBMroBvNAyNHN-y7Kf53wd1twPIUpQ/jpvBSRdGkjo.jpg?size=735x1062&quality=95&sign=1f4f88fc35d275b51131535a7b98e579&type=album" alt="" className='w-100 h-100' />
                            </div>
                            <div className="action-6">
                                
                                <img src="https://sun9-81.userapi.com/impg/Z2gq2J1lzyO7BIO5xQBkjo0vV7IR-RjVzYgC-Q/HDjSqfUVfYs.jpg?size=607x759&quality=95&sign=f009ab55f25dd071354d9e95fae8ddc0&type=album" alt="" className='w-100 h-100' />
                                <div className="action-1-content">
                                    <span data-aos="fade-down" data-aos-duration="800">1+1 Aksiyası</span>
                                </div>
                            </div>
                        </div>
                        <div className="action-3">
                            
                            <img src="https://sun9-1.userapi.com/impg/4vaAVjOnOBe7xPuRagjA327qaEGqpIpRlLdm8w/N9OnbDmnJoY.jpg?size=720x1080&quality=95&sign=2e7c5430401cfd99b16515acf3e1941d&type=album" alt="" className='w-100 h-100' />
                            <div className="action-1-content">
                                <span data-aos="fade-down" data-aos-duration="800"> 1+1 Aksiyası</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customers">
                <div className="customers-overlay">

                </div>
                <div className="container">
                    <div className="customers-content">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 700,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={1500}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                250: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="customer">
                                    <h2>Müştərilarimiz biz haqda...</h2>
                                    <p>Kafedə vaxt keçirdikdən sonra xoş təəssürat buraxdı. İnteryer maraqlıdır, otaq təmizdir. Heyət diqqətli, mehriban və köməkçi idi. Menyu bir az darıxdırıcı görünürdü, amma bütün yeməklər dadlıdır. Mən xüsusilə qızardılmış somon bifşteksini çox bəyəndim, sadəcə inanılmaz dadlı idi. Əgər siz müəllif mətbəxinin pərəstişkarı deyilsinizsə, ancaq dostlarınızla xoş axşam keçirmək istəyirsinizsə, əlbəttə ki, buradasınız.
                                    </p>
                                    <h5>Nihad Abdullayev</h5>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="customer">
                                    <h2>Müştərilarimiz biz haqda...</h2>
                                    <p>Paylaşmaq üçün çoxlu təcrübə! Əvvəla, bu yer sadəcə olaraq qeyri-real dadlı mətbəxdir! Mən, əsl gurme kimi, bütün şəhərdə bir dəstə yeməkdən dadmışam, bunu yüksək qiymətləndirdim. İkincisi, səs yüksək keyfiyyətli, səsin çox yaxşı harmonik səsləndirilməsidir. Üçüncüsü, nəzakətli və mehriban heyət) Mən mütləq yenidən ora baxacağam!
                                    </p>
                                    <h5>Nihad Abdullayev</h5>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="customer">
                                    <h2>Müştərilarimiz biz haqda...</h2>
                                    <p>Restoran sadəcə qəşəngdir, söz yoxdur, sadəcə olaraq, necə deyərlər, emosiyalar var) Əla ofisiantlar, münasib qiymətlər, bəzi restoranlardakı kimi deyil... Bir sözlə, işdən sonra istirahət etmək üçün yer tapmağı məsləhət görürəm.)
                                    </p>
                                    <h5>Nihad Abdullayev</h5>

                                </div>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>

            <div className="partners">
                <div className="container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 100
                        }}
                        speed={700}

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

            <div className="our-story">
                <div className="container">
                    <div className="story-content">
                        <div className="story-content-text" data-aos="fade-right">
                            <h2>Haqqımızda</h2>
                            <p className='w-100'>2017-ci ilin aprelində Yogyakartadan olan iki gənc tərəfindən qurulan Couvee, hər kəsin qəhvədən həzz ala biləcəyi ideyasından irəli gəlir. odur
                                hər şey Jalan Kaliurangdakı kiçik kirayə binada başladı. 2019-cu ilə qədər Couvee-nin 5 filialı var, onlardan biri Cakartada yerləşir.</p>

                            <div className="link-to-story w-100">
                                <NavLink to="/react_project/about">
                                    Ətraflı
                                </NavLink>
                            </div>
                        </div>
                        <div className="story-content-image" data-aos="fade-left">
                            <img src="https://media.istockphoto.com/photos/interior-of-a-local-coffee-shop-picture-id1317789159?b=1&k=20&m=1317789159&s=170667a&w=0&h=eGb2sopokC60ZlZa6HBNT67Cj5PmTgrRfD1Dl09vEcM=" alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-contact-section">
                <div className="container">
                    <div className="about-contact">
                        <div className="about-contact-img">
                            <img src="https://cdn.sanity.io/images/0cvyr85o/us/b11ceb34a91d88d1d2548f1b7ba1dfcb5e4458ac-2240x2000.jpg?rect=0,0,2239,2000&w=1366&h=1220&auto=format" className='w-100' alt="" />
                        </div>

                        <div className="about-contact-text">
                            <h3>Indi...</h3>
                            <h4>Gəlin qəhvə içək</h4>
                            <div className="about-contact-text-buttons">
                                <Link to='/react_project/menu'>Menu</Link>
                                <Link to='/react_project/contacts'>Əlaqə</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home