import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// USE REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// USE REDUX

// AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

//AOS

function Contacts() {
    //AOS

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  //AOS
  const dispatch = useDispatch()

  const {usercontacts} = useSelector(state => state)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formdata,setFormdata] = useState({})
  const [allformdata,setAllformdata] = useState([])

  const handleSubmit= (e) => {
    e.preventDefault()
    dispatch({ type: "SENDUSER", payload: formdata })
    // setAllformdata([...allformdata, formdata])
    // if(allformdata.length>0){
      
    // }
   
  }

  const handleChange = (e) => {
    setFormdata({...formdata, [e.target.name] : e.target.value})
  }

  

  return (

    <div className='contact-page'>
      <div className="container">


        {/* <div className="contact-page-content">
          <div className="contact-page-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178795502193!2d49.82203171489345!3d40.38272976563153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2s!4v1650274407513!5m2!1sru!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

          </div>
          <div className="contact-page-cards">
            <div className="contact-page-address">
              <h3> <i className="fa-solid fa-location-dot"></i> <span> 10 Naxçıvan, Bakı 1005, Azərbaycan</span></h3>
            </div>
            <div className="contact-page-email">
              <h3><i className="fa-solid fa-phone"></i> <span>+994-51-624-22-19</span></h3>
              <h3> <i className="fa-solid fa-envelope"></i> <span>nihadaev@mail.ru</span></h3>
            </div>
            <div className="contact-page-social">
              <ul>
                <li>
                  <Link to='https://www.facebook.com/nihat.abdullayev.779/'><i class="fa-brands fa-facebook-f"></i> <span>Facebook</span></Link> 
                </li>
                <li>
                  <Link to='https://www.instagram.com/nihat_aev/'><i class="fa-brands fa-instagram"></i> <span>Instagram</span></Link>
                </li>
                <li>
                  <Link to='https://www.linkedin.com/in/nihad-abdullayev-710999236/'><i class="fa-brands fa-linkedin-in"></i> <span>Linkedin</span></Link>
                </li>
              </ul>
              
             
            </div>
          </div>
        </div> */}


        <div className="contact-page-form">
          <div className="contact-page-text">
            <h2>Veb həlli, veb dəstəyi və ya rəqəmsal böyümə ilə bağlı köməyə ehtiyacınız var?</h2>
            <h3>Bizə zəng edin: <span>+994-51-624-22-19</span></h3>
            <h3>Həftə içi açıq: <span>08:00-00:00</span></h3>
            <ul>
              <li>
                <Link to='https://www.facebook.com/nihat.abdullayev.779/'><i class="fa-brands fa-facebook-f"></i> </Link>
              </li>
              <li>
                <Link to='https://www.instagram.com/nihat_aev/'><i class="fa-brands fa-instagram"></i> </Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/in/nihad-abdullayev-710999236/'><i class="fa-brands fa-linkedin-in"></i> </Link>
              </li>

              <li>
                <Link to='https://twitter.com/'> <i class="fa-brands fa-twitter"></i></Link>
              </li>
            </ul>
          </div>
          <div className="contact-page-info">
            <h2 className='elaqesaxla'> Bizimlə əlaqə saxla</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder='Ad' name='ad' onChange={(e) => handleChange(e)}/>
              <input type="text" placeholder='Soyad' name='soyad' onChange={(e) => handleChange(e)}/>
              <input type="tel:" placeholder='Əlaqə nömrəniz' name='nömrə' onChange={(e) => handleChange(e)}/>
              <input type="email" placeholder='E-poçt ünvanınız' name='email' onChange={(e) => handleChange(e)}/>
              <textarea name="mesaj"  cols="20" rows="5" placeholder='Mesajınız' onChange={(e) => handleChange(e)}></textarea>
              <button>Göndər</button>
            </form>
          </div>
        </div>

        <div className="contact-page-map">
          <div className="contact-map-text">
            <h2>Biz BAKI-da yerləşirik</h2>
            <h3> <i className="fa-solid fa-location-dot"></i> <span> 10 Naxçıvan, Bakı 1005, Azərbaycan</span></h3>
            <h3><i className="fa-solid fa-phone"></i> <span>+994-51-624-22-19</span></h3>
            <h3> <i className="fa-solid fa-envelope"></i> <span>nihadaev@mail.ru</span></h3>

          </div>
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.178795502193!2d49.82203171489345!3d40.38272976563153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2s!4v1650274407513!5m2!1sru!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Contacts