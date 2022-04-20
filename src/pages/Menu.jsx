import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import swal from 'sweetalert'

import { Link } from 'react-router-dom';
import { Pagination } from "swiper";
function Menu() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { products } = useSelector(state => state)

    const [cat, setCat] = useState([])

    useEffect(() => {

        products && products.map(e => {
            setCat(state => [...state, e.category])
        })
    }, [products])

    const categories = Array.from(new Set(cat));


    const { cart } = useSelector(state => state)
    const dispatch = useDispatch()
    // ADD TO CART
    const addtocart = (id) => {
        console.log(id);
        let check = cart.some(e => e.id === id)
        if(check) {
            dispatch({ type: "INCCOUNT", payload: id })
            dispatch ({type: "TOTAL", payload: id})
        } else{
            dispatch({ type: "ADD", payload: id })
        }
        
            

    }
    // ADD TO CART



    const { wish } = useSelector(state => state)
    //ADD TO WISHLIST
    const addToWishlist = (id) => {
        let check = wish.some(e => e.id === id)
        check ?
            swal({
                title: "Əlavə olunub!",
                icon: "error",
            })
            :
            dispatch({ type: "WISH", payload: id })
        swal({
            title: "Əlavə olundu!",
            icon: "success",
        })

    }
    // ADD TO WISHLIST
    
    // OPEN OR CLOSE MODAL
    const [mymodal, setMymodal] = useState(false)
    // OPEN OR CLOSE MODAL

    //DATA FOR MODAL
    const [moreData, setMoreData] = useState({})
    
    //DATA FOR MODAL
    // SET DATA FOR MODAL
    const readMore = (id) => {
        setMymodal(!mymodal)
        let a = products.find(e => e.id === id)
        setMoreData(a)
    }
    // SET DATA FOR MODAL

    
    return (

        <div className='menu-page'>
            <div className={mymodal ? 'mymodal opened' : 'mymodal'}>
                <div className="mymodal-content">

                    <div className="close-content" onClick={() => setMymodal(!mymodal)}>
                        <div className="line">

                        </div>
                        <div className="line">

                        </div>
                    </div>

                    <h2 className='w-100'> {moreData.title} </h2>

                    <div className="mymodal-content-img">
                        <img src={moreData.image} alt="" className='w-100' />
                    </div>

                    <div className="mymodal-content-text">
                        <h4> Reytinq : <i className="fa-solid fa-star"></i> {moreData.rating} </h4>
                        <h3>Category: {moreData.category} </h3>
                        <p> <span>Tərkibi</span> : {moreData.description} </p>

                        <h2> {moreData.price} ₼ </h2>
                        <div className="add-to-cart-content w-100">
                            <input type="text" value={moreData.count} />
                            <button onClick={() => addtocart(moreData.id)}> Səbətə Əlavə Et</button>
                            <span className='wish' onClick={() => addToWishlist(moreData.id)} ><i className="fa-solid fa-heart"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="menu-page-content">
                    <div className="menu-page-list">
                        <div className="menu-page-list-content">
                            {
                                categories.map((index, key) => (
                                    <Link to={"/menu/" + index.toLowerCase().replaceAll(' ', '')} key={key}><h3 > {index} </h3></Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="menu-page-products">
                        <div className="menu-page-products-content">
                            {
                                products.map((index, key) => (
                                    // <div className="products-card" key={key}>
                                    //     <div className="products-card-image">
                                    //         <img src={index.image} alt="" />
                                    //     </div>
                                    //     <div className="products-card-content">
                                    //         <p> <i className="fa-solid fa-star"></i> {index.rating} </p>
                                    //         <h3> {index.title} </h3>
                                    //         <p> {index.price} ₼ </p>
                                    //     </div>
                                    // </div>
                                    <div className="products-card" key={key}>
                                        <div className="mycard-img w-100" >
                                            <img src={index.image} alt="" className='w-100  h-100' />

                                            <div className="mycard-img-overlay">
                                                <ul>
                                                    <li>
                                                        <span onClick={() => addToWishlist(index.id)} >
                                                            <i className="fa-solid fa-heart"></i>
                                                        </span>
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

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu