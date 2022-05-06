import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Orders() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='orders-page'>
            <div className="container">
                <div className="profile-page-content">
                    <div className="profile-page-list">
                        <div className="profile-page-list-content">
                            <ul>
                                <li>
                                    <NavLink to='/react_project/profile/detailedprofile'>Şəxsi Məlumat</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/react_project/profile/wish'>İstək Siyahısı</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/react_project/profile/kupon'>Kuponlar</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/react_project/profile/orders'>Sifarişlərim</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="orders-page-info">
                        <h2>SİFARİŞLƏRİNİZ YOXDUR</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Orders