import React, { useContext, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let obj=useContext(Ct)
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  let login=()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      if(res.data.token==undefined)
      {
        setMsg(res.data.msg)
      }
      else{
        obj.storeupd(res.data)
        navigate("/")


      }

    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div>{msg}</div>
        <input type='text' placeholder='Enter e-mail' value={data._id} onChange={fun} name="_id"/>
        <input type='password' placeholder='Enter password' value={data.pwd} onChange={fun} name="pwd"/>
        <button onClick={login}>Login</button>


      </div>
    </div>
  )
}

export default Login