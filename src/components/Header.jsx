import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import card from '../images/card.png'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function Header() {
    const [menu, setMenu] = useState(false)
    const { cart } = useSelector(state => state)

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
    console.log(headerClassName);
    return (
        <>
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
                            <NavLink to="/blogs">Xəbərlər</NavLink>
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
                            <NavLink to="/menu/hot">İsti İçkilər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/deserts">Desertlər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/breakfast">Səhər Yeməkləri</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/salad">Salatlar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/dishes">İsti Yeməklər</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu/fresh">Sərin İçkilər</NavLink>
                        </li>
                    </ul>
                   
                </div>
            </div>
            <div className={"header " + headerClassName }>

                <div className="container h-100">
                    <div className="header-menu h-100">

                        <div className="header-logo h-100">
                            <NavLink to="/"><img src={logo} alt="" /></NavLink>
                        </div>

                        <div className="header-list">
                            <ul>
                                <li><NavLink to="/">Ana səhifə</NavLink></li>
                                <li className="menu"><NavLink to="/menu" className="menu1" >Menü

                                </NavLink>
                                    <div className="menuoverlay">
                                        <ul>
                                            <li>
                                                <NavLink to="/menu/hot">İsti İçkilər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/deserts">Desertlər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/breakfast">Səhər Yeməkləri</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/salad">Salatlar</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/dishes">İsti Yeməklər</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/menu/fresh">Sərin İçkilər</NavLink>
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
                                <li><span><i className="fa-solid fa-magnifying-glass"></i></span></li>
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