import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  let [data,setData]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.store.token=="")
    {
      navigate("/login")
    }
    else{
    axios.get(`http://localhost:5000/getcart/${obj.store._id}`).then((res)=>{
      setData(res.data)
    })
    }
  },[])
  return (<>
  {data.length==0&&<div>Cart is Empty</div>}
  {data.length!=0&&<div className='cardcon'>
      {
        data.map((item)=>{
          return(<div className='card'>
            <img src={`http://localhost:5000/prodimgs/${item.pimg}`} className='card-img-top'/>
            <div className='card-body'>
            <h5 class="card-title">{item.name}</h5>
           
            <p className='card-text'>Price:{item.price}</p>
            <p className='card-text'>
              <button>-</button>
              {item.qty} <button>+</button></p>
              <p className='card-text'>Amount:{item.price*item.qty}</p>
              <button>delprodfromcart</button>

           
            
              </div>
            </div>)
        })
      }

    </div>}
  </>
    
  )
}

export default Cart