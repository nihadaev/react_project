import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
function Kupon() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='kupon-page'>
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
                                    <NavLink to='/react_project/profile/orders'>Zakazlarım</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="kupon-content">
                        <h2>Kuponlar</h2>
                        <div className="kupon-card">
                            <div className="kupon-card-img">
                                <img className='w-100' src="https://api.gmoji.world//files/6203ce2b8b73cd314fd80051_ec40200c-74d4-440d-aa5f-c3c5a1cfc39f.png" alt="" />
                            </div>
                            <div className="kupon-card-text">
                                <h3>Coders şəbəkəsinin əksər qəhvəxanalarında menyumuzdan yeməklər və içkilər üçün 10 manat. Hədiyyə kartı sizə hədiyyə kartının nominal dəyərindən çox olmayan qiymətə pulsuz sifariş almaq hüququ verir.</h3>
                            </div>
                            <span>10 ₼</span>
                        </div>

                        <div className="kupon-card">
                            <div className="kupon-card-img">
                                <img className='w-100' src="https://api.gmoji.world//files/6203ce348b73cd314fd80081_e94049ee-6c3a-45ef-9c52-3d725419e873.png" alt="" />
                            </div>
                            <div className="kupon-card-text">
                                <h3>Coders şəbəkəsinin əksər qəhvəxanalarında menyumuzdan yeməklər və içkilər üçün 30 manat. Hədiyyə kartı sizə hədiyyə kartının nominal dəyərindən çox olmayan qiymətə pulsuz sifariş almaq hüququ verir.</h3>
                            </div>
                            <span>30 ₼</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kupon