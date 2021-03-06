import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logoo.png'
import card from '../images/card.png'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

//AOS


function Header() {

    //AOS

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    //AOS
    const [menu, setMenu] = useState(false)
    const { cart, wish } = useSelector(state => state)
    const { products } = useSelector(state => state)

    const dispatch = useDispatch()
    const [headerClassName, setHeaderClassName] = useState('');

    // const handleScroll = (headerClassName) => {
    //     if (headerClassName !== 'menuscroll' && window.pageYOffset >= 100) {
    //         setHeaderClassName('menuscroll');
    //     } else if (headerClassName === 'menuscroll' && window.pageYOffset < 100) {
    //         setHeaderClassName('');
    //     }


    // }

    // useEffect(() => {
    //     window.onscroll = () => handleScroll(headerClassName);
    // }, [headerClassName]);

    // Search modal
    const [search, setSearch] = useState(false)
    // Search modal

    const [value, setValue] = useState('')


    const filteredProducts = products.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
    })


    // ADD TO CART
    const addtocart = (id) => {

        let check = cart.some(e => e.id === id)
        if (check) {
            dispatch({ type: "INCCOUNT", payload: id })
            dispatch({ type: "TOTAL", payload: id })
        } else {
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
                        <input type="text" placeholder='Axtard??q??n??z m??hsul' onChange={(e) => setValue(e.target.value)} />
                        <i className="fa-solid fa-magnifying-glass mysearch"></i>
                    </div>
                    <div className="searchModal-content">
                        {
                            filteredProducts.length > 0 ?
                                filteredProducts.map((index, key) => (
                                    <div className="searchModal-cart" key={key}>
                                        <ul>
                                            <li>
                                                <img src={index.image} alt="" />
                                            </li>
                                            <li>
                                                <h2> {index.title} </h2>
                                            </li>
                                            <li>
                                                <h2> ??? {index.price} </h2>
                                            </li>
                                            <li>
                                                <button onClick={() => addtocart(index.id)}> S??b??t?? g??nd??r </button>
                                            </li>
                                        </ul>
                                    </div>
                                )) :
                                <h3>Bel?? m??hsulumuz yoxdur</h3>
                        }
                    </div>
                </div>
            </div>

            <div className={menu ? "mobile-menu activated" : "mobile-menu"}>
                <div className="mobile-menu-cont">
                <div className="mobile-menu-head">
                    <h2><span>MENU</span> <span className='closemenu' onClick={() => setMenu(!menu)}>X</span></h2>
                </div>
                <div className="mobile-menu-content">
                    <ul className='mobile-menu-pages'>
                        <li>
                            <NavLink to="/react_project/" onClick={() => setMenu(!menu)}>Ana s??hif??</NavLink>
                        </li>
                        <li>
                            <NavLink to="/react_project/about" onClick={() => setMenu(!menu)}>Haqq??m??zda</NavLink>
                        </li>
                        <li>
                            <NavLink to="/react_project/contacts" onClick={() => setMenu(!menu)}>Kontaktlar??m??z</NavLink>
                        </li>
                        <li>
                            <NavLink to="/react_project/blogs" onClick={() => setMenu(!menu)}>Bloqlar</NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <NavLink to="/react_project/menu" onClick={() => setMenu(!menu)}>Menu :</NavLink>
                        </li>
                    </ul>

                    <ul className='mobile-menu-list'>
                        <li>
                            <NavLink to="menu/hotdrink" onClick={() => setMenu(!menu)}>??sti ????kil??r</NavLink>
                        </li>
                        <li>
                            <NavLink to="menu/freshdrink" onClick={() => setMenu(!menu)}>S??rin i??kil??r</NavLink>
                        </li>
                        <li>
                            <NavLink to="menu/deserts" onClick={() => setMenu(!menu)}>Desertl??r</NavLink>
                        </li>
                        <li>
                            <NavLink to="menu/salads" onClick={() => setMenu(!menu)}>Salatlar</NavLink>
                        </li>
                        <li>
                            <NavLink to="menu/burgers" onClick={() => setMenu(!menu)}>Burgerl??r</NavLink>
                        </li>
                    </ul>

                </div>
                </div>
                <div className="mobile-menu-close" onClick={() => setMenu(!menu)}>

                </div>
                
            </div>
            <div className={"header "}>

                <div className="container ">
                    <div className="header-menu ">

                        <div className="header-logo h-100">
                            <NavLink to="/react_project/"><img src={logo} alt="" /></NavLink>
                        </div>

                        <div className="header-list h-100">
                            <ul>
                                <li ><NavLink to="/react_project/">Ana s??hif??</NavLink></li>
                                <li className="menu"><NavLink to="/react_project/menu" className="menu1" >Menu

                                </NavLink>
                                    <div className="menuoverlay">
                                        <ul>
                                            <li >
                                                <NavLink to="/menu/hotdrink">??sti ????kil??r</NavLink>
                                            </li>
                                            <li >
                                                <NavLink to="/menu/deserts">Desertl??r</NavLink>
                                            </li>
                                            <li >
                                                <NavLink to="/menu/burgers">Burgerl??r</NavLink>
                                            </li>
                                            <li >
                                                <NavLink to="/menu/salads">Salatlar</NavLink>
                                            </li>
                                            <li >
                                                <NavLink to="/menu/freshdrink">S??rin ????kil??r</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li   ><NavLink to="/react_project/about">Haqq??m??zda</NavLink></li>
                                <li ><NavLink to="/react_project/blogs">Bloqlar</NavLink></li>
                                <li ><NavLink to="/react_project/contacts">Kontaktlar??m??z</NavLink></li>
                            </ul>
                        </div>



                        <div className="header-search">
                            <ul>
                                <li className='mobile-menu-icon'>
                                    <span><i className="fa-solid fa-bars" onClick={() => setMenu(!menu)}></i></span>
                                </li>
                                <li>
                                    <NavLink to="/react_project/profile/wish" className='wishhart'>
                                        <i className="fa-regular fa-heart wishheart"></i>
                                        <span className='wishcount'> {wish.length} </span>
                                    </NavLink>
                                </li>
                                <li><span onClick={() => setSearch(!search)}><i className="fa-solid fa-magnifying-glass searchglass"></i></span></li>
                                <li><NavLink to="/react_project/cart" className='mycart'>
                                    <img src={card} alt="" />
                                    <span className='cartcount'> {cart.length} </span>
                                </NavLink></li>
                                <li> <NavLink to="/react_project/profile/detailedprofile"><i className="fa-regular fa-user userhov"></i></NavLink> </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header