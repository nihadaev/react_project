import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logoo.svg'
import card from '../images/card.png'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function Header() {
    const [menu, setMenu] = useState(false)
    const { cart } = useSelector(state => state)
    const {products} = useSelector(state => state)

    const dispatch = useDispatch()
    const [headerClassName, setHeaderClassName] = useState('');

    const handleScroll = (headerClassName) => {
        if (headerClassName !== 'menuscroll' && window.pageYOffset >= 100) {
            setHeaderClassName('menuscroll');
        } else if (headerClassName === 'menuscroll' && window.pageYOffset < 100) {
            setHeaderClassName('');
        }

      
    }

    useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);
    
    // Search modal
    const [search,setSearch] = useState(false)
    // Search modal

    const [value,setValue] = useState('')

    
    const filteredProducts = products.filter(el => {
      return  el.title.toLowerCase().includes(value.toLowerCase())
    })
   

        // ADD TO CART
        const addtocart = (id) => {
           
            let check = cart.some(e => e.id === id)
            if(check) {
                dispatch({ type: "INCCOUNT", payload: id })
                dispatch ({type: "TOTAL", payload: id})
            } else{
                dispatch({ type: "ADD", payload: id })
            }
            
                
    
        }
        // ADD TO CART
    return (
        <>
            <div className={search ? 'searchModal openSearch' : "searchModal"}>
                <span className='closeSearch' onClick={() => setSearch(!search)}>X</span>
                <div className="container">
                    <div className="searchmodal-input">
                        <input type="text" placeholder='Axtardıqınız məhsul' onChange={(e) => setValue(e.target.value)}/>
                        <i className="fa-solid fa-magnifying-glass mysearch"></i>
                    </div>
                    <div className="searchModal-content">
                        {   
                        filteredProducts.length > 0 ?
                            filteredProducts.map((index,key) => (
                                <div className="searchModal-cart" key={key}>
                                    <ul>
                                        <li>
                                            <img src={index.image} alt="" />
                                        </li>
                                        <li>
                                            <h2> {index.title} </h2>
                                        </li>
                                        <li>
                                            <h2> ₼ {index.price} </h2>
                                        </li>
                                        <li>
                                            <button onClick={() => addtocart(index.id)}> Səbətə göndər </button>
                                        </li>
                                    </ul>
                                </div>
                            )) :
                            <h3>Belə məhsulumuz yoxdur</h3>
                        }
                    </div>
                </div>
            </div>
            
            <div className={menu ? "mobile-menu activated" : "mobile-menu"}>
                <div className="mobile-menu-head">
                    <h2><span>MENÜ</span> <span className='closemenu' onClick={() => setMenu(!menu)}>X</span></h2>
                </div>
                <div className="mobile-menu-content">
                <ul className='mobile-menu-pages'>
                        <li>
                            <NavLink to="/">Ana səhifə</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Haqqımızda</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Kontaktlarımız</NavLink>
                        </li>
                        <li>
                            <NavLink to="/location">Franşız</NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <NavLink to="/menu">Menü :</NavLink>
                        </li>
                    </ul>

                    <ul className='mobile-menu-list'>
                        <li>
                            <NavLink to="/menu/hotdrink">İsti İçkilər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/freshdrink">Sərin içkilər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/deserts">Desertlər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/salads">Salatlar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/burgers">Burgerlər</NavLink>
                        </li>
                    </ul>
                   
                </div>
            </div>
            <div className={"header " + headerClassName }>

                <div className="container ">
                    <div className="header-menu ">

                        <div className="header-logo h-100">
                            <NavLink to="/"><img src={logo} alt="" /></NavLink>
                        </div>

                        <div className="header-list h-100">
                            <ul>
                                <li><NavLink to="/">Ana səhifə</NavLink></li>
                                <li className="menu"><NavLink to="/menu" className="menu1" >Menü

                                </NavLink>
                                    <div className="menuoverlay">
                                        <ul>
                                            <li>
                                                <NavLink to="/menu/hotdrink">İsti İçkilər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/deserts">Desertlər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/burgers">Burgerlər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/salads">Salatlar</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/freshdrink">Sərin İçkilər</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink to="/about">Haqqımızda</NavLink></li>
                                <li><NavLink to="/location">Franşız</NavLink></li>
                                <li><NavLink to="/contacts">Kontaktlarımız</NavLink></li>
                            </ul>
                        </div>



                        <div className="header-search">
                            <ul>
                                <li className='mobile-menu-icon'>
                                    <span><i className="fa-solid fa-bars" onClick={() => setMenu(!menu)}></i></span>
                                </li>
                                <li>
                                    <NavLink to="/wishlist">
                                    <i className="fa-regular fa-heart"></i>
                                    </NavLink>
                                </li>
                                <li><span onClick={() => setSearch(!search)}><i className="fa-solid fa-magnifying-glass"></i></span></li>
                                <li><NavLink to="/cart" className='mycart'>
                                    <img src={card} alt=""  />
                                    <span className='cartcount'> {cart.length} </span>
                                </NavLink></li>
                                <li> <NavLink to="/profile"><i className="fa-regular fa-user"></i></NavLink> </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header