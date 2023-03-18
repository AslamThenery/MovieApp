import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../Images/user.png';
import "./Header.css"

function Header() {
  return (
    <div  className='header'>
        <Link to="/">
        <div className="logo">Movie App</div>
        </Link>
        <div className="user-img">
            <img src={user} alt="user" />
        </div>
    </div>
  )
}

export default Header