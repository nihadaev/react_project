import React , {useEffect} from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Home from './pages/Home'
import Menu from './pages/Menu'
import {Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";


function App() {
  const dispatch= useDispatch()
  useEffect(() => {
    fetch('http://localhost:7000/products').then(res => res.json())
    .then(data => 
      dispatch({type: "ALL_DATA", payload: data})
    )
  }, [])

  useEffect(() => {
    fetch('http://localhost:7000/popularproducts').then(res => res.json())
    .then(data => 
      dispatch({type: "POPULAR", payload: data})
      )
  }, [])

  useEffect(() => {
    fetch('http://localhost:7000/saleproducts').then(res => res.json())
    .then(data => 
      dispatch({type: "SALE", payload: data})
      )
  }, [])
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element= {<Menu />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
