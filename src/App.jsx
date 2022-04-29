import React , {useEffect,useLayoutEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Profile from './pages/Profile'
import Testimonials from './pages/Detailedblog'
import {Route,Routes, useLocation} from 'react-router-dom'
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Kupon from "./pages/Kupon";
import Blogs from "./pages/Blogs";
import Detailedblog from "./pages/Detailedblog";


function App() {
  const loc = useLocation()
  const [preload,setPreload]= useState(false)
  const dispatch= useDispatch()
  const { products } = useSelector(state => state)
  const {popular} = useSelector (state => state)
  const {saleproducts} = useSelector(state => state)
  
  useEffect(() => { 
    fetch('https://arcane-oasis-69688.herokuapp.com/products').then(res => res.json())
    .then(data => 
      dispatch({type: "ALL_DATA", payload: data})
    )
    setPreload(!preload)

  }, [])

  
  useEffect(() => {
    let pop= []
    let sale= []
    products.map(e => {
      
      if(e.popular == "popular"){
        pop.push(e)
          // setPop(state => [...state,e])
         // console.log(e); 
         //console.log(popular);
      } else if(e.popular == "sale"){
        sale.push(e)
      }
      
      
    })
    dispatch({type: "POPULAR", payload: pop })
    dispatch({type : "SALE", payload: sale})
  }, [products])
  

  
  console.log(popular);
  console.log(saleproducts);
  
  


  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

   
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
 
  return (
    <>
       {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <span><i class="fa-solid fa-arrow-up"></i></span>
        </button>
      )}

      <div className={preload ? 'preload aktivated' : 'preload '}>
        <img src="https://acegif.com/wp-content/gifs/coffee-34.gif" alt="" className="w-100 h-100" />
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element= {<Menu />} />
        <Route path="/menu/:category" element= {<Detail />} />



        <Route path="/cart" element= {<Cart />} />
        <Route path="/profile/wish" element= { <Wish /> } />
        <Route path="/profile/kupon" element= { <Kupon /> } />
        <Route path="/about" element= {<About />} />
        <Route path="/contacts" element= {<Contacts />} />
        <Route path="/profile/detailedprofile" element= {<Profile />} />
        <Route path="/blogs" element= {<Blogs />} />
        <Route path="/blogs/detailed" element= {<Detailedblog />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
