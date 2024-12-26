import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import Reg from './comp/Reg'
import Login from './comp/Login'
import Cart from './comp/Cart'
import Logout from './comp/Logout'
import Addprod from './comp/Addprod'
import Ct from './comp/Ct'
import './App.css'

const App = () => {
  let [store,setStore]=useState({"token":"","_id":"","name":"","role":""})
  let storeupd=(obj)=>{
    setStore({...store,...obj})

  }
  let obj={"store":store,"storeupd":storeupd}
  return (<BrowserRouter>
  <Ct.Provider value={obj}>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/reg' element={<Reg/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path='/addprod' element={<Addprod/>}/>

  </Routes>
  </Ct.Provider>
  </BrowserRouter>
    
  )
}

export default App