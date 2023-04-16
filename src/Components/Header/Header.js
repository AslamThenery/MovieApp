import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import user from '../../Images/user.png';
import {Search, Menu, X} from "react-feather";
import "./Header.css"

function Header() {
  const [nav, setNav] = useState(true)
  const [active, setActive] = useState(false)
  const handleSearch = () =>{

  }
  const handleMenu = () =>{
         setNav(!nav)
        setActive(!active)
  }
  return (
    <div  className='header'>
        <div className="logo">
          <h3>Movie App</h3>
        </div>
        <div className="search">
          <input type="text" name="search" id="" />
          < Search onClick={handleSearch} id='search-icon' />
        </div>
        <di  className="pages" >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>

                <Link to="/tvShows">Tv Shows</Link>
              </li>
              <li>

                <Link to="/movies">Movies</Link>
              </li>
              <li>

                <Link to="/favourites">Favuorites</Link>
              </li>
              
            </ul>
          </nav>
        </di>

        {/* <------------------------------------------RESPONSIVE NAVBAR-----------------------------------> */}

        <di  className="small-nav" style={ active? {display:'block'} : {display:'none'}}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>

                <Link to="/tvShows">Tv Shows</Link>
              </li>
              <li>

                <Link to="/movies">Movies</Link>
              </li>
              <li>

                <Link to="/favourites">Favuorites</Link>
              </li>
              
            </ul>
          </nav>
        </di>
       

        <div className="small-device">
{ nav?
        < Menu onClick={handleMenu} id='menu-icon' />
        : ""
}    
{
  nav !== true ?

        < X onClick={handleMenu} id='menu-icon' />
        :""
}

        </div>

       
        <div className="user-img">
            <img src={user} alt="user" />
        </div>  
    </div>
  )
}

export default Header