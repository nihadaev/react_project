import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='myfooter'>
            <div className="container">
                <div className="myfooter-content">
                    <div className="myfooter-content-text">
                        <h2>Kontaktlarımız</h2>
                        <ul>
                            <li>
                                <span><i class="fa-solid fa-location-dot"></i></span> <span> Caspian Business Center, 42 J. Jabbarli, Baku</span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-phone"></i></span> <span>+994-51-624-22-19</span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-envelope"></i></span> <span>nihadaev@mail.ru</span>
                            </li>
                        </ul>
                    </div>

                    <div className="myfooter-content-text">
                        <h2>Məlumat</h2>
                        <ul>
                            <li>
                                <NavLink to="/about">Haqqımızda</NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonials">Rəylər</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu">Menü</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="myfooter-content-text">
                        <h2>Akkaunt</h2>
                        <ul>
                            <li>
                                <NavLink to="/profile">Hesabım</NavLink>
                            </li>
                            <li>
                                <NavLink to="/wishlist">İstək siyahısı</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart">Səbət</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="myfooter-content-text">
                        <h2>Bizi izlə</h2>
                        <ul>
                            <li>
                                <span className='news'>Ən Son Xəbərlərimizi və Tədbirlərimizi Almaq üçün Qeydiyyatdan Keçin</span>
                            </li>
                            <li>
                                <form className='footer-form'>
                                    <input type="text" value='E-poçt ünvanınızı daxil edin' />
                                    <button >İzlə</button>
                                </form>

                            </li>

                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer