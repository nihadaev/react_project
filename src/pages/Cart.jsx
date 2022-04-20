import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'


function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  const {cart} = useSelector(state => state)
  console.log(cart);
  const dispatch = useDispatch()

  const [total,setTotal] = useState([])

  // ADD TO CART
  const incCount = (id) => {
    console.log(id);
        dispatch({ type: "INCCOUNT", payload: id }) 
        dispatch ({type: "TOTAL", payload: id})

}

const [suremodal,setSuremodal] = useState(false)
const [suremodaldata,setSuremodaldata] = useState({})
  const degCount = (id) => {
    let a = cart.find( e => e.id === id)
    if (a.count > 1) {
      dispatch({ type: "DEGCOUNT", payload: id }) 
      dispatch ({type: "TOTAL", payload: id})
    }else{
      setSuremodal(!suremodal)
      let a= cart.find(element => element.id === id )
      setSuremodaldata(a)
      //dispatch({ type: "DELETE", payload: id })
    }
    
  }

  console.log(suremodaldata);
  
  
  const deleteItem = (id) =>{
    dispatch({type: "DELETE", payload: id})
  }
// ADD TO CART
  let totalamount=0
  useEffect(() => {
    cart.length>0 ?
    cart.map(e => {
    totalamount+= e.total
    setTotal(totalamount)
    })
    : setTotal(0)
  }, [cart])




  return (
    <div className='cart-page'>
        <div className={suremodal? 'sure-modal show' : 'sure-modal'}>
            <div className="sure-modal-content">
              <span className='closesuremodal' onClick={() => setSuremodal(!suremodal)}>X</span>
              <h2>Məhsulu səbətdən silmək istəyirsiniz?</h2>
              <div className="sure-modal-buttons">
                <button className="btn btn-success" onClick={() => deleteItem(suremodaldata.id)}>Hə</button>
                <button className="btn btn-danger" onClick={() => setSuremodal(!suremodal)}>Yox</button>
              </div>
            </div>
        </div>

        <div className="container">
          <h2>Səbət</h2>
          
          <div className="cart-page-content">
            <div className="cart-page-content-info">
                <ul className='cart-page-list'>
                  <li>
                    <h3>Məhsul</h3>
                  </li>
                  <li>
                    <h3>Qiymət</h3>
                  </li>
                  <li>
                    <h3>Miqdar</h3>
                  </li>
                  <li>
                    <h3>Yekün qiymət</h3>
                  </li>
                </ul>

                {
                  cart &&  cart.map((index,key) => (
                    
                    <ul className='cart-page-products' key={key}>
                        <li className='cart-page-products-img'>
                          <h4> {index.title} </h4>
                          <img src={index.image} alt="" />
                          
                        </li>

                        <li><h4 className='item-price'> ₼ {index.price} </h4></li>

                        <li className='item-count' >
                          <button className="btn btn-danger" onClick={() => degCount(index.id)}>
                            -
                          </button>
                        <input type="text" value={index.count} />
                        <button className="btn btn-success" onClick={() => incCount(index.id)}>
                          +
                        </button>
                      </li>

                      <li className='trashtotal'>
                        <h4> ₼ {index.total} </h4>
                        <i className="fa-solid fa-trash-can trash" onClick={() => deleteItem(index.id)}></i>
                      </li>
                    </ul>
                  ))
                }
               
            </div>
            <div className="cart-page-content-pay">
                  {
                    
                    <div className="cart-page-pay-text w-100">
                      <h2> Yekün Qiymət : ₼ {total} </h2>
                      <button className="btn btn-success w-100">Ödəniş et</button>
                    </div>

                  }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart