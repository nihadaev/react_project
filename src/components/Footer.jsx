import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

// USE REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// тUSE REDUX

// SWEETALERT
import swal from 'sweetalert';
// SWEETALERT

function Footer() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    // SUBSCRIBE NEWS
    const { subscribers } = useSelector(state => state)
    const [subscriber,setSubscriber] = useState({})

    const [subscribersData,setSubscribersData] = useState([
        {
            id: 1,
            email: "nihadaev@mail.ru"
        }
    ])


    const sendSubscriber = (e) => {
        e.preventDefault()
        
        let check = subscribersData.some(el => el.email === subscriber.email)
        if(check){
            
            swal({
                title: "Xəbərlərimiz siz tərəfdən izlənilir!",
                icon: "error",
              });
        }else{
            setSubscribersData([...subscribersData, subscriber])
            dispatch({type:"SUBSCRIBE",payload: subscriber})
            swal({
                title: "Ən son xəbərlərimiz sizin emailinizə gondəriləcək!",
                icon: "success",
              });
        }
        
        
        
    }
    const handleChange = (e) => {
        let subscriberid;
        if (subscribersData.length>0){
         subscriberid = Math.max(...subscribersData.map(el => el.id));
        } else{
            subscriberid= 0;
        }
        
            setSubscriber({id: subscriberid+1, [e.target.name] : e.target.value})
        
        
    }
    
    //SUBSCRIBE NEWS
    return (
        <div className='myfooter'>
            <div className="container">
                <div className="myfooter-content">
                    <div className="myfooter-content-text">
                        <h2>Kontaktlarımız</h2>
                        <ul>
                            <li>
                                <span><i className="fa-solid fa-location-dot"></i></span> <span> 10 Naxçıvan, Bakı 1005, Azərbaycan</span>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-phone"></i></span> <span>+994-51-624-22-19</span>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-envelope"></i></span> <span>nihadaev@mail.ru</span>
                            </li>
                        </ul>
                    </div>

                    <div className="myfooter-content-text">
                        <h2>Məlumat</h2>
                        <ul>
                            <li>
                                <NavLink to="/react_project/about">Haqqımızda</NavLink>
                            </li>
                            <li>
                                <NavLink to="/react_project/contacts">Kontaktlarımız</NavLink>
                            </li>
                            <li>
                                <NavLink to="/react_project/menu">Menu</NavLink>
                            </li>
                            <li>
                            <NavLink to="/react_project/blogs" >Bloqlar</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="myfooter-content-text">
                        <h2>Hesab</h2>
                        <ul>
                            <li>
                                <NavLink to="/react_project/profile/detailedprofile">Hesabım</NavLink>
                            </li>
                            <li>
                                <NavLink to="/react_project/profile/wish">İstək siyahısı</NavLink>
                            </li>
                            <li>
                                <NavLink to="/react_project/cart">Səbət</NavLink>
                            </li>
                            <li>
                                <NavLink to='/react_project/profile/kupon'>Kuponlar</NavLink>
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
                                <form className='footer-form' onSubmit={ (e) => sendSubscriber(e)}>
                                    <input type="email" name='email' placeholder='E-poçt ünvanınızı daxil edin' onChange={(e) => handleChange(e)} />
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