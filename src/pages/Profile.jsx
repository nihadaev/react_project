import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='profile-page'>
      <div className="container">
        <div className="profile-page-content">

          <div className="profile-page-list">
            <div className="profile-page-list-content">
              <ul>
                <li>
                  <Link to='/profile'>Şəxsi Məlumat</Link>
                </li>
                <li>
                  <Link to='/profile/wish'>İstək Siyahısı</Link>
                </li>
                <li>
                  <Link to='/profile/kupon'>Kuponlar</Link>
                </li>
                <li>
                  <Link to='/profile/orders'>Zakazlarım</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="profile-page-info">
            <h2>Şəxsi Məlumatım</h2>

            <form >
              <label className='w-100' >Ad*</label>
              <input type="text" value='Nihad' className='w-100' />

              <label className='w-100'>Soyad*</label>
              <input type="text" value='Abdullayev' className='w-100' />

              <label className='w-100'>Doğulduğunuz Tarix*</label>
              <input type="text" value='04.10.2001' className='w-100' />

              <label className='w-100'>Cinsiniz*</label>
              <input type="text" value='Kişi' className='w-100' />

              <label className='w-100'>E-poçt*</label>
              <input type="text" value='nihadaev@mail.ru' className='w-100' />

              <label className='w-100'>Əlaqə Nömrəsi*</label>
              <input type="text" value='+994-51-624-22-19' className='w-100' />


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile