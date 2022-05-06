import React, { useState, useEffect } from 'react'
import { NavLink, NavNavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'

function Wish() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  const { wish } = useSelector(state => state)
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  


  //ADD TO WISHLIST
  const addToWishlist = (id) => {
    let check = wish.some(e => e.id === id)
    check ?
      dispatch({ type: "DELETEFROMWISH", payload: id })
      :
      dispatch({ type: "WISH", payload: id })

  }
  // ADD TO WISHLIST


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


  // OPEN OR CLOSE MODAL
  const [mymodal, setMymodal] = useState(false)
  // OPEN OR CLOSE MODAL

  //DATA FOR MODAL
  const [moreData, setMoreData] = useState({})

  //DATA FOR MODAL


  // SET DATA FOR MODAL
  const readMore = (id) => {
    setMymodal(!mymodal)
    let a = wish.find(e => e.id === id)
    setMoreData(a)
  }
  // SET DATA FOR MODAL
  return (
    <div className='wish-page'>
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
            <img src={moreData.image} alt="" className='w-100' />
          </div>

          <div className="mymodal-content-text">
            <h4> Reytinq : <i className="fa-solid fa-star"></i> {moreData.rating} </h4>
            <h3>Category: {moreData.category} </h3>
            <p> <span>Tərkibi</span> : {moreData.description} </p>

            <h2> {moreData.price} ₼ </h2>
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
      </div>
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

          <div className="wish-page-info">

            {
              wish.length > 0 ?
                wish.map((index, key) => (
                  <div className="products-card" key={key}>
                    <div className="mycard-img w-100" >
                      <img src={index.image} alt="" className='w-100  h-100' />

                      <div className="mycard-img-overlay">
                        <ul>
                          <li>
                            {
                               wish.some( e => e.id === index.id ) ?
                               <span className='addedtowish' onClick={() => dispatch({type: "DELETEFROMWISH", payload: index.id})}>
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

                  </div>
                ))

                : <h2>İstək Siyahınızda Məhsul Yoxdur</h2>
            }
          </div>


        </div>
      </div>
    </div>
  )
}

export default Wish