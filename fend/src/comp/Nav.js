import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
    let obj=useContext(Ct)
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/">Home</Link>
      {obj.store.token==""&&  <Link to="/login">Login</Link>}
      {obj.store.token==""&&  <Link to="/reg">Register</Link>}
      {obj.store.role=="admin"&& <Link to="/addprod">Addprod</Link>}
      {obj.store.token!=""&& <Link to="/cart">Cart</Link>}
      {obj.store.token!=""&&  <Link to="/logout">Logout</Link>}
        
        <div className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
      {obj.store.token!=""&& <div>{obj.store.name[0].toUpperCase()}</div>}

    </nav>
  )
}

export default Nav