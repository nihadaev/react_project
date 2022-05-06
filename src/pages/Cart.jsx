import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'


function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { cart } = useSelector(state => state)

  const dispatch = useDispatch()

  const [total, setTotal] = useState([])

  // ADD TO CART
  const incCount = (id) => {

    dispatch({ type: "INCCOUNT", payload: id })
    dispatch({ type: "TOTAL", payload: id })

  }

  const [paymodal, setPaymodal] = useState(false)


  const [suremodal, setSuremodal] = useState(false)
  const [suremodaldata, setSuremodaldata] = useState({})
  const degCount = (id) => {
    let a = cart.find(e => e.id === id)
    if (a.count > 1) {
      dispatch({ type: "DEGCOUNT", payload: id })
      dispatch({ type: "TOTAL", payload: id })
    } else {
      setSuremodal(!suremodal)
      let a = cart.find(element => element.id === id)
      setSuremodaldata(a)
      //dispatch({ type: "DELETE", payload: id })
    }

  }




  const deleteItem = (id) => {
    dispatch({ type: "DELETE", payload: id })
    if (suremodal) {
      setSuremodal(!suremodal)
    }

  }
  // ADD TO CART
  let totalamount = 0
  useEffect(() => {
    cart.length > 0 ?
      cart.map(e => {
        totalamount += e.total
        setTotal(Math.ceil(totalamount * 100) / 100)
      })
      : setTotal(0)
  }, [cart])

  const paycart = () => {
    if (cart.length > 0) {
      setPaymodal(!paymodal)
    }
  }

  const {
    register,
    formState: {
      errors
    },
    reset,
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  })


  const onSubmit = () => {
    setPaymodal(!paymodal)
    reset()
  }
  return (
    <div className='cart-page'>


      <div className={paymodal ? 'pay-modal applied' : 'pay-modal'} onClick={() => setPaymodal(!paymodal)}>

        <div className="pay-modal-content" onClick={e => e.stopPropagation()}>
          <span className='closepaymodal' onClick={() => setPaymodal(!paymodal)}>
            X
          </span>

          <form className='payform' onSubmit={handleSubmit(onSubmit)}>
            <label className='cardnumber'>
              Kartın Nömrəsi
            </label>
            <input
              {...register('cardnumber', {
                required: true,
                minLength: {
                  value: 16,
                  message: 'Card nömrəsi 16 rəqəmnən ibarətdi'
                },
                maxLength: 16
              })}
              maxLength={16}
              className='cardnumber1' placeholder='XXXX-XXXX-XXXX-XXXX' />
            <div className="error">
              {errors?.cardnumber && <p> {errors?.cardnumber?.message || 'Məlumat yanlışdı'}</p>}
            </div>
            <div className="datecvv">
              <div className="date">
                <label>
                  Müddətin bitmə tarixi
                </label>
                <input 
                {...register('date', {
                  required: true,
                  minLength: {
                    value: 4,
                    message: 'Müddət  səhvdi'
                  },
                  maxLength: 4,
                })}
                maxLength={4}
                placeholder='MM/YY' />
                <div className="error">
                  {errors?.date && <p> {errors?.date?.message || 'Məlumat yanlışdı'}</p>}
                </div>

              </div>
              <div className="cvv">
                <label>
                  Təhlükəsizlik kodu
                </label>
                <input
                  {...register('cvv', {
                    required: true,
                    minLength: {
                      value: 3,
                      message: 'Təhlukəsizlik kodu səhvdi'
                    },
                    maxLength: 3
                  })}
                  maxLength={3}
                  placeholder='CVV' />
                <div className="error">
                  {errors?.cvv && <p> {errors?.cvv?.message || 'Məlumat yanlışdı'}</p>}
                </div>
              </div>
            </div>

            <div className="pay-button">

              <button className="btn btn-success">
                Ödə
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className={suremodal ? 'sure-modal show' : 'sure-modal'}>
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
              cart && cart.map((index, key) => (

                <ul className='cart-page-products' key={key}>
                  <li className='cart-page-products-img'>
                    <h4> {index.title} </h4>
                    <img src={index.image} alt="" />

                  </li>

                  <li><h4 className='item-price'> ₼ {index.price} </h4></li>

                  <li className='item-count' >
                    <button className="deg-btn" onClick={() => degCount(index.id)}>
                      -
                    </button>
                    <input type="text" value={index.count} />
                    <button className="inc-btn " onClick={() => incCount(index.id)}>
                      +
                    </button>
                  </li>

                  <li className='trashtotal'>
                    <h4> ₼ {Math.ceil(index.total * 100) / 100} </h4>
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
                <button className="btn btn-success w-100" onClick={() => paycart()}>Ödəniş et</button>
              </div>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart